"use client";
import type React from "react";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar";
import { PanelLeft } from "lucide-react";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen">
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />

        {/* Floating Sidebar Trigger */}
        <div className="fixed z-50 md:group-data-[collapsible=icon]:left-[calc(var(--sidebar-width-icon)+1rem)] transition-all duration-200 ease-linear cursor-pointer">
          <SidebarTrigger className="h-10 w-10 bg-slate-800/90 hover:bg-slate-700 border border-slate-600/50 text-slate-300 hover:text-white rounded-lg shadow-lg backdrop-blur-sm transition-all duration-200 hover:shadow-purple-500/20 cursor-pointer">
            <PanelLeft size={18} />
          </SidebarTrigger>
        </div>

        <SidebarInset className="flex flex-col">
          {/* Main Content */}
          <main className="flex-1">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
