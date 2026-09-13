"use server"

import { db } from "@/db"
import { jobFieldsTable, quotasTable, testimonialsTable, statsTable } from "@/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

// --- JOB FIELDS ACTIONS ---
export async function getJobFields() {
  return await db.select().from(jobFieldsTable).orderBy(jobFieldsTable.createdAt)
}

export async function createJobField(formData: FormData) {
  const title = formData.get("title") as string
  const description = (formData.get("description") as string) || ""

  if (!title) throw new Error("Title is required")

  await db.insert(jobFieldsTable).values({
    title,
    description,
  })

  revalidatePath("/")
  revalidatePath("/admin")
}

export async function deleteJobField(id: number) {
  await db.delete(jobFieldsTable).where(eq(jobFieldsTable.id, id))
  revalidatePath("/")
  revalidatePath("/admin")
}

// --- QUOTAS ACTIONS ---
export async function getQuotas() {
  return await db.select().from(quotasTable).orderBy(quotasTable.createdAt)
}

export async function createQuota(formData: FormData) {
  const title = formData.get("title") as string
  const subtitle = formData.get("subtitle") as string
  const quotaNumber = formData.get("quotaNumber") as string

  if (!title || !quotaNumber) throw new Error("Title and Quota Number are required")

  await db.insert(quotasTable).values({
    title,
    subtitle: subtitle || "Khusus Pendaftaran",
    quotaNumber,
  })

  revalidatePath("/")
  revalidatePath("/admin")
}

export async function deleteQuota(id: number) {
  await db.delete(quotasTable).where(eq(quotasTable.id, id))
  revalidatePath("/")
  revalidatePath("/admin")
}

// --- TESTIMONIALS ACTIONS ---
export async function getTestimonials() {
  return await db.select().from(testimonialsTable).orderBy(testimonialsTable.createdAt)
}

export async function createTestimonial(formData: FormData) {
  const name = formData.get("name") as string
  const location = formData.get("location") as string
  const image = formData.get("image") as string
  const text = formData.get("text") as string

  if (!name || !text) throw new Error("Name and Text are required")

  await db.insert(testimonialsTable).values({
    name,
    location: location || "Indonesia",
    image: image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    text,
  })

  revalidatePath("/")
  revalidatePath("/admin")
}

export async function deleteTestimonial(id: number) {
  await db.delete(testimonialsTable).where(eq(testimonialsTable.id, id))
  revalidatePath("/")
  revalidatePath("/admin")
}

// --- STATS ACTIONS ---
export async function getStats() {
  return await db.select().from(statsTable).orderBy(statsTable.createdAt)
}

export async function createStat(formData: FormData) {
  const category = formData.get("category") as string
  const count = formData.get("count") as string

  if (!category || !count) throw new Error("Category and Count are required")

  await db.insert(statsTable).values({
    category,
    count,
  })

  revalidatePath("/")
  revalidatePath("/admin")
}

export async function deleteStat(id: number) {
  await db.delete(statsTable).where(eq(statsTable.id, id))
  revalidatePath("/")
  revalidatePath("/admin")
}

