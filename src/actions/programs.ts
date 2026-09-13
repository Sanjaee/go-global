"use server"

import { db } from "@/db"
import { programs } from "@/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getPrograms() {
  return await db.select().from(programs).orderBy(programs.createdAt)
}

export async function createProgram(formData: FormData) {
  const name = formData.get("name") as string
  const field = formData.get("field") as string
  const onlineDate = formData.get("onlineDate") as string
  const offlineDate = formData.get("offlineDate") as string

  if (!name || !field || !onlineDate || !offlineDate) {
    throw new Error("All fields are required")
  }

  await db.insert(programs).values({
    name,
    field,
    onlineDate,
    offlineDate,
  })

  revalidatePath("/")
  revalidatePath("/admin")
  redirect("/admin")
}

export async function updateProgram(id: number, formData: FormData) {
  const name = formData.get("name") as string
  const field = formData.get("field") as string
  const onlineDate = formData.get("onlineDate") as string
  const offlineDate = formData.get("offlineDate") as string

  if (!name || !field || !onlineDate || !offlineDate) {
    throw new Error("All fields are required")
  }

  await db.update(programs).set({
    name,
    field,
    onlineDate,
    offlineDate,
    updatedAt: new Date(),
  }).where(eq(programs.id, id))

  revalidatePath("/")
  revalidatePath("/admin")
  redirect("/admin")
}

export async function deleteProgram(id: number) {
  await db.delete(programs).where(eq(programs.id, id))
  revalidatePath("/")
  revalidatePath("/admin")
}
