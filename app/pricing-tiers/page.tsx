import { AppSidebar } from "@/components/app-sidebar"
import { PricingTiersContent } from "@/components/pricing-tiers-content"
import { MobileNav } from "@/components/ui/sidebar"

export default function PricingTiersPage() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <div className="h-16 border-b bg-white px-4 flex items-center md:hidden">
          <MobileNav />
          <div className="ml-3 font-semibold">Pricing Tiers</div>
        </div>
        <PricingTiersContent />
      </div>
    </div>
  )
}
