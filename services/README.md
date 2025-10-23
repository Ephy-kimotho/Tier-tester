# TierTester API Services Documentation

This directory contains the complete API service layer for the TierTester frontend application. All services are currently implemented with **mock data** and are ready to be connected to the Django REST API backend.

---

## 📁 Directory Structure

```
services/
├── README.md                  # This file
├── index.ts                   # Central export point for all services
├── authService.ts             # Authentication and user management
├── pricingService.ts          # Pricing plans, tiers, and features
├── aiInsightsService.ts       # AI recommendations and simulations
├── paymentService.ts          # M-Pesa payment processing
└── dashboardService.ts        # Dashboard metrics and analytics
```

---

## 🎯 Purpose

This service layer serves as an **abstraction layer** between the frontend UI components and the backend API. It provides:

1. **Type Safety** - Full TypeScript types for all API requests/responses
2. **Centralized API Logic** - All API calls in one place
3. **Easy Backend Integration** - Simple find-and-replace to connect to real backend
4. **Mock Data for Development** - Realistic mock responses for testing
5. **Consistent Error Handling** - Standardized error patterns

---

## 🚀 Usage

### Importing Services

```typescript
// Import all services
import { authService, pricingService, aiInsightsService } from '@/services'

// Import specific types
import type { User, PricingPlan, Recommendation } from '@/services'
```

### Example: Using Auth Service

```typescript
import { authService } from '@/services'

// Login
const result = await authService.loginUser({
  email: 'user@example.com',
  password: 'password123'
})

if (result.success) {
  console.log('User logged in:', result.user)
  // Store token, update UI, etc.
}

// Register
const newUser = await authService.registerUser({
  email: 'newuser@example.com',
  password: 'securepass',
  company_name: 'Acme Corp'
})

// Get user details
const userDetails = await authService.getUserDetails('user_id_123')
```

### Example: Using Pricing Service

```typescript
import { pricingService } from '@/services'

// Get pricing structure
const { data: plans } = await pricingService.getPricingStructure('user_id')

// Create a new pricing plan
const newPlan = await pricingService.createPricingPlan({
  user_id: 'user_123',
  plan_name: 'Premium Plan',
  description: 'Our best plan',
  is_active: true
})

// Add a tier to the plan
const newTier = await pricingService.addTier({
  plan_id: newPlan.plan.plan_id,
  tier_name: 'Pro',
  base_price: 49.99,
  billing_period: 'monthly',
  tier_description: 'Professional tier'
})

// Add a feature to the tier
const newFeature = await pricingService.addFeature({
  tier_id: newTier.tier.tier_id,
  feature_name: 'Advanced Analytics',
  description: 'Full analytics dashboard',
  is_included: true
})
```

### Example: Using AI Insights Service

```typescript
import { aiInsightsService } from '@/services'

// Generate recommendations
const recommendations = await aiInsightsService.generateRecommendations({
  pricing_plan_id: 'plan_123',
  pricing_data: [
    { tier_name: 'Basic', base_price: 29, features: ['Feature 1', 'Feature 2'] },
    { tier_name: 'Pro', base_price: 59, features: ['Feature 1', 'Feature 2', 'Feature 3'] }
  ]
})

// Get recommendation details
const details = await aiInsightsService.getRecommendationDetails('rec_123')

// Run a pricing simulation
const simulation = await aiInsightsService.simulatePricing({
  base_plan_id: 'plan_123',
  simulation_name: 'Q4 Price Test',
  base_plan: {
    mrr: 5000,
    conversion_rate: 0.05,
    churn_rate: 0.02
  },
  changes: {
    price_increase: 10,
    new_features: ['Premium Support'],
    tier_restructure: false
  }
})

// List all simulations
const allSimulations = await aiInsightsService.listSimulations()

// Get simulation results
const results = await aiInsightsService.getSimulationResults('sim_123')
```

### Example: Using Payment Service (M-Pesa)

```typescript
import { paymentService } from '@/services'

// Initiate STK Push payment
const payment = await paymentService.initiateStkPush({
  phone: '254712345678',
  amount: 99,
  payment_type: 'subscription',
  subscription_plan_id: 'plan_pro',
  account_reference: 'TIERTESTER-user123',
  transaction_desc: 'TierTester Pro Subscription'
})

// Check payment status
const status = await paymentService.getPaymentStatus({
  checkout_request_id: payment.data.checkout_request_id
})

// Get user transactions
const transactions = await paymentService.getUserTransactions('user_123')

// Get transaction summary
const summary = await paymentService.getTransactionSummary('user_123')
```

---

## 🔌 Connecting to the Backend

Each service function has a `TODO` comment indicating where to replace the mock implementation with actual API calls. Here's how to connect:

### Step 1: Set Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://your-backend-api.com
```

### Step 2: Replace Mock Implementation

Find the `TODO` comment in each service function:

**BEFORE (Mock):**
```typescript
export async function loginUser(data: LoginRequest): Promise<AuthResponse> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login/`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // return response.json()

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 400))
  return { success: true, token: 'mock_token' }
}
```

