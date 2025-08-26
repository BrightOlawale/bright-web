import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Bright Olawale - Software Engineer",
  description: "Passionate Backend Engineer specializing in AWS cloud architectures, scalable microservices, and high-performance systems. Building solutions that scale from 20 minutes to 30 seconds.",
  keywords: ["Software Engineer", "Backend Engineer", "AWS", "TypeScript", "Node.js", "Golang", "Python", "Microservices", "Cloud Architecture"],
  authors: [{ name: "Bright Olawale" }],
  creator: "Bright Olawale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightolawale.com",
    title: "Bright Olawale - Software Engineer",
    description: "Passionate Software Engineer specializing in AWS cloud architectures, scalable microservices, and high-performance systems.",
    siteName: "Bright Olawale Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Olawale - Software Engineer",
    description: "Software Engineer at BFREE Africa | AWS Expert | Building scalable systems",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider defaultTheme="system" storageKey="bright-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}