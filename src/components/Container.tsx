import { ReactNode } from "react"

interface Props{
    children:ReactNode
}

export default function Container({children}:Props) {
  return (
    <div className="w-[90%] max-w-[90%] mx-auto">
        {children}
    </div>
  )
}
