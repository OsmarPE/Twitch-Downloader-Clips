import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { twitchChannelType } from "../../types";

const regex = /^https:\/\/clips\.twitch\.tv\/[a-zA-Z\-\d\s\_]*$/;
const regexOtherUrl = /^https:\/\/www\.twitch\.tv\/[A-Za-z\d?=&\/_\-]*$/;

export const validateURL = z
  .string()
  .trim()
  .refine((value) => regex.test(value) || regexOtherUrl.test(value), {
    message: "URL is not validated",
  });

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getIdByUrlTwitchClip = (url: string) => {
  if (regexOtherUrl.test(url)) {
    const regex = /clip\/([^?]+)/;
    const match = url.match(regex);

    if (match && match[1]) {
      return match[1]
    }
  }
  
  return url.split("https://clips.twitch.tv/")[1];
};

export const generateDownloadURL = (
  url: twitchChannelType["data"][0]["thumbnail_url"]
) => {
  const regexURL = /-preview-\d+x\d+\.[\w]{3,4}/g;
  return url.replace(regexURL, ".mp4");
};
