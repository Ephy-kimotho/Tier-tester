import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const plan = {
    plan_id: 'plan_' + Math.random().toString(36).slice(2, 8),
    user_id: body.user_id,
    plan_name: body.plan_name,
    description: body.description ?? '',
    uploaded_at: new Date().toISOString(),
    is_active: body.is_active ?? true,
  }
  return NextResponse.json({ success: true, plan, message: 'Pricing plan created successfully' }, { status: 201 })
}


