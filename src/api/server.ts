import { twitchChannelType } from "../../types";

export const getInfoTwitchChannel = async (id: string) => {
  try {
    const response = await fetch(
      `https://cy49zmt23f.execute-api.us-east-1.amazonaws.com/dev/download_clip?id=${id}`,{
        next:{
          tags:['id']
        }
      }
    );
    const data = (await response.json()) as twitchChannelType;

    return {
      message: data.data,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
