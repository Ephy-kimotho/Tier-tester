/**
 * Services Index
 * 
 * Central export point for all service modules
 * Import services from here for better organization and easier refactoring
 * 
 * Example usage:
 * import { authService, pricingService } from '@/services'
 * const user = await authService.loginUser({ email, password })
 */

import * as authService from './authService'
import * as pricingService from './pricingService'
import * as aiInsightsService from './aiInsightsService'
import * as paymentService from './paymentService'
import * as dashboardService from './dashboardService'

export {
  authService,
  pricingService,
  aiInsightsService,
  paymentService,
  dashboardService,
}

// Re-export types for convenience
export type { User, LoginRequest, RegisterRequest, AuthResponse } from './authService'
export type { 
  PricingPlan, 
  Tier, 
  Feature, 
  CreatePlanRequest, 
  AddTierRequest, 
  AddFeatureRequest 
} from './pricingService'
export type { 
  Recommendation, 
  RecommendationDetail, 
  Simulation, 
  SimulationResult, 
  SimulationRequest,
  GenerateRecommendationsRequest,
  StructureDataRequest
} from './aiInsightsService'
export type { 
  STKPushRequest, 
  STKPushResponse, 
  Transaction, 
  TransactionSummary,
  PaymentStatusRequest,
  PaymentStatusResponse
} from './paymentService'
export type { 
  DashboardSummary, 
  DashboardMetrics, 
  RevenueDataPoint 
} from './dashboardService'

