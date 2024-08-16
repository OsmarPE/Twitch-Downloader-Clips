import { Metadata } from "next";

export const meta: Metadata = {
  metadataBase: new URL('https://acme.com'),
  title: "Twitch Clips Downloader - OSTW",
  description:
    "OSTW is the easiest way to download Twitch clips. Simply paste the Twitch clip URL into the box and click 'Download Clip.' We’ll provide the video file for you to download.",
  authors: {
    name: "Osmar Perera",
    url: "https://github.com/OsmarPE",
  },
  keywords: [
    "twitch clip downloader",
    "download videos twitch",
    "clips twitch",
    "download twitch",
    "download clips",
  ],
  icons:{
    icon:'/favicon.ico'
  },
  applicationName: "Twitch clips downloader - OSTW",
  twitter: {
    title: "Twitch Clips Downloader",
    card: "summary",
    creator: "@OsmarDev",
    description: "OSTW is the easiest way to download Twitch clips",
    images: "/favicon.ico",
  },
  openGraph: {
    title: "Twitch Clips Downloader",
    description: "OSTW is the easiest way to download Twitch clips",
    images: "/favicon.ico",
  },
};
