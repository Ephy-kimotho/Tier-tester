"use client"

import { useEffect, useState } from "react"
import { Bell, TrendingUp, DollarSign, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { getDashboardSummary, type DashboardSummary } from "@/lib/api"

const recommendations = [
  {
    icon: TrendingUp,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Raise Pro Plan Price",
    description:
      "Increase Pro plan from $29 to $31/month. Our AI predicts +7% revenue increase with minimal churn risk.",
    impact: "+$3,200 potential MRR",
    impactColor: "text-emerald-600",
    action: "Apply",
  },
  {
    icon: Users,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    title: "Review Basic Plan",
    description: "Basic plan shows high churn. Consider adding more value or adjusting features to improve retention.",
    impact: "23% churn rate",
    impactColor: "text-orange-600",
    action: "Review",
  },
  {
    icon: DollarSign,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Add Enterprise Tier",
    description: "12% of Pro users exceed usage limits. Create an Enterprise tier at $99/month to capture this demand.",
    impact: "+$8,500 potential MRR",
    impactColor: "text-emerald-600",
    action: "Create",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Optimize Trial Period",
    description: "Extend trial from 14 to 21 days. Data shows 31% higher conversion for longer trials.",
    impact: "+31% conversion",
    impactColor: "text-emerald-600",
    action: "Update",
  },
]

export function DashboardContent() {
  const [data, setData] = useState<DashboardSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      try {
        const d = await getDashboardSummary()
        setData(d)
      } catch (e) {
        setError("Failed to load dashboard")
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const revenueData = data?.revenueSeries ?? []
  const mrr = data?.metrics.mrr ?? 0
  const arr = data?.metrics.arr ?? 0
  const activeUsers = data?.metrics.activeUsers ?? 0

  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b bg-white px-8">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Monitor your SaaS pricing performance</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        {loading && <div className="text-sm text-muted-foreground">Loading dashboard...</div>}
        {error && <div className="text-sm text-red-600 mb-4">{error}</div>}
        {!loading && !error && (
        <>
        {/* Metrics Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Recurring Revenue</CardTitle>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                <DollarSign className="h-4 w-4 text-emerald-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${mrr.toLocaleString()}</div>
              <p className="text-sm text-emerald-600 flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +12.3% vs last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Annual Recurring Revenue</CardTitle>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${arr.toLocaleString()}</div>
              <p className="text-sm text-emerald-600 flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +18.7% vs last year
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50">
                <Users className="h-4 w-4 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{activeUsers.toLocaleString()}</div>
              <p className="text-sm text-emerald-600 flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +8.1% vs last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Growth Chart */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Revenue Growth</CardTitle>
              <div className="flex gap-2">
                <Button size="sm" variant="default">
                  6M
                </Button>
                <Button size="sm" variant="ghost">
                  1Y
                </Button>
                <Button size="sm" variant="ghost">
                  All
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Revenue",
                  color: "hsl(var(--primary))",
                },
              }}
              className="h-[300px]"
            >
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  fill="url(#colorValue)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <div>
          <h2 className="text-xl font-bold mb-4">AI Recommendations</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {recommendations.map((rec, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${rec.iconBg}`}>
                      <rec.icon className={`h-5 w-5 ${rec.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{rec.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold ${rec.impactColor}`}>{rec.impact}</span>
                        <Button size="sm">{rec.action}</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </>
        )}
      </main>
    </div>
  )
}
