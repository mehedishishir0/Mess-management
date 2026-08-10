import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { getSessionFromRequest } from '@/lib/auth'

const expenseSchema = z.object({ action: z.literal('expense'), memberId: z.string(), category: z.string().trim().min(1).max(60), amount: z.number().finite().min(0) })
const mealSchema = z.object({ action: z.literal('meal'), dayId: z.string(), memberId: z.string(), count: z.number().int().min(0).max(3) })
const utilitySchema = z.object({ action: z.literal('utility'), id: z.string().optional(), name: z.string().trim().min(1).max(60), amount: z.number().finite().min(0) })
const memberSchema = z.object({ action: z.literal('member'), name: z.string().trim().min(1).max(60) })
const memberUpdateSchema = z.object({ action: z.literal('memberUpdate'), memberId: z.string(), name: z.string().trim().min(1).max(60) })
const memberRemoveSchema = z.object({ action: z.literal('memberRemove'), memberId: z.string() })
const utilityRemoveSchema = z.object({ action: z.literal('utilityRemove'), id: z.string() })
const overrideSchema = z.object({ action: z.literal('override'), memberId: z.string(), utilities: z.number().finite().min(0).nullable().optional(), mealRate: z.number().finite().min(0).nullable().optional() })
const rentSchema = z.object({ action: z.literal('rent'), memberId: z.string(), houseRent: z.number().finite().min(0) })
const bodySchema = z.discriminatedUnion('action', [expenseSchema, mealSchema, utilitySchema, memberSchema, memberUpdateSchema, memberRemoveSchema, utilityRemoveSchema, overrideSchema, rentSchema])

function currentMonthKey() {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
}

function getMonthDays(monthKey: string) {
  const [year, month] = monthKey.split('-').map(Number)
  const firstDay = new Date(year, month - 1, 1)
  const days = [] as Array<{ date: string; label: string }>
  const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let current = new Date(firstDay)
  while (current.getMonth() === firstDay.getMonth()) {
    days.push({
      date: String(current.getDate()).padStart(2, '0'),
      label: weekdayNames[current.getDay()],
    })
    current.setDate(current.getDate() + 1)
  }
  return days
}

async function ensureMonthDays(messId: string, monthKey: string) {
  const count = await prisma.mealDay.count({ where: { messId, monthKey } })
  if (count > 0) return
  const monthDays = getMonthDays(monthKey)
  await prisma.mealDay.createMany({
    data: monthDays.map((day) => ({
      messId,
      monthKey,
      date: day.date,
      label: day.label,
    })),
  })
}

