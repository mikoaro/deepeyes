import Link from "next/link"
import { cn } from "@/lib/utils"
import { Home, LayoutDashboard, Settings, Bell } from "lucide-react"
import type React from "react" // Added import for React

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/dashboard-2",
    variant: "default",
  },
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/app/dashboard-1",
    variant: "ghost",
  },
  {
    label: "Notifications",
    icon: Bell,
    href: "/notifications",
    variant: "ghost",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    variant: "ghost",
  },
]

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarNav({ className }: SidebarNavProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  route.variant === "default" && "bg-accent text-accent-foreground",
                )}
              >
                <route.icon className="mr-2 h-4 w-4" />
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

