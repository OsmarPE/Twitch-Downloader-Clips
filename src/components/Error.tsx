import { ReactNode } from "react"

interface Props{
    children:ReactNode
}
export default function Error({children}:Props) {
    return (
        <article className=" w-full p-4 mx-auto rounded-lg bg-red-500 text-center">
            <p className="text-red-50">{children}</p>
        </article>
    )
}
