import { AppSidebar } from "@/components/app-sidebar"
import { PricingTiersContent } from "@/components/pricing-tiers-content"

export default function PricingTiersPage() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <PricingTiersContent />
    </div>
  )
}
