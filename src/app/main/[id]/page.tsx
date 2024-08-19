import { getInfoTwitchChannel } from "@/api/server"
import CardDownload from "@/components/CardDownload"
import { DataType } from "../../../../types"
import Error from "@/components/Error"
import ButtonRevalidate from "@/components/ButtonRevalidate"

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export default async function page({ params }: Props) {

  let res: any = []
  res = await getInfoTwitchChannel(params.id)

  if (res.message.length === 0) {
    return (
      <div className="grid mt-10 grid-rows-2 sm:grid-rows-1 sm:grid-cols-[1fr_auto] gap-4 max-w-2xl mx-auto">
        <Error>Not found Video, Try Again</Error>
        <ButtonRevalidate/>
      </div>
    )
  }

  if (res.message.length > 0) return (
    <CardDownload data={res?.message ?? []} />
  )
}