export async function GET(request: Request) {
  try {
    const session = getSessionFromRequest(request)
    if (!session) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    const monthKey = new URL(request.url).searchParams.get('month') ?? currentMonthKey()

    await ensureMonthDays(session.messId, monthKey)

    const data = await prisma.mess.findUnique({
      where: { id: session.messId },
      include: {
        members: true,
        days: {
          where: { monthKey },
          include: { entries: true },
          orderBy: { date: 'asc' },
        },
        expenses: {
          where: { monthKey },
        },
        utilities: {
          where: { monthKey },
        },
        overrides: {
          where: { monthKey },
        },
        houseRents: {
          where: { monthKey },
        },
      },
    })

    if (!data) {
      return NextResponse.json({ error: 'Mess not found' }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('messflow GET error:', error)
    return NextResponse.json({ error: 'Unable to load data from MongoDB' }, { status: 500 })
  }
}

async function handleMutation(request: Request) {
  try {
    const session = getSessionFromRequest(request)
    if (!session) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    const monthKey = new URL(request.url).searchParams.get('month') ?? currentMonthKey()
    const input = bodySchema.parse(await request.json())
    const mess = await prisma.mess.findUnique({ where: { id: session.messId } })
    if (!mess) {
      return NextResponse.json({ error: 'Mess not found' }, { status: 404 })
    }

    await ensureMonthDays(mess.id, monthKey)

    if (input.action === 'meal') {
      const [day, member] = await Promise.all([
        prisma.mealDay.findUnique({ where: { messId_monthKey_date: { messId: mess.id, monthKey, date: input.dayId } } }),
        prisma.member.findUnique({ where: { messId_externalId: { messId: mess.id, externalId: input.memberId } } }),
      ])
      if (!day || !member) throw new Error('Meal record not found')
      await prisma.mealEntry.upsert({
        where: { dayId_memberId: { dayId: day.id, memberId: member.id } },
        update: { count: input.count },
        create: { dayId: day.id, memberId: member.id, count: input.count },
      })
    }

    if (input.action === 'expense') {
      const member = await prisma.member.findUniqueOrThrow({ where: { messId_externalId: { messId: mess.id, externalId: input.memberId } } })
      await prisma.expense.upsert({
        where: { messId_monthKey_memberId_category: { messId: mess.id, monthKey, memberId: member.id, category: input.category } },
        update: { amount: input.amount },
        create: { messId: mess.id, monthKey, memberId: member.id, category: input.category, amount: input.amount },
      })
    }

    if (input.action === 'utility') {
      await prisma.utility.upsert({
        where: { messId_monthKey_externalId: { messId: mess.id, monthKey, externalId: input.id ?? input.name.toLowerCase().replaceAll(' ', '-') } },
        update: { name: input.name, amount: input.amount },
        create: { messId: mess.id, monthKey, externalId: input.id ?? input.name.toLowerCase().replaceAll(' ', '-'), name: input.name, amount: input.amount },
      })
    }

    if (input.action === 'member') {
      await prisma.member.create({
        data: {
          messId: mess.id,
          externalId: `${input.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`,
          name: input.name,
          initials: input.name.slice(0, 2).toUpperCase(),
          color: 'bg-primary',
        },
      })
    }

    if (input.action === 'memberUpdate') {
      await prisma.member.updateMany({
        where: { messId: mess.id, externalId: input.memberId },
        data: { name: input.name, initials: input.name.slice(0, 2).toUpperCase() },
      })
    }

    if (input.action === 'memberRemove') {
      await prisma.member.deleteMany({
        where: { messId: mess.id, externalId: input.memberId },
      })
    }

    if (input.action === 'utilityRemove') {
      await prisma.utility.deleteMany({ where: { messId: mess.id, monthKey, externalId: input.id } })
    }

    if (input.action === 'override') {
      const member = await prisma.member.findUniqueOrThrow({ where: { messId_externalId: { messId: mess.id, externalId: input.memberId } } })
      await prisma.override.upsert({
        where: { messId_monthKey_memberId: { messId: mess.id, monthKey, memberId: member.id } },
        update: { utilities: input.utilities ?? null, mealRate: input.mealRate ?? null },
        create: { messId: mess.id, monthKey, memberId: member.id, utilities: input.utilities ?? null, mealRate: input.mealRate ?? null },
      })
    }

    if (input.action === 'rent') {
      const member = await prisma.member.findUniqueOrThrow({ where: { messId_externalId: { messId: mess.id, externalId: input.memberId } } })
      await prisma.houseRent.upsert({
        where: { messId_memberId_monthKey: { messId: mess.id, memberId: member.id, monthKey } },
        update: { amount: input.houseRent },
        create: { messId: mess.id, memberId: member.id, amount: input.houseRent, monthKey },
      })
    }

    return await GET(request)
  } catch (error) {
    console.error('messflow POST error:', error)
    if (error instanceof z.ZodError) return NextResponse.json({ error: error.issues[0]?.message }, { status: 400 })
    return NextResponse.json({ error: 'Unable to save data to MongoDB' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  return handleMutation(request)
}

export async function PUT(request: Request) {
  return handleMutation(request)
}

export async function DELETE(request: Request) {
  return handleMutation(request)
}
