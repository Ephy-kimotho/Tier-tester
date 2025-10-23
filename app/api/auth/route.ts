import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { action } = await req.json()
  const res = NextResponse.json({ success: true })
  if (action === 'login' || action === 'register') {
    res.cookies.set('tt_auth', 'mock-token', { httpOnly: true, path: '/', secure: process.env.NODE_ENV === 'production' })
  }
  if (action === 'logout') {
    res.cookies.set('tt_auth', '', { path: '/', maxAge: 0 })
  }
  return res
}


