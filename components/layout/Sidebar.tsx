"use client";
import { Home, User, FolderOpen, Mail, Heart } from "lucide-react";
import Image from "next/image";
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
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
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
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-border/50 bg-card/30 backdrop-blur-md">
      <SidebarHeader className="p-6 border-b border-border/30">
        <div className="text-center">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 blur-md opacity-30" />
            <Image
              src="https://avatars.githubusercontent.com/u/183841707?v=4"
              alt="Raka Restu"
              width={80}
              height={80}
              className="relative rounded-full mx-auto border-2 border-border/50 transition-all duration-300 hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">Raka Restu</h2>
            <p className="text-xs font-medium text-foreground/40 uppercase tracking-widest mt-1">
              IT Support
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className={`
                        ${
                          isActive
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-foreground/40 hover:text-foreground hover:bg-secondary/50"
                        }
                        transition-all duration-300 rounded-xl h-11 group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center
                      `}
                    >
                      <Link
                        href={item.url}
                        className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center"
                      >
                        <item.icon size={18} className="shrink-0" />
                        <span className="group-data-[collapsible=icon]:sr-only">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/30">
        <div className="text-center text-xs text-foreground/30 group-data-[collapsible=icon]:hidden">
          <p className="mb-1">© 2025 Raka Restu</p>
          <p className="flex items-center justify-center gap-1">
            Built with{" "}
            <Heart
              size={12}
              className="animate-pulse text-primary fill-primary"
            />{" "}
            using React
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}