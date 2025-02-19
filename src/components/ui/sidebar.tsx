"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, GraduationCap, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const routes = [
  {
    href: "/dashboard",
    icon: BarChart3,
    label: "Dashboard",
  },
  {
    href: "/skill-test",
    icon: GraduationCap,
    label: "Skill Test",
  },
  {
    href: "/internship",
    icon: FileText,
    label: "Internship",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:block  w-56">
      <div className="flex h-14 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl">WhatBytes</span>
        </Link>
      </div>
      <nav className="space-y-1 p-4">
        {routes.map((route) => (
          <Link key={route.href} href={route.href}>
            <Button
              variant="ghost"
              className={cn("w-full justify-start gap-4 text-sm", pathname === route.href && "bg-primary/10 text-primary")}
            >
              <route.icon className="h-5 w-5" />
              {route.label}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  )
}

