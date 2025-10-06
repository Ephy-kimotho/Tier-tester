import { AppSidebar } from "@/components/app-sidebar"
import { SettingsContent } from "@/components/settings-content"

export default function SettingsPage() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <SettingsContent />
    </div>
  )
}
