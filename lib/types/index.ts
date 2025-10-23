export type UUID = string

export interface PricingTier {
  name: string
  description?: string
  price: number
  status?: string
  subscribers?: number
  mrr?: string
  conversion?: string
  churn?: string
  launched?: string
}

export interface Recommendation {
  title: string
  description: string
  impact: string
  confidence: string
  priority?: string
}

export interface OnboardingPayload {
  dataType: "pricing" | "customer" | "competitive"
  inputMethod: "upload" | "manual"
  tierData: {
    tierName: string
    price: string
    currency: string
    features: string
    customerCount: string
    churnRate: string
    conversionRate: string
  }
}

