/**
 * Payment Service (M-Pesa Integration)
 * 
 * Handles all M-Pesa payment-related API calls
 * Endpoints: /mpesa/*
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface STKPushRequest {
  phone: string
  amount: number
  payment_type: 'product' | 'subscription'
  product_id?: number
  subscription_plan_id?: string
  account_reference: string
  transaction_desc: string
}

export interface STKPushResponse {
  success: boolean
  message: string
  data?: {
    checkout_request_id: string
    merchant_request_id: string
    customer_message: string
  }
  error?: string
}

export interface B2CTransferRequest {
  phone: string
  amount: number
}

export interface B2CTransferResponse {
  success: boolean
  message: string
  data?: {
    conversation_id: string
    originator_conversation_id: string
    response_description: string
  }
  error?: string
}

export interface PaymentStatusRequest {
  checkout_request_id: string
}

export interface PaymentStatusResponse {
  success: boolean
  message: string
  data?: {
    status: string
    details: string
  }
  error?: string
}

export interface Transaction {
  merchant_request_id: string
  checkout_request_id: string
  result_code: number
  result_desc: string
  amount: number
  mpesa_receipt_number: string
  transaction_date: string
  phone_number: string
  payment_type: string
  product_id?: number
  subscription_plan_id?: string
  account_reference: string
  transaction_desc: string
  user_id: number
  created_at: string
  updated_at: string
}

export interface TransactionSummary {
  total_transactions: number
  total_spent: number
}

// ============================================================================
// MOCK DATA
// ============================================================================

const mockTransactions: Transaction[] = [
  {
    merchant_request_id: 'mrq_123456',
    checkout_request_id: 'ws_CO_123456789',
    result_code: 0,
    result_desc: 'The service request is processed successfully.',
    amount: 99.0,
    mpesa_receipt_number: 'QGR1234567',
    transaction_date: new Date(Date.now() - 86400000).toISOString(),
    phone_number: '254712345678',
    payment_type: 'subscription',
    subscription_plan_id: 'plan_pro',
    account_reference: 'TIERTESTER-user123',
    transaction_desc: 'TierTester Pro Subscription',
    user_id: 123,
    created_at: new Date(Date.now() - 86400000).toISOString(),
    updated_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    merchant_request_id: 'mrq_789012',
    checkout_request_id: 'ws_CO_987654321',
    result_code: 0,
    result_desc: 'The service request is processed successfully.',
    amount: 49.0,
    mpesa_receipt_number: 'QGR7654321',
    transaction_date: new Date(Date.now() - 172800000).toISOString(),
    phone_number: '254712345678',
    payment_type: 'product',
    product_id: 456,
    account_reference: 'TIERTESTER-user123',
    transaction_desc: 'One-time diagnostic report',
    user_id: 123,
    created_at: new Date(Date.now() - 172800000).toISOString(),
    updated_at: new Date(Date.now() - 172800000).toISOString(),
  },
]

// ============================================================================
// API FUNCTIONS (Mock Implementation)
// ============================================================================

/**
 * Initiate STK Push payment
 * POST /mpesa/stk-push/
 */
export async function initiateStkPush(data: STKPushRequest): Promise<STKPushResponse> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mpesa/stk-push/`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // return response.json()

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 800))
  
  if (!data.phone || !data.amount) {
    return {
      success: false,
      message: 'Phone number and amount are required',
    }
  }

  return {
    success: true,
    message: 'Payment request sent successfully',
    data: {
      checkout_request_id: 'ws_CO_' + Math.random().toString(36).substr(2, 12),
      merchant_request_id: 'mrq_' + Math.random().toString(36).substr(2, 10),
      customer_message: 'Success. Request accepted for processing',
    },
  }
}

/**
 * Send money to customer (B2C Transfer)
 * POST /mpesa/send-money/
 */
export async function sendMoney(data: B2CTransferRequest): Promise<B2CTransferResponse> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mpesa/send-money/`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // return response.json()

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  if (!data.phone || !data.amount) {
    return {
      success: false,
      message: 'Phone number and amount are required',
    }
  }

  return {
    success: true,
    message: 'B2C transfer request sent successfully',
    data: {
      conversation_id: 'conv_' + Math.random().toString(36).substr(2, 12),
      originator_conversation_id: 'orig_' + Math.random().toString(36).substr(2, 12),
      response_description: 'Accept the request for processing',
    },
  }
}

/**
 * Get payment status
 * POST /mpesa/payment-status/
 */
export async function getPaymentStatus(data: PaymentStatusRequest): Promise<PaymentStatusResponse> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mpesa/payment-status/`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // return response.json()

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 600))
  
  if (!data.checkout_request_id) {
    return {
      success: false,
      message: 'Checkout request ID is required',
    }
  }

  return {
    success: true,
    message: 'Payment status retrieved successfully',
    data: {
      status: 'Success',
      details: 'The transaction was successful',
    },
  }
}

/**
 * Get user transactions
 * GET /mpesa/transactions/
 */
export async function getUserTransactions(userId?: string): Promise<{ success: boolean; transactions: Transaction[] }> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mpesa/transactions/`, {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' },
  // })
  // return response.json()

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 400))
  
  return {
    success: true,
    transactions: mockTransactions,
  }
}

/**
 * Get transaction summary
 * GET /mpesa/transactions/summary/
 */
export async function getTransactionSummary(userId?: string): Promise<{ success: boolean; summary: TransactionSummary }> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mpesa/transactions/summary/`, {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' },
  // })
  // return response.json()

  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const totalSpent = mockTransactions.reduce((sum, t) => sum + t.amount, 0)
  
  return {
    success: true,
    summary: {
      total_transactions: mockTransactions.length,
      total_spent: totalSpent,
    },
  }
}

