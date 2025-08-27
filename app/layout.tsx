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
  generator: "v0.app",

  // 👇 Add favicon
  icons: {
    icon: "/tj-logo-circular-design.png", // or "/tj-logo.png"
    shortcut: "/tj-logo.png",
  },

  // 👇 Add OpenGraph + Twitter preview image
  // openGraph: {
  //   title: "Tirth A. Jadav | DevOps Engineer",
  //   description:
  //     "DevOps Engineer passionate about automating workflows and optimizing infrastructure.",
  //   type: "website",
  //   images: ["/profile-5.JPG"], // your image in public/
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Tirth A. Jadav | DevOps Engineer",
  //   description:
  //     "DevOps Engineer passionate about automating workflows and optimizing infrastructure.",
  //   images: ["/profile-5.JPG"],
  // },
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
