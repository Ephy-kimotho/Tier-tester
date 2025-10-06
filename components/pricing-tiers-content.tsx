"use client"

import { Plus, ExternalLink, Copy, Trash2, BarChart3, Save } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const tiers = [
  {
    name: "Deox Tier 1",
    description: "Basic access with core features",
    price: 29,
    status: "Current",
    statusColor: "bg-emerald-500",
    subscribers: 156,
    mrr: "$4.5K",
    conversion: "12.3%",
    conversionColor: "text-blue-600",
    churn: "3.2%",
    churnColor: "text-red-600",
    launched: "Jun 18",
  },
  {
    name: "Deox Tier 2",
    description: "Enhanced features with analytics",
    price: 59,
    status: "Rolled out",
    statusColor: "bg-blue-500",
    subscribers: 89,
    mrr: "$5.2K",
    conversion: "8.7%",
    conversionColor: "text-blue-600",
    churn: "2.1%",
    churnColor: "text-red-600",
    launched: "Aug 2",
  },
  {
    name: "Deox Tier 3",
    description: "Premium with AI recommendations",
    price: 99,
    status: "Beta",
    statusColor: "bg-purple-500",
    subscribers: 34,
    mrr: "$3.4K",
    conversion: "5.2%",
    conversionColor: "text-blue-600",
    churn: "1.8%",
    churnColor: "text-red-600",
    launched: "2 weeks ago",
    rollout: true,
  },
]

const suggestions = [
  {
    title: "Raise Deox Tier 2 by $10",
    description: "Market analysis suggests higher willingness to pay for enhanced features",
    impact: "+$890",
    confidence: "87%",
    tag: "Tier 2",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "Add Annual Discount to Tier 1",
    description: "15% annual discount could increase customer lifetime value",
    impact: "+$1.2K",
    confidence: "92%",
    tag: "Tier 1",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Bundle Features in Tier 3",
    description: "Combining AI insights with premium support could justify current pricing",
    impact: "+$540",
    confidence: "74%",
    tag: "Tier 3",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    title: "Test Free Trial Extension",
    description: "Extending trial from 14 to 21 days may improve conversion rates",
    impact: "+$2.1K",
    confidence: "68%",
    tag: "All Tiers",
    tagColor: "bg-gray-100 text-gray-700",
  },
]

export function PricingTiersContent() {
  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b bg-white px-8">
        <div>
          <h1 className="text-2xl font-bold">Pricing Tiers</h1>
          <p className="text-sm text-muted-foreground">
            Manage your company-specific plans, view analytics, and apply AI pricing suggestions.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <BarChart3 className="mr-2 h-4 w-4" />
            Run Pricing Diagnostic
          </Button>
          <Button variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add New Tier
          </Button>
          <Button size="sm">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        {/* Pricing Tiers Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {tiers.map((tier, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg">{tier.name}</CardTitle>
                  <Badge variant="secondary" className={`${tier.statusColor} text-white border-0`}>
                    {tier.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">${tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold">{tier.subscribers}</div>
                    <div className="text-xs text-muted-foreground">Subscribers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{tier.mrr}</div>
                    <div className="text-xs text-muted-foreground">MRR</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className={`text-lg font-semibold ${tier.conversionColor}`}>{tier.conversion}</div>
                    <div className="text-xs text-muted-foreground">Conversion</div>
                  </div>
                  <div>
                    <div className={`text-lg font-semibold ${tier.churnColor}`}>{tier.churn}</div>
                    <div className="text-xs text-muted-foreground">Churn</div>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground mb-4">
                  {tier.rollout ? `Rollout: ${tier.launched}` : `Launched: ${tier.launched}`}
                </div>

                <div className="flex items-center gap-2">
                  <Button className="flex-1">View Details</Button>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add New Tier Card */}
          <Card className="border-dashed">
            <CardContent className="flex h-full min-h-[400px] flex-col items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed mb-4">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Add New Tier</h3>
              <p className="text-sm text-muted-foreground text-center">Create a new pricing tier for your customers</p>
            </CardContent>
          </Card>
        </div>

        {/* AI Suggestions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">AI Payment & Pricing Suggestions</h2>
            <div className="flex gap-3">
              <Select defaultValue="impact">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="impact">Sort by Impact</SelectItem>
                  <SelectItem value="confidence">Sort by Confidence</SelectItem>
                  <SelectItem value="tier">Sort by Tier</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Export Recommendations</Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {suggestions.map((suggestion, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold">{suggestion.title}</h3>
                    <Badge variant="secondary" className={suggestion.tagColor}>
                      {suggestion.tag}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{suggestion.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-lg font-bold text-emerald-600">{suggestion.impact}</div>
                      <div className="text-xs text-muted-foreground">Monthly Impact</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">{suggestion.confidence}</div>
                      <div className="text-xs text-muted-foreground">Confidence</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Simulate
                    </Button>
                    <Button className="flex-1">Apply to Tier</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
