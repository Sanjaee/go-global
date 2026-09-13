"use client"

import * as React from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { createProgram, updateProgram, deleteProgram } from "@/actions/programs"
import { createJobField, deleteJobField, createQuota, deleteQuota, createTestimonial, deleteTestimonial, createStat, deleteStat } from "@/actions/sections"
import { DatePickerField } from "@/components/DatePickerField"
import { Plus, Edit2, Trash2, Eye, X, CheckCircle2, Briefcase, Users, MessageSquare, BookOpen, BarChart3 } from "lucide-react"
import styles from "./BasicProgram.module.css"
import quotaStyles from "./QuotaSchedule.module.css"
import statStyles from "./Statistics.module.css"
import { JOB_FIELDS } from "@/constants/jobFields"

interface Program {
  id: number
  name: string
  field: string
  onlineDate: string
  offlineDate: string
  createdAt: Date
  updatedAt: Date
}

interface JobField {
  id: number
  title: string
  description: string | null
  createdAt: Date
}

interface Quota {
  id: number
  title: string
  subtitle: string
  quotaNumber: string
  createdAt: Date
}

interface Testimonial {
  id: number
  name: string
  location: string
  image: string
  text: string
  createdAt: Date
}

interface Stat {
  id: number
  category: string
  count: string
  createdAt: Date
}

interface AdminProgramManagerProps {
  initialPrograms: Program[]
  initialJobFields?: JobField[]
  initialQuotas?: Quota[]
  initialTestimonials?: Testimonial[]
  initialStats?: Stat[]
}

