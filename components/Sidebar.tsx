"use client"

import { Home, User, FolderOpen, Mail, Heart } from "lucide-react"
import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigationItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
    isActive: true,
  },
  {
    title: "About",
    url: "/about",
    icon: User,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderOpen,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Mail,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-slate-700/50 bg-slate-800/50">
      <SidebarHeader className="p-6 border-b border-slate-700/30">
        <div className="text-center">
          <div className="relative mb-4">
            <Image
              src="https://avatars.githubusercontent.com/u/183841707?v=4"
              alt="Raka Restu"
              width={80}
              height={80}
              className="rounded-full mx-auto border-3 border-slate-700 transition-all duration-300"
            />
          </div>
          <div className=" transition-all duration-300">
            <h2 className="text-lg font-semibold mb-1">Raka Restu</h2>
            <p className="text-sm text-slate-400 mb-3">IT Support</p>
            <div className="flex justify-center gap-1">
              <div className="w-2 h-2 rounded-full bg-chart-2 animate-bounce"></div>
              <div className="w-2 h-2 rounded-full bg-chart-3 animate-bounce delay-100"></div>
              <div className="w-2 h-2 rounded-full bg-chart-5 animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                // Determine if this item is active by comparing pathname
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className={`
                        ${
                          isActive
                            ? "bg-purple-600/20 text-purple-400 border border-purple-500/30 hover:bg-purple-600/30"
                            : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                        }
                        transition-all duration-200 rounded-lg h-11 group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center
                      `}
                    >
                      <Link href={item.url} className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
                        <item.icon size={18} className="shrink-0" />
                        <span className="group-data-[collapsible=icon]:sr-only">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-slate-700/30">
        <div className="text-center text-xs text-slate-500 group-data-[collapsible=icon]:hidden transition-all duration-300">
          <p className="mb-1">© 2025 Raka Restu</p>
          <p className="flex items-center justify-center gap-1">
            Built with <Heart size={12} className="animate-pulse text-chart-5 fill-current" /> using React
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
