"use client"

import * as React from "react"
import { format } from "date-fns"
import { id as idLocale } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerFieldProps {
  name: string
  label: string
  defaultValue?: string
  placeholder?: string
}

export function DatePickerField({
  name,
  label,
  defaultValue = "",
  placeholder = "Pilih tanggal",
}: DatePickerFieldProps) {
  const [date, setDate] = React.useState<Date | undefined>(() => {
    if (!defaultValue) return undefined
    // Clean string if it contains trailing dash
    const cleanStr = defaultValue.replace("-", "").trim()
    const parsed = new Date(cleanStr)
    return isNaN(parsed.getTime()) ? undefined : parsed
  })

  // Format value sent to backend in server action (e.g., "13 Juli 2026 -")
  const formattedValue = date ? `${format(date, "d MMMM yyyy", { locale: idLocale })} -` : ""

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input type="hidden" name={name} value={formattedValue} />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className={`w-full justify-start text-left font-normal h-12 rounded-lg border-gray-300 bg-white ${
              !date ? "text-gray-400" : "text-gray-900"
            }`}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
            {date ? format(date, "d MMMM yyyy", { locale: idLocale }) : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
