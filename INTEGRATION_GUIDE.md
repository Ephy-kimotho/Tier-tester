# TierTester Frontend - Backend Integration Guide

This guide provides step-by-step instructions for connecting the TierTester frontend to the Django REST API backend.

---

## 📋 Pre-Integration Checklist

- [x] Frontend codebase reviewed and cleaned
- [x] All bugs fixed and build errors resolved
- [x] API service layer created with mock data
- [x] TypeScript types defined for all API responses
- [x] Documentation completed
- [ ] Backend API deployed and accessible
- [ ] Backend API URL obtained
- [ ] API authentication mechanism confirmed

---

## 🔧 Step 1: Configure Environment Variables

1. Create a `.env.local` file in the root of `Tier-tester/`:

```bash
cp .env.example .env.local
```

2. Update the API URL:

```env
NEXT_PUBLIC_API_URL=https://your-backend-api.com
# or for local development:
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 🔐 Step 2: Set Up Authentication

The backend uses Django's authentication system. You need to handle tokens in the frontend.

### Option A: Use HTTP-Only Cookies (Recommended for Production)

Already configured in `app/api/auth/route.ts`:

```typescript
res.cookies.set('tt_auth', token, { 
  httpOnly: true, 
  path: '/', 
  secure: process.env.NODE_ENV === 'production' 
})
```

### Option B: Use Local Storage (Development Only)

Update service functions to store/retrieve tokens:

```typescript
// After successful login
localStorage.setItem('auth_token', result.token)

// For API calls
const token = localStorage.getItem('auth_token')
headers: {
  'Authorization': `Bearer ${token}`
}
```

---

## 🔌 Step 3: Connect Services to Backend

### Replace Mock Implementations

For each service in `/services/`, find the `TODO` comments and replace mock implementations with real API calls.

#### Example: Auth Service

**File**: `services/authService.ts`

Find this:
```typescript
export async function loginUser(data: LoginRequest): Promise<AuthResponse> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login/`, { ... })
  
  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 400))
  return { success: true, token: 'mock_token' }
}
```

Replace with:
```typescript
export async function loginUser(data: LoginRequest): Promise<AuthResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  
  if (!response.ok) {
    const error = await response.json()
    return {
      success: false,
      message: error.error || 'Login failed'
    }
  }
  
  const result = await response.json()
  return {
    success: true,
    message: result.message,
    token: result.token, // Adjust based on actual backend response
    user: result.user
  }
}
```

#### Add Authentication to Protected Endpoints

For endpoints that require authentication (most of them), add the auth header:

```typescript
export async function getPricingStructure(userId: string) {
  // Get token from your auth state/storage
  const token = getAuthToken() // Implement this helper
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pricing/structure/${userId}/`, {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // or `Token ${token}` depending on backend
    },
  })
  
  return response.json()
}
```

---

## 🛠️ Step 4: Create Helper Functions

Create a file `lib/apiHelpers.ts`:

```typescript
/**
 * API Helper Functions
 */

export function getAuthToken(): string | null {
  // Implement based on your auth strategy
  return localStorage.getItem('auth_token') // or retrieve from cookies
}

export function getAuthHeaders(): HeadersInit {
  const token = getAuthToken()
  
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  }
}

export async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Unknown error' }))
    throw new Error(error.error || error.message || `HTTP ${response.status}`)
  }
  
  return response.json()
}

export async function apiRequest<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<T> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`
  
  const response = await fetch(url, {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers,
    },
  })
  
  return handleApiResponse<T>(response)
}
```

Then update your services to use these helpers:

```typescript
// Before
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login/`, { ... })

// After
import { apiRequest } from '@/lib/apiHelpers'
const result = await apiRequest<AuthResponse>('/users/login/', {
  method: 'POST',
  body: JSON.stringify(data)
})
```

---

## 🧪 Step 5: Test Each Endpoint

Create a test page to verify all endpoints work:

**File**: `app/api-test/page.tsx`

```typescript
'use client'

import { useState } from 'react'
import { authService, pricingService, aiInsightsService } from '@/services'

