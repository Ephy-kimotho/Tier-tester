/**
 * Authentication Service
 * 
 * Handles all authentication-related API calls
 * Endpoints: /users/register/, /users/login/, /users/<user_id>/
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface User {
  user_id: string
  email: string
  company_name: string
  contact_details?: string
  role: string
  is_active: boolean
  is_staff: boolean
  created_at: string
  updated_at: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  company_name: string
}

export interface AuthResponse {
  success: boolean
  message?: string
  token?: string
  user?: User
}

// ============================================================================
// MOCK DATA
// ============================================================================

const mockUser: User = {
  user_id: 'user_123456',
  email: 'john@example.com',
  company_name: 'Acme Corp',
  contact_details: '+1234567890',
  role: 'founder',
  is_active: true,
  is_staff: false,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}

// ============================================================================
// API FUNCTIONS (Mock Implementation)
// ============================================================================

/**
 * Register a new user
 * POST /users/register/
 */
export async function registerUser(data: RegisterRequest): Promise<AuthResponse> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register/`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // return response.json()

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 500))
  
  if (!data.email || !data.password || !data.company_name) {
    return {
      success: false,
      message: 'email, password, and company_name are required',
    }
  }

  return {
    success: true,
    message: 'User registered successfully',
    user_id: 'user_' + Math.random().toString(36).substr(2, 9),
    token: 'mock_token_' + Math.random().toString(36).substr(2, 9),
  }
}

/**
 * Login user
 * POST /users/login/
 */
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
  
  if (!data.email || !data.password) {
    return {
      success: false,
      message: 'Invalid credentials',
    }
  }

  return {
    success: true,
    message: 'Login successful',
    token: 'mock_token_' + Math.random().toString(36).substr(2, 9),
    user: mockUser,
  }
}

/**
 * Get user details by ID
 * GET /users/<user_id>/
 */
export async function getUserDetails(userId: string): Promise<{ success: boolean; user?: User; error?: string }> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}/`, {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' },
  // })
  // return response.json()

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 300))
  
  if (!userId) {
    return {
      success: false,
      error: 'User not found',
    }
  }

  return {
    success: true,
    user: { ...mockUser, user_id: userId },
  }
}

/**
 * Logout user (client-side only for now)
 */
export async function logoutUser(): Promise<{ success: boolean }> {
  // TODO: If backend supports logout endpoint, call it here
  // For now, just clear client-side state
  await new Promise(resolve => setTimeout(resolve, 200))
  
  return {
    success: true,
  }
}

