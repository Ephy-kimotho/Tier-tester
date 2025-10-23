/**
 * Legacy API file - kept for backward compatibility
 * 
 * NOTE: New code should use the services in /services/ directory
 * This file re-exports from the new service layer for existing components
 */

import { authService, dashboardService, pricingService } from '@/services'

export interface AuthResponse {
  success: boolean
  token?: string
  message?: string
}

export async function login(email: string, password: string): Promise<AuthResponse> {
  await fetch('/api/auth', { method: 'POST', body: JSON.stringify({ action: 'login' }) })
  const result = await authService.loginUser({ email, password })
  return {
    success: result.success,
    token: result.token,
    message: result.message,
  }
}

export async function register(email: string, password: string, companyName: string): Promise<AuthResponse> {
  await fetch('/api/auth', { method: 'POST', body: JSON.stringify({ action: 'register' }) })
  const result = await authService.registerUser({ email, password, company_name: companyName })
  return {
    success: result.success,
    token: result.token,
    message: result.message,
  }
}

export async function logout(): Promise<{ success: boolean }>{
  await fetch('/api/auth', { method: 'POST', body: JSON.stringify({ action: 'logout' }) })
  return await authService.logoutUser()
}

export interface DashboardSummary {
  metrics: { mrr: number; arr: number; activeUsers: number }
  revenueSeries: { month: string; value: number }[]
}

export async function getDashboardSummary(): Promise<DashboardSummary> {
  // Use new service layer, but keep API route call for backward compatibility
  const res = await fetch('/api/dashboard/summary', { cache: 'no-store' })
  const json = await res.json()
  return json.data as DashboardSummary
  
  // Alternative: Use service directly (uncomment when backend is ready)
  // return await dashboardService.getDashboardSummary()
}

export interface PricingStructurePlan {
  plan_id: string
  user_id: string
  plan_name: string
  description?: string
  uploaded_at: string
  is_active: boolean
  tiers: Array<{
    tier_id: string
    plan_id: string
    tier_name: string
    base_price: number
    billing_period: string
    tier_description?: string
    features: Array<{
      feature_id: string
      tier_id: string
      feature_name: string
      feature_description?: string
      is_included: boolean
    }>
  }>
}

export async function getPricingStructure(userId: string): Promise<PricingStructurePlan[]> {
  // Keep API route call for backward compatibility
  const res = await fetch(`/api/pricing/structure/${userId}`, { cache: 'no-store' })
  const json = await res.json()
  return json.data as PricingStructurePlan[]
  
  // Alternative: Use service directly (uncomment when backend is ready)
  // const result = await pricingService.getPricingStructure(userId)
  // return result.data
}

export async function createPlan(payload: { user_id: string; plan_name: string; description?: string; is_active?: boolean }) {
  // Keep API route call for backward compatibility
  const res = await fetch('/api/pricing/create-plan', { method: 'POST', body: JSON.stringify(payload) })
  return res.json()
  
  // Alternative: Use service directly (uncomment when backend is ready)
  // return await pricingService.createPricingPlan(payload)
}

export async function addTier(payload: { plan_id: string; tier_name: string; base_price: number; billing_period?: string; tier_description?: string }) {
  // Keep API route call for backward compatibility
  const res = await fetch('/api/pricing/add-tier', { method: 'POST', body: JSON.stringify(payload) })
  return res.json()
  
  // Alternative: Use service directly (uncomment when backend is ready)
  // return await pricingService.addTier(payload)
}

export async function addFeature(payload: { tier_id: string; feature_name: string; description?: string; is_included?: boolean }) {
  // Keep API route call for backward compatibility
  const res = await fetch('/api/pricing/add-feature', { method: 'POST', body: JSON.stringify(payload) })
  return res.json()
  
  // Alternative: Use service directly (uncomment when backend is ready)
  // return await pricingService.addFeature(payload)
}


