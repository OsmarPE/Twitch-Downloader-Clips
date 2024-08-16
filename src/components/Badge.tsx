import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode,
    type?: 'primary' | 'secundary'
}
export default function Badge({ children, type = 'primary' }: Props) {

    if (type === 'primary') return (
        <button className="group relative grid mx-auto overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"><span><span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"></span></span><span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900"></span><span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span><span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5" >{children}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4"><path d="m9 18 6-6-6-6"></path></svg></span></button>
    )

    return (
        <div className={'relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none'}>
            <span className="animate-spins absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#a5b4fc_50%,#1d4ed8_100%)]">
            </span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-secundary px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {children}
            </span>
        </div>
    )
}