export function AdminProgramManager({
  initialPrograms,
  initialJobFields = [],
  initialQuotas = [],
  initialTestimonials = [],
  initialStats = [],
}: AdminProgramManagerProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const tabParam = searchParams.get("tab") as "programs" | "jobFields" | "quotas" | "stats" | "testimonials" | null
  const activeTab = tabParam && ["programs", "jobFields", "quotas", "stats", "testimonials"].includes(tabParam)
    ? tabParam
    : "programs"

  const setActiveTab = (tab: "programs" | "jobFields" | "quotas" | "stats" | "testimonials") => {
    router.push(`/admin?tab=${tab}`, { scroll: false })
  }

  // Program edit state
  const [editingProgram, setEditingProgram] = React.useState<Program | null>(null)
  const [programFormState, setProgramFormState] = React.useState({
    name: "Program Basic Batch 6",
    field: "Keperawatan Lansia",
    onlineDate: "7 September 2026 -",
    offlineDate: "14 September 2026 -",
  })

  // Job Field preview state
  const [jobFieldState, setJobFieldState] = React.useState({
    title: "",
    description: "",
  })

  // Quota preview state
  const [quotaState, setQuotaState] = React.useState({
    title: "Bidang Keperawatan Lansia",
    subtitle: "Khusus Perempuan",
    quotaNumber: "40 Orang",
  })

  // Stat preview state
  const [statFormState, setStatFormState] = React.useState({
    category: "Perawat Lansia",
    count: "210",
  })

  // Testimonial preview state
  const [testimonialState, setTestimonialState] = React.useState({
    name: "Anisa",
    location: "Jakarta, Indonesia",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    text: "Belajar di Go Global Indonesia sangat membantu karir saya!",
  })


  const handleSelectEditProgram = (prog: Program) => {
    setEditingProgram(prog)
    setProgramFormState({
      name: prog.name,
      field: prog.field,
      onlineDate: prog.onlineDate,
      offlineDate: prog.offlineDate,
    })
  }

  const handleCancelEditProgram = () => {
    setEditingProgram(null)
    setProgramFormState({
      name: "Program Basic Batch 6",
      field: "Keperawatan Lansia",
      onlineDate: "7 September 2026 -",
      offlineDate: "14 September 2026 -",
    })
  }

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Dashboard Kelola Konten & Live Preview
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola data tiap section secara dinamis dan lihat tampilan live preview secara real-time.
          </p>
        </div>
      </div>


      {/* TAB 1: PROGRAM BASIC & BATCH */}
      {activeTab === "programs" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Form Column */}
            <div className="lg:col-span-6 xl:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  {editingProgram ? (
                    <>
                      <Edit2 className="size-5 text-[#A30D11]" /> Edit Program #{editingProgram.id}
                    </>
                  ) : (
                    <>
                      <Plus className="size-5 text-[#A30D11]" /> Input Program Baru
                    </>
                  )}
                </h2>
                {editingProgram && (
                  <button
                    type="button"
                    onClick={handleCancelEditProgram}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <X className="size-4" /> Batal Edit
                  </button>
                )}
              </div>

              <form
                action={async (formData) => {
                  if (editingProgram) {
                    await updateProgram(editingProgram.id, formData)
                  } else {
                    await createProgram(formData)
                  }
                }}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Nama Program
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={programFormState.name}
                    onChange={(e) => setProgramFormState({ ...programFormState, name: e.target.value })}
                    placeholder="Contoh: Program Basic Batch 6"
                    required
                    className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Bidang Pekerjaan
                  </label>
                  <select
                    name="field"
                    value={programFormState.field}
                    onChange={(e) => setProgramFormState({ ...programFormState, field: e.target.value })}
                    required
                    className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900 cursor-pointer"
                  >
                    {/* Combine standard job fields + user dynamic job fields */}
                    {JOB_FIELDS.map((f) => (
                      <option key={f} value={f}>
                        Bidang {f}
                      </option>
                    ))}
                    {initialJobFields.map((jf) => (
                      <option key={`dyn-${jf.id}`} value={jf.title}>
                        Bidang {jf.title}
                      </option>
                    ))}
                  </select>
                </div>

                <DatePickerField
                  key={`online-${editingProgram?.id || "new"}-${programFormState.onlineDate}`}
                  name="onlineDate"
                  label="Tanggal Program Online"
                  defaultValue={programFormState.onlineDate}
                  placeholder="Pilih tanggal online"
                />

                <DatePickerField
                  key={`offline-${editingProgram?.id || "new"}-${programFormState.offlineDate}`}
                  name="offlineDate"
                  label="Tanggal Program Offline"
                  defaultValue={programFormState.offlineDate}
                  placeholder="Pilih tanggal offline"
                />

                <div className="pt-2 flex items-center justify-end gap-3">
                  {editingProgram && (
                    <button
                      type="button"
                      onClick={handleCancelEditProgram}
                      className="px-5 h-11 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-sm transition-all"
                    >
                      Batal
                    </button>
                  )}
                  <button
                    type="submit"
                    className="px-6 h-11 bg-gradient-to-r from-[#A30D11] to-[#8A0B0E] hover:from-[#8A0B0E] hover:to-[#70080B] text-white font-semibold rounded-xl shadow-md transition-all flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <CheckCircle2 className="size-4" />
                    {editingProgram ? "Simpan Perubahan" : "Tambah Program"}
                  </button>
                </div>
              </form>
            </div>

            {/* Live Preview Column */}
            <div className="lg:col-span-6 xl:col-span-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
                <Eye className="size-4 text-[#A30D11]" /> Live Preview (Tampilan Card Program)
              </div>

              <div className="bg-[#A30D11] p-6 sm:p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
                <div className={styles.batchContainer}>
                  <div className={styles.batchTitleWrapper}>
                    <h3 className={styles.batchTitle}>
                      {programFormState.name || "Nama Program"}
                    </h3>
                    <img
                      src="/images/awan-1.webp"
                      alt="Japanese Cloud Ornament"
                      className={styles.cloudOrnament}
                    />
                  </div>

                  <div className={styles.scheduleGroup}>
                    <div className={styles.fieldBadge}>
                      {programFormState.field || "Bidang Program"}
                    </div>

                    <div className={styles.scheduleCard}>
                      <div className={styles.scheduleBlock}>
                        <span className={styles.scheduleLabel}>Program Online (Minggu Pertama)</span>
                        <span className={styles.scheduleDate}>
                          {programFormState.onlineDate || "7 September 2026 -"}
                        </span>
                      </div>

                      <div className={styles.cardDivider}></div>

                      <div className={styles.scheduleBlock}>
                        <span className={styles.scheduleLabel}>Program Offline (Mulai Minggu ke-2)</span>
                        <span className={styles.scheduleDate}>
                          {programFormState.offlineDate || "14 September 2026 -"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table List */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden space-y-4">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Daftar Program Batch</h2>
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Total: {initialPrograms.length}
              </span>
            </div>

            {initialPrograms.length === 0 ? (
              <div className="p-12 text-center text-slate-500 text-sm">
                Belum ada data program.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      <th className="p-4 pl-6">Nama Program</th>
                      <th className="p-4">Bidang</th>
                      <th className="p-4">Tgl Online</th>
                      <th className="p-4">Tgl Offline</th>
                      <th className="p-4 pr-6 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {initialPrograms.map((prog) => (
                      <tr key={prog.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="p-4 pl-6 font-semibold text-slate-900">{prog.name}</td>
                        <td className="p-4 text-slate-600">{prog.field}</td>
                        <td className="p-4 text-slate-600">{prog.onlineDate}</td>
                        <td className="p-4 text-slate-600">{prog.offlineDate}</td>
                        <td className="p-4 pr-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleSelectEditProgram(prog)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                              title="Edit Program"
                            >
                              <Edit2 className="size-4" />
                            </button>
                            <form action={async () => { await deleteProgram(prog.id) }}>
                              <button
                                type="submit"
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                                title="Hapus Program"
                              >
                                <Trash2 className="size-4" />
                              </button>
                            </form>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: BIDANG PEKERJAAN */}
      {activeTab === "jobFields" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
              <Plus className="size-5 text-[#A30D11]" /> Tambah Bidang Pekerjaan Dinamis
            </h2>

            <form action={createJobField} className="space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Nama Bidang Pekerjaan
                </label>
                <input
                  name="title"
                  type="text"
                  value={jobFieldState.title}
                  onChange={(e) => setJobFieldState({ ...jobFieldState, title: e.target.value })}
                  placeholder="Contoh: Otomotif & Perawatan Mobil"
                  required
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Keterangan (Opsional)
                </label>
                <input
                  name="description"
                  type="text"
                  value={jobFieldState.description}
                  onChange={(e) => setJobFieldState({ ...jobFieldState, description: e.target.value })}
                  placeholder="Deskripsi singkat bidang pekerjaan"
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-[#A30D11] to-[#8A0B0E] hover:from-[#8A0B0E] hover:to-[#70080B] text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <CheckCircle2 className="size-4" /> Simpan Bidang Pekerjaan
              </button>
            </form>
          </div>

          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
              Daftar Bidang Pekerjaan Terdaftar
            </h2>
            <div className="divide-y divide-slate-100 max-h-[400px] overflow-y-auto pr-2">
              {JOB_FIELDS.map((field) => (
                <div key={field} className="py-3 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-800">Bidang {field}</span>
                  <span className="text-xs bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md">Bawaan</span>
                </div>
              ))}
              {initialJobFields.map((jf) => (
                <div key={jf.id} className="py-3 flex items-center justify-between text-sm">
                  <div>
                    <div className="font-semibold text-slate-900">Bidang {jf.title}</div>
                    {jf.description && <div className="text-xs text-slate-500">{jf.description}</div>}
                  </div>
                  <form action={async () => { await deleteJobField(jf.id) }}>
                    <button type="submit" className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg cursor-pointer">
                      <Trash2 className="size-4" />
                    </button>
                  </form>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: KUOTA PROGRAM */}
      {activeTab === "quotas" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
              <Plus className="size-5 text-[#A30D11]" /> Tambah Kuota Program
            </h2>

            <form action={createQuota} className="space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Judul Bidang / Program
                </label>
                <input
                  name="title"
                  type="text"
                  value={quotaState.title}
                  onChange={(e) => setQuotaState({ ...quotaState, title: e.target.value })}
                  placeholder="Contoh: Bidang Keperawatan Lansia"
                  required
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Sub-Judul / Keterangan
                </label>
                <input
                  name="subtitle"
                  type="text"
                  value={quotaState.subtitle}
                  onChange={(e) => setQuotaState({ ...quotaState, subtitle: e.target.value })}
                  placeholder="Contoh: Khusus Perempuan"
                  required
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Jumlah Kuota
                </label>
                <input
                  name="quotaNumber"
                  type="text"
                  value={quotaState.quotaNumber}
                  onChange={(e) => setQuotaState({ ...quotaState, quotaNumber: e.target.value })}
                  placeholder="Contoh: 40 Orang"
                  required
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-[#A30D11] to-[#8A0B0E] hover:from-[#8A0B0E] hover:to-[#70080B] text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <CheckCircle2 className="size-4" /> Simpan Kuota
              </button>
            </form>
          </div>

          {/* Live Preview Card Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
              <Eye className="size-4 text-[#A30D11]" /> Live Preview (Card Kuota Section)
            </div>

            <div className={quotaStyles.card}>
              <h3 className={quotaStyles.cardTitle}>{quotaState.title}</h3>
              <p className={quotaStyles.cardSubtitle}>{quotaState.subtitle}</p>
              <div className={quotaStyles.quotaNumber}>{quotaState.quotaNumber}</div>
            </div>

            {/* Existing Quota List */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-slate-900">Daftar Kuota Terdaftar ({initialQuotas.length})</h3>
              <div className="space-y-3">
                {initialQuotas.map((q) => (
                  <div key={q.id} className="flex items-center justify-between p-3 border border-slate-100 rounded-xl bg-slate-50">
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{q.title}</div>
                      <div className="text-xs text-slate-500">{q.subtitle} - <span className="font-bold text-[#A30D11]">{q.quotaNumber}</span></div>
                    </div>
                    <form action={async () => { await deleteQuota(q.id) }}>
                      <button type="submit" className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg cursor-pointer">
                        <Trash2 className="size-4" />
                      </button>
                    </form>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: KANDIDAT DITERIMA (STATISTIK) */}
      {activeTab === "stats" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
              <Plus className="size-5 text-[#A30D11]" /> Tambah Jumlah Kandidat Diterima
            </h2>

            <form action={createStat} className="space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Kategori Bidang Pekerjaan
                </label>
                <input
                  name="category"
                  type="text"
                  value={statFormState.category}
                  onChange={(e) => setStatFormState({ ...statFormState, category: e.target.value })}
                  placeholder="Contoh: Perawat Lansia"
                  required
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Jumlah Kandidat (Orang)
                </label>
                <input
                  name="count"
                  type="text"
                  value={statFormState.count}
                  onChange={(e) => setStatFormState({ ...statFormState, count: e.target.value })}
                  placeholder="Contoh: 210"
                  required
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-[#A30D11] to-[#8A0B0E] hover:from-[#8A0B0E] hover:to-[#70080B] text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <CheckCircle2 className="size-4" /> Simpan Statistik Kandidat
              </button>
            </form>
          </div>

          {/* Live Preview Card Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
              <Eye className="size-4 text-[#A30D11]" /> Live Preview (Statistik Card)
            </div>

            <div className="bg-[#A30D11] p-6 sm:p-8 rounded-3xl shadow-xl flex items-center justify-center">
              <div className={statStyles.statCard}>
                <div className={statStyles.statHeader}>
                  {statFormState.category || "Nama Bidang"}
                </div>
                <div className={statStyles.statBody}>
                  <span className={statStyles.count}>{statFormState.count || "0"}</span>
                  <span className={statStyles.unit}>Orang</span>
                </div>
              </div>
            </div>

            {/* Existing Stats List */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-slate-900">Daftar Statistik Kandidat ({initialStats.length})</h3>
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {initialStats.map((s) => (
                  <div key={s.id} className="flex items-center justify-between p-3 border border-slate-100 rounded-xl bg-slate-50">
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{s.category}</div>
                      <div className="text-xs text-slate-500"><span className="font-bold text-[#A30D11]">{s.count}</span> Orang Diterima Kerja</div>
                    </div>
                    <form action={async () => { await deleteStat(s.id) }}>
                      <button type="submit" className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg cursor-pointer">
                        <Trash2 className="size-4" />
                      </button>
                    </form>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: TESTIMONI ALUMNI */}
      {activeTab === "testimonials" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
              <Plus className="size-5 text-[#A30D11]" /> Tambah Testimoni Alumni
            </h2>

            <form action={createTestimonial} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Nama Alumni
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={testimonialState.name}
                    onChange={(e) => setTestimonialState({ ...testimonialState, name: e.target.value })}
                    placeholder="Contoh: Anisa"
                    required
                    className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Lokasi / Asal
                  </label>
                  <input
                    name="location"
                    type="text"
                    value={testimonialState.location}
                    onChange={(e) => setTestimonialState({ ...testimonialState, location: e.target.value })}
                    placeholder="Contoh: Jakarta, Indonesia"
                    required
                    className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Foto URL (Unsplash / Profil)
                </label>
                <input
                  name="image"
                  type="text"
                  value={testimonialState.image}
                  onChange={(e) => setTestimonialState({ ...testimonialState, image: e.target.value })}
                  placeholder="https://..."
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Isi Testimoni
                </label>
                <textarea
                  name="text"
                  rows={4}
                  value={testimonialState.text}
                  onChange={(e) => setTestimonialState({ ...testimonialState, text: e.target.value })}
                  placeholder="Tuliskan ulasan alumni di sini..."
                  required
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-[#A30D11] to-[#8A0B0E] hover:from-[#8A0B0E] hover:to-[#70080B] text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <CheckCircle2 className="size-4" /> Simpan Testimoni
              </button>
            </form>
          </div>

          {/* Live Preview Card Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
              <Eye className="size-4 text-[#A30D11]" /> Live Preview (Testimonial Card)
            </div>

            <div className="bg-[#A30D11] p-6 sm:p-8 rounded-3xl shadow-xl flex items-center justify-center relative min-h-[360px]">
              <div className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl text-left relative flex flex-col justify-between gap-4 overflow-hidden">
                <div className="absolute right-6 top-1 text-8xl font-serif text-slate-100 font-black select-none pointer-events-none z-0">
                  “
                </div>
                
                <div className="relative z-10 flex items-center gap-4">
                  <div className="size-16 rounded-full overflow-hidden border-2 border-slate-200 shrink-0 shadow-sm">
                    <img
                      src={testimonialState.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"}
                      alt={testimonialState.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <p className="relative z-10 text-sm sm:text-base font-medium text-slate-600 leading-relaxed italic">
                  {`"${testimonialState.text || "Belajar di Go Global Indonesia sangat membantu karir saya!"}"`}
                </p>

                <div className="relative z-10 pt-2 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-base">{testimonialState.name || "Nama Alumni"}</h4>
                  <span className="text-xs font-semibold text-slate-400">{testimonialState.location || "Lokasi"}</span>
                </div>
              </div>
            </div>


            {/* Existing Testimonials */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-slate-900">Daftar Testimoni Terdaftar ({initialTestimonials.length})</h3>
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {initialTestimonials.map((t) => (
                  <div key={t.id} className="flex items-center justify-between p-3 border border-slate-100 rounded-xl bg-slate-50">
                    <div className="flex items-center gap-3">
                      <img src={t.image} alt={t.name} className="size-10 rounded-full object-cover" />
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                        <div className="text-xs text-slate-500">{t.location}</div>
                      </div>
                    </div>
                    <form action={async () => { await deleteTestimonial(t.id) }}>
                      <button type="submit" className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg cursor-pointer">
                        <Trash2 className="size-4" />
                      </button>
                    </form>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

