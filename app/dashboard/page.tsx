/**
 * Dashboard Page
 *
 * Main dashboard view showing revenue metrics, growth charts, and AI recommendations.
 * Accessible after completing the onboarding flow.
 */
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardContent } from "@/components/dashboard-content";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <DashboardContent />
    </div>
  );
}