**AFTER (Real API):**
```typescript
export async function loginUser(data: LoginRequest): Promise<AuthResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  
  if (!response.ok) {
    throw new Error('Login failed')
  }
  
  return response.json()
}
```

### Step 3: Add Authentication Headers

For authenticated endpoints, add the token:

```typescript
export async function getPricingStructure(userId: string): Promise<{ success: boolean; data: PricingPlan[]; count: number }> {
  const token = localStorage.getItem('auth_token') // or use your auth state management
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pricing/structure/${userId}/`, {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  
  return response.json()
}
```

---

## 📋 Backend Endpoint Mapping

| Service Function | Backend Endpoint | Method | Authentication |
|-----------------|------------------|--------|----------------|
| **Auth Service** |
| `registerUser()` | `/users/register/` | POST | No |
| `loginUser()` | `/users/login/` | POST | No |
| `getUserDetails()` | `/users/<user_id>/` | GET | Yes |
| **Pricing Service** |
| `getPricingStructure()` | `/pricing/structure/<user_id>/` | GET | Yes |
| `createPricingPlan()` | `/pricing/create-plan/` | POST | Yes |
| `addTier()` | `/pricing/add-tier/` | POST | Yes |
| `addFeature()` | `/pricing/add-feature/` | POST | Yes |
| **AI Insights Service** |
| `structureData()` | `/api/ai-insights/structure-data/` | POST | Yes |
| `generateRecommendations()` | `/api/ai-insights/generate-recommendations/` | POST | Yes |
| `listRecommendations()` | `/api/ai-insights/recommendations/` | GET | Yes |
| `getRecommendationDetails()` | `/api/ai-insights/recommendation-details/` | GET | Yes |
| `simulatePricing()` | `/api/ai-insights/simulate-pricing/` | POST | Yes |
| `listSimulations()` | `/api/ai-insights/simulations/` | GET | Yes |
| `getSimulationResults()` | `/api/ai-insights/simulation-results/` | GET | Yes |
| `healthCheck()` | `/api/ai-insights/health/` | GET | No |
| **Payment Service (M-Pesa)** |
| `initiateStkPush()` | `/mpesa/stk-push/` | POST | Yes |
| `sendMoney()` | `/mpesa/send-money/` | POST | Yes |
| `getPaymentStatus()` | `/mpesa/payment-status/` | POST | Yes |
| `getUserTransactions()` | `/mpesa/transactions/` | GET | Yes |
| `getTransactionSummary()` | `/mpesa/transactions/summary/` | GET | Yes |

---

## 🔒 Error Handling

All services return consistent response structures. Handle errors like this:

```typescript
try {
  const result = await authService.loginUser({ email, password })
  
  if (result.success) {
    // Handle success
  } else {
    // Handle failure
    console.error(result.message)
  }
} catch (error) {
  // Handle network or unexpected errors
  console.error('API Error:', error)
}
```

---

## 🧪 Testing with Mock Data

All services currently return realistic mock data. This allows you to:

1. **Build UI components** without waiting for the backend
2. **Test user flows** end-to-end
3. **Demonstrate features** to stakeholders
4. **Develop offline** when backend is unavailable

The mock data matches the exact structure defined in the API documentation.

---

## 📦 Type Definitions

All TypeScript types are exported from each service file and re-exported from `index.ts` for convenience:

```typescript
// Available types
import type {
  // Auth
  User, LoginRequest, RegisterRequest, AuthResponse,
  
  // Pricing
  PricingPlan, Tier, Feature, CreatePlanRequest, AddTierRequest, AddFeatureRequest,
  
  // AI Insights
  Recommendation, RecommendationDetail, Simulation, SimulationResult,
  
  // Payments
  Transaction, TransactionSummary, STKPushRequest, STKPushResponse,
  
  // Dashboard
  DashboardSummary, DashboardMetrics, RevenueDataPoint
} from '@/services'
```

---

## 🛠️ Migration Checklist

When connecting to the real backend:

- [ ] Set up environment variables with backend API URL
- [ ] Replace mock implementations in authService.ts
- [ ] Replace mock implementations in pricingService.ts
- [ ] Replace mock implementations in aiInsightsService.ts
- [ ] Replace mock implementations in paymentService.ts
- [ ] Replace mock implementations in dashboardService.ts
- [ ] Add authentication token handling
- [ ] Add proper error handling and retry logic
- [ ] Add request interceptors if needed
- [ ] Test all endpoints with real data
- [ ] Remove mock data from production builds

---

## 🤝 Contributing

When adding new API endpoints:

1. Create/update the appropriate service file
2. Add TypeScript types for request/response
3. Implement mock data for development
4. Add TODO comment for backend integration
5. Update this README with endpoint mapping
6. Export types from index.ts

---

## 📞 Support

For questions about the service layer or backend integration, please refer to:
- API Documentation: `Tier tester documentation/API_Documentation.html`
- Database Documentation: `Tier tester documentation/Database_Table_Documentation.html`

