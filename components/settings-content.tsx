"use client"

import { Upload, UserPlus, CreditCard, Mail, MessageSquare, Bell, HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SettingsContent() {
  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b bg-white px-8">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-sm text-muted-foreground">Manage your workspace, billing, and preferences</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <div className="flex gap-8">
          {/* Left Column - Settings */}
          <div className="flex-1 space-y-6">
            {/* Workspace Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Workspace Settings</CardTitle>
                <CardDescription>Manage your workspace information and team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="workspace-name">Workspace Name</Label>
                    <Input id="workspace-name" defaultValue="Acme Corp Workspace" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Primary Industry</Label>
                    <Select defaultValue="saas">
                      <SelectTrigger id="industry">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="saas">SaaS & Technology</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Company Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg border bg-muted">
                      <Upload className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <Button variant="outline">Upload Logo</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <Button variant="outline">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Invite Team Members
                  </Button>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            {/* Billing & Subscription */}
            <Card>
              <CardHeader>
                <CardTitle>Billing & Subscription</CardTitle>
                <CardDescription>Manage your subscription and payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">TierTester Pro</div>
                      <div className="text-sm text-muted-foreground">$49/month • Renews on December 15, 2024</div>
                    </div>
                    <Badge className="bg-blue-600 text-white">Active</Badge>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Payment Method</Label>
                    <div className="flex items-center gap-3 rounded-lg border p-3">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">•••• •••• •••• 4242</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Next Billing</Label>
                    <div className="flex items-center rounded-lg border p-3">
                      <span className="text-sm">December 15, 2024</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline">Update Payment Method</Button>
                  <Button variant="outline">View Invoices</Button>
                  <Button>Upgrade Plan</Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications & Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Notifications & Preferences</CardTitle>
                <CardDescription>Configure your notification preferences and defaults</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Email Updates</div>
                        <div className="text-sm text-muted-foreground">Weekly insights and recommendations</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Slack Integration</div>
                        <div className="text-sm text-muted-foreground">Real-time alerts and notifications</div>
                      </div>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Product Updates</div>
                        <div className="text-sm text-muted-foreground">New features and changelog</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select defaultValue="usd">
                      <SelectTrigger id="currency">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD ($)</SelectItem>
                        <SelectItem value="eur">EUR (€)</SelectItem>
                        <SelectItem value="gbp">GBP (£)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Default Timezone</Label>
                    <Select defaultValue="pst">
                      <SelectTrigger id="timezone">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pst">UTC-8 (Pacific Time)</SelectItem>
                        <SelectItem value="est">UTC-5 (Eastern Time)</SelectItem>
                        <SelectItem value="utc">UTC (Universal Time)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Account Summary */}
          <div className="w-[300px]">
            <Card>
              <CardHeader>
                <CardTitle>Account Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">John Smith</div>
                    <div className="text-sm text-muted-foreground">john@acmecorp.com</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Role</Label>
                  <Badge className="bg-blue-600 text-white">Workspace Owner</Badge>
                </div>

                <div className="space-y-2">
                  <Button variant="outline" className="w-full bg-transparent">
                    Transfer Ownership
                  </Button>
                  <Button variant="outline" className="w-full text-destructive bg-transparent">
                    Delete Account
                  </Button>
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                        <HelpCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Need Help?</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Our support team is here to help you with any questions or issues.
                        </p>
                        <Button size="sm">Contact Support</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
