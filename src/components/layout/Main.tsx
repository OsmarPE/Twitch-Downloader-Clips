import { ReactNode } from "react"
import Badge from "../Badge"
import Container from "../Container"
import Form from "../Form"

interface Props{
    children:ReactNode
}

export default function Main({children}:Props) {
    
    return (
        <main className="pt-14 pb-10 sm:pb-4">
            <Container>
                <div className="text-center">
                    <Badge type="secundary">Twitch</Badge>
                    <h1 className="text-4xl lg:text-5xl mt-6 font-bold text-white">Twitch Clips Downloader</h1>
                    <p className="text-grayMain leading-normal text-pretty max-w-2xl mt-5 mx-auto mb-10">OSTW is the easiest way to download Twitch clips. Simply paste the Twitch clip URL into the box and click 'Download Clip.' We’ll provide the video file for you to download.</p>
                    <Form/>
                    {children}
                </div>
            </Container>
        </main>
    )
}
