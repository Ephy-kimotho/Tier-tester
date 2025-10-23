import { AppSidebar } from "@/components/app-sidebar"
import { RecommendationsContent } from "@/components/recommendations-content"
import { MobileNav } from "@/components/ui/sidebar"

export default function RecommendationsPage() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <div className="h-16 border-b bg-white px-4 flex items-center md:hidden">
          <MobileNav />
          <div className="ml-3 font-semibold">Recommendations</div>
        </div>
        <RecommendationsContent />
      </div>
    </div>
  )
}
