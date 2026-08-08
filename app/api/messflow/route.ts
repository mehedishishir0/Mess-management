import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

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

async function ensureMonthDays(householdId: string, monthKey: string) {
  const count = await prisma.mealDay.count({ where: { householdId } })
  if (count > 0) return
  const monthDays = getMonthDays(monthKey)
  await prisma.mealDay.createMany({
    data: monthDays.map((day) => ({
      householdId,
      date: day.date,
      label: day.label,
    })),
  })
}

async function getHousehold(monthKey: string) {
  let household = await prisma.household.findFirst({ where: { name: 'Apartment 4B', monthKey } })
  if (household) {
    await ensureMonthDays(household.id, monthKey)
    return household
  }
  household = await prisma.household.create({ data: { name: 'Apartment 4B', monthKey } })
  await ensureMonthDays(household.id, monthKey)
  return household
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const monthKey = url.searchParams.get('month') ?? currentMonthKey()
    const household = await getHousehold(monthKey)
    const data = await prisma.household.findUnique({ where: { id: household.id }, include: { members: true, days: { include: { entries: true }, orderBy: { date: 'asc' } }, expenses: true, utilities: true, overrides: true } })
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Unable to load data from MongoDB' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const url = new URL(request.url)
    const monthKey = url.searchParams.get('month') ?? currentMonthKey()
    const input = bodySchema.parse(await request.json())
    const household = await getHousehold(monthKey)
    if (input.action === 'meal') {
      const [day, member] = await Promise.all([prisma.mealDay.findUnique({ where: { householdId_date: { householdId: household.id, date: input.dayId } } }), prisma.member.findUnique({ where: { householdId_externalId: { householdId: household.id, externalId: input.memberId } } })])
      if (!day || !member) throw new Error('Meal record not found')
      await prisma.mealEntry.upsert({ where: { dayId_memberId: { dayId: day.id, memberId: member.id } }, update: { count: input.count }, create: { dayId: day.id, memberId: member.id, count: input.count } })
    }
    if (input.action === 'expense') {
      const member = await prisma.member.findUniqueOrThrow({ where: { householdId_externalId: { householdId: household.id, externalId: input.memberId } } })
      await prisma.expense.upsert({ where: { householdId_memberId_category: { householdId: household.id, memberId: member.id, category: input.category } }, update: { amount: input.amount }, create: { householdId: household.id, memberId: member.id, category: input.category, amount: input.amount } })
    }
    if (input.action === 'utility') await prisma.utility.upsert({ where: { householdId_externalId: { householdId: household.id, externalId: input.id ?? input.name.toLowerCase().replaceAll(' ', '-') } }, update: { name: input.name, amount: input.amount }, create: { householdId: household.id, externalId: input.id ?? input.name.toLowerCase().replaceAll(' ', '-'), name: input.name, amount: input.amount } })
    if (input.action === 'member') await prisma.member.create({ data: { householdId: household.id, externalId: `${input.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`, name: input.name, initials: input.name.slice(0, 2).toUpperCase(), color: 'bg-primary' } })
    if (input.action === 'memberUpdate') {
      await prisma.member.updateMany({ where: { householdId: household.id, externalId: input.memberId }, data: { name: input.name, initials: input.name.slice(0, 2).toUpperCase() } })
    }
    if (input.action === 'memberRemove') {
      await prisma.member.deleteMany({ where: { householdId: household.id, externalId: input.memberId } })
    }
    if (input.action === 'utilityRemove') {
      await prisma.utility.deleteMany({ where: { householdId: household.id, externalId: input.id } })
    }
    if (input.action === 'override') {
      const member = await prisma.member.findUniqueOrThrow({ where: { householdId_externalId: { householdId: household.id, externalId: input.memberId } } })
      await prisma.override.upsert({ where: { memberId: member.id }, update: { utilities: input.utilities ?? null, mealRate: input.mealRate ?? null }, create: { householdId: household.id, memberId: member.id, utilities: input.utilities ?? null, mealRate: input.mealRate ?? null } })
    }
    if (input.action === 'rent') {
      const member = await prisma.member.findUniqueOrThrow({ where: { householdId_externalId: { householdId: household.id, externalId: input.memberId } } })
      await prisma.member.update({ where: { id: member.id }, data: { houseRent: input.houseRent } })
    }
    return await GET(request)
  } catch (error) {
    console.error('messflow POST error:', error)
    if (error instanceof z.ZodError) return NextResponse.json({ error: error.issues[0]?.message }, { status: 400 })
    return NextResponse.json({ error: 'Unable to save data to MongoDB' }, { status: 500 })
  }
}
