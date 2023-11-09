import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export const metadata = {
  title: 'Riky & Afni',
  description: 'Undangan Pernikahan Riky dan Afni',
  openGraph: {
    title: 'Riky & Afni',
    description: 'Undangan Pernikahan Riky dan Afni',
    url: process.env.HOST_URL,
    siteName: 'Undangan Pernikahan Riky dan Afni',
    images: [
      {
        url: `${process.env.HOST_URL}images/hero.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.HOST_URL}images/hero.png`,
        width: 1800,
        height: 1600,
        alt: 'Undangan Pernikahan Riky & Afni',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
