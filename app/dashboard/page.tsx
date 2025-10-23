/**
 * Dashboard Page
 *
 * Main dashboard view showing revenue metrics, growth charts, and AI recommendations.
 * Accessible after completing the onboarding flow.
 */
import { AppSidebar } from "@/components/app-sidebar";
import { MobileNav } from "@/components/ui/sidebar";
import { DashboardContent } from "@/components/dashboard-content";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <div className="h-16 border-b bg-white px-4 flex items-center md:hidden">
          <MobileNav />
          <div className="ml-3 font-semibold">Dashboard</div>
        </div>
        <DashboardContent />
      </div>
    </div>
  );
}
