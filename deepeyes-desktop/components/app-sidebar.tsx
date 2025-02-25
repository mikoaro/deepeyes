"use client"

import * as React from "react"
import { BookOpen, LayoutDashboard, Settings2, SquareTerminal } from 'lucide-react'
import { usePathname } from 'next/navigation' // Add this import

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Review",
      url: "/review",
      icon: SquareTerminal,
    },
    {
      title: "Explorer",
      url: "/explorer",
      icon: BookOpen,
    },
    {
      title: "Explorer 2",
      url: "/explorer-2",
      icon: BookOpen,
    },
    {
      title: "Events",
      url: "/events",
      icon: Settings2,
    },
    {
      title: "Dashboard 1",
      url: "/dashboard-1",
      icon: LayoutDashboard,
    },
    {
      title: "Dashboard 2",
      url: "/dashboard-2",
      icon: LayoutDashboard,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname() // Add this line

  // Update navMain items with isActive property
  const navMainWithActive = data.navMain.map(item => ({
    ...item,
    isActive: pathname === item.url
  }))

  return (
    <Sidebar collapsible="icon" {...props} className="mt-24 bg-white">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/deepeyes_mark.png" alt="logo" width="100" height="40" />
        </Link>
      <SidebarContent>
        <NavMain items={navMainWithActive} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}