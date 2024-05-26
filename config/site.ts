import { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  name: "Full Stack Tech",
  description: "NYC-Based Digital Design + Development",
  url: process.env.NEXT_PUBLIC_SERVER_URL as string,
  // # TODO: fix the ogImage
  ogImage: `${process.env.NEXT_PUBLIC_SERVER_URL}/public/og.jpg`,
  links: {
    twitter: "https://twitter.com/fullstacktechnyc",
    instagram: "https://instagram.com/fullstacktechnyc",
  },
};