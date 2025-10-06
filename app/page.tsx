import { AppSidebar } from "@/components/app-sidebar"
import { DashboardContent } from "@/components/dashboard-content"

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <DashboardContent />
    </div>
  )
}
