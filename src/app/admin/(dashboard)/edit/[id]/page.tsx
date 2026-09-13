import { updateProgram } from "@/actions/programs"
import { db } from "@/db"
import { programs, jobFieldsTable } from "@/db/schema"
import { eq } from "drizzle-orm"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { DatePickerField } from "@/components/DatePickerField"
import { JOB_FIELDS } from "@/constants/jobFields"

export default async function EditProgram(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const programId = parseInt(params.id)
  
  if (isNaN(programId)) notFound()
    
  const program = await db.query.programs.findFirst({
    where: eq(programs.id, programId),
  })

  if (!program) notFound()

  const dynamicFields = await db.select().from(jobFieldsTable)

  // We bind the ID to the server action
  const updateProgramWithId = updateProgram.bind(null, program.id)

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin" className="p-2 hover:bg-slate-200 rounded-full transition">
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </Link>
        <h1 className="text-2xl font-bold text-slate-900 font-heading">Edit Program #{program.id}</h1>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-2xl">
        <form action={updateProgramWithId} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Nama Program
              </label>
              <input 
                name="name" 
                type="text" 
                defaultValue={program.name}
                required 
                className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Bidang Pekerjaan
              </label>
              <select 
                name="field" 
                defaultValue={program.field}
                required 
                className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#A30D11] focus:border-transparent outline-none transition text-sm text-slate-900 cursor-pointer"
              >
                {JOB_FIELDS.map((f) => (
                  <option key={f} value={f}>
                    Bidang {f}
                  </option>
                ))}
                {dynamicFields.map((jf) => (
                  <option key={`dyn-${jf.id}`} value={jf.title}>
                    Bidang {jf.title}
                  </option>
                ))}
              </select>
            </div>

            <DatePickerField
              name="onlineDate"
              label="Tanggal Program Online"
              defaultValue={program.onlineDate}
              placeholder="Pilih tanggal online"
            />

            <DatePickerField
              name="offlineDate"
              label="Tanggal Program Offline"
              defaultValue={program.offlineDate}
              placeholder="Pilih tanggal offline"
            />
          </div>
          
          <div className="pt-4 flex justify-end">
            <button 
              type="submit" 
              className="bg-[#A30D11] hover:bg-[#8A0B0E] text-white px-6 h-11 rounded-xl font-semibold text-sm transition cursor-pointer"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

