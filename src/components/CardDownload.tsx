import { generateDownloadURL } from "@/helper/utils"
import { twitchChannelType } from "../../types"
import { Twitch } from "lucide-react"

interface Props{
    data:twitchChannelType['data']
}

export default function CardDownload({data}:Props) {
  
    const { title, thumbnail_url,broadcaster_name, duration} = data[0]

    const href = generateDownloadURL(thumbnail_url)
    
    return (
    <article role="contentinfo"  className="p-2 rounded-lg bg-grayMain-foreground/60 backdrop-blur-md mt-10 max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
        <figure className="flex-1 grayscale">
            <img className="w-full h-full block object-cover rounded-md" src={thumbnail_url} alt={title} />
        </figure>
        <div className="flex-1 text-left sm:py-4 grid gap-4 grid-rows-[1fr_auto h-full] px-2 sm:px-0 sm:pr-2">
            <div>
                <h2 className="text-white text-xl font-bold">{title}</h2>
                <blockquote className="flex items-center gap-2 mt-2">
                    <div className="text-primary-foreground flex items-center gap-2">
                        <Twitch width={18} height={18}/>
                        <span className="capitalize">{broadcaster_name}</span>
                    </div>
                    <span>•</span>
                    <time>Duration: {duration} seconds</time>
                </blockquote>
            </div>
            <a href={href} className="w-max h-max self-end justify-self-end inline-block py-2 px-5 transition-colors duration-300 hover:bg-primary hover:text-white hover:border-primary rounded-full border border-grayMain text-white text-sm">Download</a>
        </div>
    </article>
  )
}
