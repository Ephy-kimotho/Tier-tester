"use client"

import { TrendingUp, Shield, Star, Sparkles, AlertTriangle, FileDown, PlayCircle, Save } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const recommendations = [
  {
    icon: TrendingUp,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Raise Professional Tier by $8",
    priority: "High Priority",
    priorityColor: "bg-red-100 text-red-700",
    description:
      "Market analysis shows your Professional tier is significantly underpriced compared to competitors with similar features.",
    impact: "+18% ARR",
    impactColor: "text-emerald-600",
    confidence: "92%",
    confidenceColor: "text-blue-600",
  },
  {
    icon: Shield,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Add Annual Discount",
    priority: "Medium Priority",
    priorityColor: "bg-orange-100 text-orange-700",
    description: "Offering 15% annual discount can reduce churn and improve cash flow predictability.",
    impact: "+12% ARR",
    impactColor: "text-emerald-600",
    confidence: "85%",
    confidenceColor: "text-blue-600",
  },
  {
    icon: Star,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Introduce Premium Features",
    priority: "Low Priority",
    priorityColor: "bg-green-100 text-green-700",
    description: "Add advanced analytics and priority support to justify higher-tier pricing.",
    impact: "+8% ARR",
    impactColor: "text-emerald-600",
    confidence: "72%",
    confidenceColor: "text-blue-600",
  },
  {
    icon: Sparkles,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    title: "Optimize Team Tier Pricing",
    priority: "Medium Priority",
    priorityColor: "bg-orange-100 text-orange-700",
    description: "Adjust per-seat pricing model to better capture value from larger teams.",
    impact: "+15% ARR",
    impactColor: "text-emerald-600",
    confidence: "88%",
    confidenceColor: "text-blue-600",
  },
]

const actionPlan = [
  "Raise Professional tier pricing",
  "Implement annual discounts",
  "Optimize team tier model",
  "Add premium features",
]

export function RecommendationsContent() {
  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b bg-white px-8">
        <div>
          <h1 className="text-2xl font-bold">AI Recommendations</h1>
          <p className="text-sm text-muted-foreground">Actionable insights to optimize your pricing and revenue</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <FileDown className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <PlayCircle className="mr-2 h-4 w-4" />
            Run Diagnostic Again
          </Button>
          <Button size="sm">
            <Save className="mr-2 h-4 w-4" />
            Save Report
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <div className="flex gap-8">
          {/* Left Column - Recommendations */}
          <div className="flex-1">
            {/* Diagnostic Summary */}
            <Card className="mb-6 bg-yellow-50 border-yellow-200">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-100">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Diagnostic Summary</h3>
                      <p className="text-sm mb-3">
                        Your pricing is <span className="font-semibold text-red-600">8% below market average</span>
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Top Churn Tier</div>
                          <div className="font-semibold">Professional ($49/mo)</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Top Performing Tier</div>
                          <div className="font-semibold">Enterprise ($199/mo)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Full Analysis
                    </Button>
                    <Button size="sm">Run Diagnostic</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Filter Tabs */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                <Button variant="default" size="sm">
                  Quick Wins
                </Button>
                <Button variant="ghost" size="sm">
                  Revenue Growth
                </Button>
                <Button variant="ghost" size="sm">
                  Churn Reduction
                </Button>
                <Button variant="ghost" size="sm">
                  Competitive Positioning
                </Button>
              </div>
              <Select defaultValue="impact">
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="impact">Impact</SelectItem>
                  <SelectItem value="confidence">Confidence</SelectItem>
                  <SelectItem value="priority">Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Recommendation Cards */}
            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((rec, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-3 mb-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${rec.iconBg}`}>
                        <rec.icon className={`h-5 w-5 ${rec.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold">{rec.title}</h3>
                          <Badge variant="secondary" className={rec.priorityColor}>
                            {rec.priority}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{rec.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className={`text-lg font-bold ${rec.impactColor}`}>{rec.impact}</div>
                        <div className="text-xs text-muted-foreground">Projected Impact</div>
                      </div>
                      <div>
                        <div className={`text-lg font-bold ${rec.confidenceColor}`}>{rec.confidence}</div>
                        <div className="text-xs text-muted-foreground">Confidence</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Simulate Impact
                      </Button>
                      <Button className="flex-1">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Action Plan */}
          <div className="w-[300px]">
            <Card>
              <CardHeader>
                <CardTitle>Overall Action Plan</CardTitle>
                <p className="text-sm text-muted-foreground">Prioritized recommendations to maximize revenue impact</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {actionPlan.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Checkbox id={`action-${index}`} />
                      <label htmlFor={`action-${index}`} className="text-sm cursor-pointer">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold mb-3">Quick Actions</h4>
                  <Button className="w-full">Apply to Pricing Tiers</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Schedule A/B Test
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
