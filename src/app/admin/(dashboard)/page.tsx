import { db } from "@/db"
import { programs, jobFieldsTable, quotasTable, testimonialsTable, statsTable } from "@/db/schema"
import { AdminProgramManager } from "@/components/AdminProgramManager"
import { desc } from "drizzle-orm"

export default async function AdminDashboard() {
  const allPrograms = await db.select().from(programs).orderBy(desc(programs.createdAt))
  const allJobFields = await db.select().from(jobFieldsTable).orderBy(desc(jobFieldsTable.createdAt))
  const allQuotas = await db.select().from(quotasTable).orderBy(desc(quotasTable.createdAt))
  const allTestimonials = await db.select().from(testimonialsTable).orderBy(desc(testimonialsTable.createdAt))
  const allStats = await db.select().from(statsTable).orderBy(desc(statsTable.createdAt))

  return (
    <AdminProgramManager
      initialPrograms={allPrograms}
      initialJobFields={allJobFields}
      initialQuotas={allQuotas}
      initialTestimonials={allTestimonials}
      initialStats={allStats}
    />
  )
}


