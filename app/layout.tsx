import type React from "react"
import { Inter } from "next/font/google"
import ThemeProvider from "@/components/theme-provider"
//import CursorEffect from "@/components/cursor-effect"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>CloudVista | Premium Software Development</title>
        <meta name="description" content="Premium software development services by CloudVista" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {/*<CursorEffect />*/}
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
