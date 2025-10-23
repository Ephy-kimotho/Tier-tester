import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const feature = {
    feature_id: 'feat_' + Math.random().toString(36).slice(2, 8),
    tier_id: body.tier_id,
    feature_name: body.feature_name,
    feature_description: body.description ?? '',
    is_included: body.is_included ?? true,
  }
  return NextResponse.json({ success: true, feature, message: 'Tier feature added successfully' }, { status: 201 })
}


