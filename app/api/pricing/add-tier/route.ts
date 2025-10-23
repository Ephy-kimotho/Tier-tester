import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const tier = {
    tier_id: 'tier_' + Math.random().toString(36).slice(2, 8),
    plan_id: body.plan_id,
    tier_name: body.tier_name,
    base_price: body.base_price,
    billing_period: body.billing_period ?? 'monthly',
    tier_description: body.tier_description ?? '',
  }
  return NextResponse.json({ success: true, tier, message: 'Pricing tier added successfully' }, { status: 201 })
}


