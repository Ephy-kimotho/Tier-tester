"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navigation } from "@/components/app-sidebar"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-white md:hidden">
          <Menu className="h-5 w-5" />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[220px]">
          <div className="h-full bg-white">
            <div className="flex h-16 items-center gap-2 border-b px-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <span className="text-lg font-semibold">TierTester</span>
            </div>
            <nav className="space-y-1 p-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

