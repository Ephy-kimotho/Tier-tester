import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { user_id: string } }) {
  // Mock pricing structure aligned with docs: plans -> tiers -> features
  const data = [
    {
      plan_id: 'plan_123',
      user_id: params.user_id,
      plan_name: 'My Awesome Plan',
      description: 'This is a great plan.',
      uploaded_at: new Date().toISOString(),
      is_active: true,
      tiers: [
        {
          tier_id: 'tier_basic',
          plan_id: 'plan_123',
          tier_name: 'Basic Tier',
          base_price: 29.0,
          billing_period: 'monthly',
          tier_description: 'Basic access with core features',
          features: [
            {
              feature_id: 'feat_1',
              tier_id: 'tier_basic',
              feature_name: '5 Projects',
              feature_description: 'Up to 5 projects included',
              is_included: true,
            },
            {
              feature_id: 'feat_2',
              tier_id: 'tier_basic',
              feature_name: 'Email Support',
              feature_description: 'Standard email support',
              is_included: true,
            },
          ],
        },
        {
          tier_id: 'tier_pro',
          plan_id: 'plan_123',
          tier_name: 'Pro Tier',
          base_price: 59.0,
          billing_period: 'monthly',
          tier_description: 'Enhanced features with analytics',
          features: [
            {
              feature_id: 'feat_3',
              tier_id: 'tier_pro',
              feature_name: 'Advanced Analytics',
              feature_description: 'Detailed usage analytics',
              is_included: true,
            },
            {
              feature_id: 'feat_4',
              tier_id: 'tier_pro',
              feature_name: 'Priority Support',
              feature_description: 'Priority email support',
              is_included: true,
            },
          ],
        },
        {
          tier_id: 'tier_premium',
          plan_id: 'plan_123',
          tier_name: 'Premium Tier',
          base_price: 99.0,
          billing_period: 'monthly',
          tier_description: 'Premium with AI recommendations',
          features: [
            {
              feature_id: 'feat_5',
              tier_id: 'tier_premium',
              feature_name: 'AI Recommendations',
              feature_description: 'AI-driven pricing insights',
              is_included: true,
            },
          ],
        },
      ],
    },
  ]

  return NextResponse.json({ success: true, data, count: data.length })
}


