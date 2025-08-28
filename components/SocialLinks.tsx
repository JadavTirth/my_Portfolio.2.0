import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/JadavTirth",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jadav-tirth-138353320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:tirth.jadav04@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+919510332132",
      label: "Phone",
    },
  ]

  return (
    <div className="flex gap-2">
      {socialLinks.map((link) => (
        <Button
          key={link.label}
          variant="outline"
          size="icon"
          asChild
          className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
        >
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
            <link.icon className="h-4 w-4" />
          </a>
        </Button>
      ))}
    </div>
  )
}
