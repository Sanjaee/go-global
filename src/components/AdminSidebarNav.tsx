"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { BookOpen, Briefcase, Users, MessageSquare, BarChart3, ArrowLeft } from "lucide-react"

export function AdminSidebarNav() {
  const searchParams = useSearchParams()
  const currentTab = searchParams.get("tab") || "programs"

  const navItems = [
    {
      id: "programs",
      label: "Daftar Program Batch",
      icon: BookOpen,
      href: "/admin?tab=programs",
    },
    {
      id: "jobFields",
      label: "Bidang Pekerjaan",
      icon: Briefcase,
      href: "/admin?tab=jobFields",
    },
    {
      id: "quotas",
      label: "Kuota Program",
      icon: Users,
      href: "/admin?tab=quotas",
    },
    {
      id: "stats",
      label: "Kandidat Diterima (Statistik)",
      icon: BarChart3,
      href: "/admin?tab=stats",
    },
    {
      id: "testimonials",
      label: "Testimoni Alumni",
      icon: MessageSquare,
      href: "/admin?tab=testimonials",
    },
  ]

  return (
    <div className="space-y-6">
      <nav className="space-y-1.5">
        <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Menu Konten Landing Page
        </div>

        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentTab === item.id

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                isActive
                  ? "bg-white text-[#A30D11] shadow-md border-l-4 border-[#A30D11] font-bold"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon className={`size-4.5 ${isActive ? "text-[#A30D11]" : "text-slate-500"}`} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="pt-4 border-t border-slate-100">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-[#A30D11] hover:bg-red-50 transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span>Lihat Website Beranda</span>
        </Link>
      </div>
    </div>
  )
}

