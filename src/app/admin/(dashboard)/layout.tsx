import { auth, signOut } from "@/auth"
import Link from "next/link"
import { LayoutDashboard, LogOut } from "lucide-react"
import { redirect } from "next/navigation"
import { AdminSidebarNav } from "@/components/AdminSidebarNav"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let session = null
  try {
    session = await auth()
  } catch (error) {
    session = null
  }
  
  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-slate-900 font-sans">
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 p-6 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center gap-3 font-bold text-lg text-[#A30D11] mb-8 pb-4 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-red-50 text-[#A30D11]">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-extrabold text-slate-900">Go Global</span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Admin Panel</span>
            </div>
          </div>
          
          <AdminSidebarNav />
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-100">
          <form
            action={async () => {
              "use server"
              await signOut({ redirectTo: "/admin/login" })
            }}
          >
            <button className="flex items-center gap-2 w-full px-3.5 py-2.5 text-left text-red-600 hover:bg-red-50 rounded-xl transition-all font-semibold text-sm cursor-pointer">
              <LogOut className="w-4 h-4" />
              Keluar (Sign Out)
            </button>
          </form>
        </div>
      </aside>
      
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
