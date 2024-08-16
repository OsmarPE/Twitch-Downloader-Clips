import { getInfoTwitchChannel } from "@/api/server"
import CardDownload from "@/components/CardDownload"
import { DataType } from "../../../../types"

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function page({ params }: Props) {

  let res: any = []
  res = await getInfoTwitchChannel(params.id)

  if (res.message.length > 0) return (
    <CardDownload data={res?.message ?? []} />
  )
}
