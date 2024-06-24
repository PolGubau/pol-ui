import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="dark bg-secondary-900 text-secondary-50">
        {children}
      </body>
    </html>
  )
}
