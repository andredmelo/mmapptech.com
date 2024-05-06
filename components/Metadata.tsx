import type { Metadata } from 'next'

export const MetaData: Metadata = {
  title: "MMAPP",
  description: "Mapping MMA",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}