export default function ApiTestPage() {
  const [results, setResults] = useState<any>({})

  const runTests = async () => {
    // Test Auth
    try {
      const loginResult = await authService.loginUser({
        email: 'test@example.com',
        password: 'password123'
      })
      setResults(prev => ({ ...prev, login: loginResult }))
    } catch (error) {
      setResults(prev => ({ ...prev, login: { error: error.message } }))
    }

    // Test Pricing
    try {
      const pricingResult = await pricingService.getPricingStructure('user_123')
      setResults(prev => ({ ...prev, pricing: pricingResult }))
    } catch (error) {
      setResults(prev => ({ ...prev, pricing: { error: error.message } }))
    }

    // Add more tests...
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">API Integration Tests</h1>
      <button onClick={runTests} className="px-4 py-2 bg-blue-500 text-white rounded">
        Run Tests
      </button>
      <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto">
        {JSON.stringify(results, null, 2)}
      </pre>
    </div>
  )
}
```

---

## 🔍 Step 6: Update Type Definitions

If backend response structures differ from mock data:

1. Update types in respective service files
2. Update components that use these types
3. Run `npm run build` to catch type errors

---

## 🚨 Common Issues & Solutions

### CORS Errors

**Problem**: Browser blocks requests due to CORS policy

**Solution**: Configure CORS in Django backend:

```python
# backend/settings.py
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://your-frontend-domain.com",
]
```

### Authentication Errors

**Problem**: 401 Unauthorized responses

**Solution**: 
- Verify token format (Bearer vs Token)
- Check token expiration
- Ensure backend session/JWT middleware is configured

### Type Mismatches

**Problem**: TypeScript errors after connecting to real API

**Solution**:
- Compare actual API responses with TypeScript types
- Update type definitions in service files
- Add optional fields with `?` if backend might omit them

---

## 📊 Step 7: Monitor and Debug

### Add Request Logging (Development Only)

In `lib/apiHelpers.ts`:

```typescript
export async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`
  
  if (process.env.NODE_ENV === 'development') {
    console.log('🚀 API Request:', { url, options })
  }
  
  const response = await fetch(url, { ...options, headers: getAuthHeaders() })
  
  if (process.env.NODE_ENV === 'development') {
    console.log('📥 API Response:', response.status, response.statusText)
  }
  
  return handleApiResponse<T>(response)
}
```

### Add Error Tracking

Consider integrating Sentry or similar:

```typescript
try {
  const result = await apiRequest('/endpoint')
} catch (error) {
  // Log to error tracking service
  if (typeof window !== 'undefined' && window.Sentry) {
    window.Sentry.captureException(error)
  }
  throw error
}
```

---

## ✅ Integration Completion Checklist

- [ ] Environment variables configured
- [ ] Auth service connected and tested
- [ ] Pricing service connected and tested
- [ ] AI Insights service connected and tested
- [ ] Payment service connected and tested
- [ ] Dashboard service connected and tested
- [ ] Error handling implemented
- [ ] Loading states added to UI
- [ ] CORS configured in backend
- [ ] Authentication flow end-to-end tested
- [ ] Mock data removed from production build
- [ ] API helpers created
- [ ] Type definitions verified
- [ ] Integration tests passing
- [ ] User flows tested (login → dashboard → features)

---

## 🔄 Rollback Plan

If issues arise, you can easily revert to mock data:

1. Comment out real API calls
2. Uncomment mock implementations
3. Frontend continues to work with mock data

---

## 📞 Support

- **Backend API Docs**: `Tier tester documentation/API_Documentation.html`
- **Service Layer Docs**: `services/README.md`
- **Database Schema**: `Tier tester documentation/Database_Table_Documentation.html`

---

## 🎉 Next Steps After Integration

1. Deploy frontend to production (Vercel, Netlify, etc.)
2. Set up CI/CD pipeline
3. Configure production environment variables
4. Add performance monitoring
5. Set up error tracking
6. Enable analytics
7. Conduct user acceptance testing

