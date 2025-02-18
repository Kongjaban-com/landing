import type React from "react"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kongjaban Group",
  description: "Building the future through strategic investments and innovation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-[#f8f7f4]">{children}</body>
    </html>
  )
}



import './globals.css'