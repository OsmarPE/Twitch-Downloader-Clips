import React from 'react'

export default function loading() {
  return (
    <div role="status" className="max-w-2xl rounded-lg mx-auto mt-10 space-y-8 animate-pulse  bg-grayMain-foreground/50 p-2 rtl:space-x-reverse sm:flex gap-3 md:items-center">
      <div className=" w-full h-48 bg-grayMain-foreground rounded sm:w-96 ">
      </div>
      <div className="w-full">
        <div className="h-2.5 rounded-full bg-grayMain-foreground w-48 mb-4"></div>
        <div className="h-2 rounded-full bg-grayMain-foreground max-w-[480px] mb-2.5"></div>
        <div className="h-2 rounded-full bg-grayMain-foreground mb-2.5"></div>
        <div className="h-2 rounded-full bg-grayMain-foreground max-w-[440px] mb-2.5"></div>
        <div className="h-2 rounded-full bg-grayMain-foreground max-w-[460px] mb-2.5"></div>
        <div className="h-2 rounded-full bg-grayMain-foreground max-w-[360px]"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
