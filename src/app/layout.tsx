import type { Metadata } from "next"
import { Suspense } from "react"
import { Raleway } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/lib/config"
import { FacebookPixel } from "@/components/FacebookPixel"

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0d1f3d" />
      </head>
      <body className={`${raleway.variable} font-body antialiased`}>
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
