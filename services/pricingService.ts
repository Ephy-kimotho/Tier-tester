/**
 * Pricing Service
 * 
 * Handles all pricing plan, tier, and feature management API calls
 * Endpoints: /pricing/create-plan/, /pricing/add-tier/, /pricing/add-feature/, /pricing/structure/<user_id>/
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface Feature {
  feature_id: string
  tier_id: string
  feature_name: string
  feature_description?: string
  is_included: boolean
}

export interface Tier {
  tier_id: string
  plan_id: string
  tier_name: string
  base_price: number
  billing_period: string
  tier_description?: string
  features: Feature[]
}

export interface PricingPlan {
  plan_id: string
  user_id: string
  plan_name: string
  description?: string
  uploaded_at: string
  is_active: boolean
  tiers: Tier[]
}

export interface CreatePlanRequest {
  user_id: string
  plan_name: string
  description?: string
  is_active?: boolean
}

export interface AddTierRequest {
  plan_id: string
  tier_name: string
  base_price: number
  billing_period?: string
  tier_description?: string
}

export interface AddFeatureRequest {
  tier_id: string
  feature_name: string
  description?: string
  is_included?: boolean
}

// ============================================================================
// MOCK DATA
// ============================================================================

const mockPricingStructure: PricingPlan[] = [
  {
    plan_id: 'plan_123',
    user_id: 'user_mock',
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

// ============================================================================
// API FUNCTIONS (Mock Implementation)
// ============================================================================

/**
 * Get full pricing structure for a user
 * GET /pricing/structure/<user_id>/
 */
export async function getPricingStructure(userId: string): Promise<{ success: boolean; data: PricingPlan[]; count: number }> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pricing/structure/${userId}/`, {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' },
  // })
  // return response.json()

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 400))
  
  return {
    success: true,
    data: mockPricingStructure,
    count: mockPricingStructure.length,
  }
}

/**
 * Create a new pricing plan
 * POST /pricing/create-plan/
 */
export async function createPricingPlan(data: CreatePlanRequest): Promise<{ success: boolean; plan: Partial<PricingPlan>; message: string }> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pricing/create-plan/`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // return response.json()

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const newPlan = {
    plan_id: 'plan_' + Math.random().toString(36).substr(2, 8),
    user_id: data.user_id,
    plan_name: data.plan_name,
    description: data.description ?? '',
    uploaded_at: new Date().toISOString(),
    is_active: data.is_active ?? true,
  }

  return {
    success: true,
    plan: newPlan,
    message: 'Pricing plan created successfully',
  }
}

/**
 * Add a tier to a pricing plan
 * POST /pricing/add-tier/
 */
export async function addTier(data: AddTierRequest): Promise<{ success: boolean; tier: Partial<Tier>; message: string }> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pricing/add-tier/`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // return response.json()

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const newTier = {
    tier_id: 'tier_' + Math.random().toString(36).substr(2, 8),
    plan_id: data.plan_id,
    tier_name: data.tier_name,
    base_price: data.base_price,
    billing_period: data.billing_period ?? 'monthly',
    tier_description: data.tier_description ?? '',
  }

  return {
    success: true,
    tier: newTier,
    message: 'Pricing tier added successfully',
  }
}

/**
 * Add a feature to a tier
 * POST /pricing/add-feature/
 */
export async function addFeature(data: AddFeatureRequest): Promise<{ success: boolean; feature: Partial<Feature>; message: string }> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pricing/add-feature/`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // return response.json()

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const newFeature = {
    feature_id: 'feat_' + Math.random().toString(36).substr(2, 8),
    tier_id: data.tier_id,
    feature_name: data.feature_name,
    feature_description: data.description ?? '',
    is_included: data.is_included ?? true,
  }

  return {
    success: true,
    feature: newFeature,
    message: 'Tier feature added successfully',
  }
}

