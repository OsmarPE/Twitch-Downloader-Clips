'use client'

import { handleClick } from "@/actions/actions"
import { RotateCcw } from "lucide-react"

export default function ButtonRevalidate() {

  return (
    <button className="flex transition duration-300 hover:opacity-70 bg-slate-100 text-black px-4 rounded-lg justify-center items-center" type="button" onClick={e => handleClick()}>
      <RotateCcw/>
    </button>
  )
}
