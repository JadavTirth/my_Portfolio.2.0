"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

// Define a type for the background dots to ensure consistency
type BackgroundDot = {
  left: string;
  top: string;
}

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [backgroundDots, setBackgroundDots] = useState<BackgroundDot[]>([]); // New state for dots

  // Generate random dots on the client only
  useEffect(() => {
    const dots: BackgroundDot[] = [...Array(12)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setBackgroundDots(dots);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // WhatsApp integration
    const yourPhoneNumber = "9510332132"
    const messageBody = `Hello, I'm contacting you from your website.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n\n*Message:*\n${formData.message}`
    const encodedMessage = encodeURIComponent(messageBody)
    const whatsappLink = `https://wa.me/${yourPhoneNumber}?text=${encodedMessage}`

    window.open(whatsappLink, "_blank", "noopener,noreferrer")

    toast({
      title: "Opening WhatsApp...",
      description: "Please confirm and send the message in WhatsApp.",
    })

    setFormData({
      name: "",
      email: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        {backgroundDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              left: dot.left,
              top: dot.top,
            }}
          />
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl font-bold mb-4 text-foreground"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Get In Touch
              </motion.h3>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                Feel free to contact me for any work or suggestions. I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your vision.
              </motion.p>
            </motion.div>

            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg relative overflow-hidden group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                  <Phone className="h-6 w-6 text-primary relative z-10" />
                </motion.div>
                <div className="relative z-10">
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+91-9510332132</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg relative overflow-hidden group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                  <Mail className="h-6 w-6 text-primary relative z-10" />
                </motion.div>
                <div className="relative z-10">
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">tirth.jadav04@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
                animate={{
                  color: focusedField === "name" ? "hsl(var(--primary))" : "hsl(var(--foreground))",
                }}
                transition={{ duration: 0.2 }}
              >
                Name
              </motion.label>
              <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your name"
                  required
                  className="transition-all duration-300 focus:shadow-lg focus:shadow-primary/20"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
                animate={{
                  color: focusedField === "email" ? "hsl(var(--primary))" : "hsl(var(--foreground))",
                }}
                transition={{ duration: 0.2 }}
              >
                Email
              </motion.label>
              <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="your.email@example.com"
                  required
                  className="transition-all duration-300 focus:shadow-lg focus:shadow-primary/20"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
                animate={{
                  color: focusedField === "message" ? "hsl(var(--primary))" : "hsl(var(--foreground))",
                }}
                transition={{ duration: 0.2 }}
              >
                Message
              </motion.label>
              <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="transition-all duration-300 focus:shadow-lg focus:shadow-primary/20"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button type="submit" disabled={isSubmitting} className="w-full relative overflow-hidden group">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                    animate={{
                      x: isSubmitting ? ["-100%", "100%"] : "0%",
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isSubmitting ? Number.POSITIVE_INFINITY : 0,
                      ease: "linear",
                    }}
                  />
                  {isSubmitting ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      Sending...
                    </motion.span>
                  ) : (
                    <>
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="inline-block">
                        <Send className="h-4 w-4 mr-2" />
                      </motion.div>
                      WhatsApp me
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}