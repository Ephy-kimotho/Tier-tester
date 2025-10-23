/**
 * Dashboard Service
 * 
 * Handles dashboard-specific data aggregation and metrics
 * Note: This might be replaced by specific backend endpoints once available
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface DashboardMetrics {
  mrr: number
  arr: number
  activeUsers: number
  growth?: {
    mrr: number
    arr: number
    users: number
  }
}

export interface RevenueDataPoint {
  month: string
  value: number
}

export interface DashboardSummary {
  metrics: DashboardMetrics
  revenueSeries: RevenueDataPoint[]
}

// ============================================================================
// MOCK DATA
// ============================================================================

const mockDashboardData: DashboardSummary = {
  metrics: {
    mrr: 47290,
    arr: 567480,
    activeUsers: 2847,
    growth: {
      mrr: 12.3,
      arr: 18.7,
      users: 8.1,
    },
  },
  revenueSeries: [
    { month: 'Jan', value: 35000 },
    { month: 'Feb', value: 39000 },
    { month: 'Mar', value: 42000 },
    { month: 'Apr', value: 45000 },
    { month: 'May', value: 44000 },
    { month: 'Jun', value: 48000 },
  ],
}

// ============================================================================
// API FUNCTIONS (Mock Implementation)
// ============================================================================

/**
 * Get dashboard summary data
 * This might map to a specific backend endpoint like /api/dashboard/summary/
 */
export async function getDashboardSummary(userId?: string): Promise<DashboardSummary> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/summary/`, {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' },
  // })
  // const json = await response.json()
  // return json.data

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 400))
  
  return mockDashboardData
}

/**
 * Get revenue trends over time
 */
export async function getRevenueTrends(userId?: string, period: '6M' | '1Y' | 'ALL' = '6M'): Promise<RevenueDataPoint[]> {
  // TODO: Replace with actual API call

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 300))
  
  return mockDashboardData.revenueSeries
}

/**
 * Get key metrics
 */
export async function getKeyMetrics(userId?: string): Promise<DashboardMetrics> {
  // TODO: Replace with actual API call

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 200))
  
  return mockDashboardData.metrics
}

