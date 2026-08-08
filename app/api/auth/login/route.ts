import { NextResponse } from 'next/server'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { SESSION_COOKIE, writeSessionCookie } from '@/lib/auth'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export async function POST(request: Request) {
  try {
    const body = loginSchema.parse(await request.json())

    const mess = await prisma.mess.findUnique({ where: { email: body.email } })
    if (!mess) {
      return NextResponse.json({ error: 'Incorrect email or password' }, { status: 401 })
    }

    const matches = await bcrypt.compare(body.password, mess.password)
    if (!matches) {
      return NextResponse.json({ error: 'Incorrect email or password' }, { status: 401 })
    }

    const sessionPayload = {
      id: mess.id,
      messId: mess.id,
      messName: mess.messName,
      managerName: mess.managerName,
      email: mess.email,
    }

    const response = NextResponse.json({ ok: true, mess: { id: mess.id, messName: mess.messName, managerName: mess.managerName } })
    response.cookies.set({
      name: SESSION_COOKIE,
      value: writeSessionCookie(sessionPayload),
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })

    return response
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message }, { status: 400 })
    }

    return NextResponse.json({ error: 'Unable to sign in' }, { status: 500 })
  }
}
