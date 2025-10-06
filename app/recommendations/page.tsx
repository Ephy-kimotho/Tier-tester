import { AppSidebar } from "@/components/app-sidebar"
import { RecommendationsContent } from "@/components/recommendations-content"

export default function RecommendationsPage() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <RecommendationsContent />
    </div>
  )
}
