import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tirth A. Jadav | DevOps Engineer",
  description:
    "DevOps Engineer passionate about automating workflows and optimizing infrastructure. Specializing in Docker, AWS, GitLab CI/CD, and Ansible.",
  keywords: ["DevOps", "Engineer", "Docker", "AWS", "GitLab", "Ansible", "CI/CD", "Infrastructure"],
  authors: [{ name: "Tirth A. Jadav" }],
  openGraph: {
    title: "Tirth A. Jadav | DevOps Engineer",
    description: "DevOps Engineer passionate about automating workflows and optimizing infrastructure.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
