import { NextResponse } from 'next/server'

export async function GET() {
  // Mocked summary aligned with TierTester concept
  return NextResponse.json({
    success: true,
    data: {
      metrics: {
        mrr: 47290,
        arr: 567480,
        activeUsers: 2847,
      },
      revenueSeries: [
        { month: 'Jan', value: 35 },
        { month: 'Feb', value: 39 },
        { month: 'Mar', value: 42 },
        { month: 'Apr', value: 45 },
        { month: 'May', value: 44 },
        { month: 'Jun', value: 48 },
      ],
    },
  })
}


