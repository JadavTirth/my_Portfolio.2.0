"use client"

import type React from "react"
import { useState, useEffect } from "react" // Import useEffect
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import Image from "next/image"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [randomPositions, setRandomPositions] = useState<
    Array<{ x: number; y: number; left: number; top: number }>
  >([])

  // Move the random generation logic to a useEffect hook
  useEffect(() => {
    const newPositions = [...Array(20)].map(() => ({
      x: Math.random() * 300 - 150,
      y: Math.random() * 300 - 150,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }))
    setRandomPositions(newPositions)
  }, []) // The empty dependency array ensures this runs only once

  const skillCategories = [
    {
      category: "Cloud Platforms",
      skills: ["AWS"],
      description: "Experience in deploying and managing scalable cloud infrastructure on AWS.",
      color: "from-orange-500/30 to-amber-500/30",
      borderColor: "border-orange-500/50",
      icon: "/aws-cloud-logo-orange.png",
    },
    {
      category: "Containerization & Orchestration",
      skills: ["Docker"],
      description: "Skilled in containerizing applications using Docker and managing environments efficiently.",
      color: "from-blue-600/30 to-cyan-500/30",
      borderColor: "border-blue-500/50",
      icon: "/docker-whale-logo-blue.png",
    },
    {
      category: "CI/CD Tools",
      skills: ["GitLab"],
      description: "Implemented automated CI/CD pipelines using GitLab for continuous integration and delivery.",
      color: "from-purple-600/30 to-violet-500/30",
      borderColor: "border-purple-500/50",
      icon: "/gitlab-logo-purple.png",
    },
    {
      category: "Configuration Management",
      skills: ["Ansible"],
      description: "Used Ansible for automating infrastructure provisioning and configuration.",
      color: "from-red-500/30 to-rose-500/30",
      borderColor: "border-red-500/50",
      icon: "/ansible-logo-red.png",
    },
    {
      category: "Version Control",
      skills: ["Git"],
      description: "Proficient in source code management, branching, and collaboration using Git.",
      color: "from-slate-600/30 to-gray-500/30",
      borderColor: "border-slate-500/50",
      icon: "/git-logo-black.png",
    },
    {
      category: "Infrastructure as Code (IaC)",
      skills: ["Terraform"],
      description: "Experienced in provisioning and managing infrastructure using Terraform with AWS S3 remote state and DynamoDB locking.",
      color: "from-yellow-500/30 to-lime-500/30",
      borderColor: "border-yellow-500/50",
      icon: "/Iac.png",
    },
    {
      category: "Scripting Languages",
      skills: ["Shell Scripting", "YAML", "Python"],
      description: "Developed automation scripts and deployment files using Shell, YAML, and Python.",
      color: "from-green-600/30 to-emerald-500/30",
      borderColor: "border-green-500/50",
      icon: "/python-snake-logo-green.png",
    },
    {
      category: "Other",
      skills: ["Java", "HTML", "CSS", "JavaScript", "React"],
      description: "Built responsive web applications using JavaScript, React, and core frontend technologies.",
      color: "from-teal-600/30 to-cyan-500/30",
      borderColor: "border-teal-500/50",
      icon: "/react-logo-teal.png",
    },
  ]

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
    })
  }

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        {randomPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(45deg, 
                ${
                  i % 7 === 0
                    ? "#f97316"
                    : i % 7 === 1
                      ? "#3b82f6"
                      : i % 7 === 2
                        ? "#8b5cf6"
                        : i % 7 === 3
                          ? "#ef4444"
                          : i % 7 === 4
                            ? "#64748b"
                            : i % 7 === 5
                              ? "#059669"
                              : "#0891b2"
                }, 
                ${
                  i % 7 === 0
                    ? "#fbbf24"
                    : i % 7 === 1
                      ? "#06b6d4"
                      : i % 7 === 2
                        ? "#a855f7"
                        : i % 7 === 3
                          ? "#f87171"
                          : i % 7 === 4
                            ? "#94a3b8"
                            : i % 7 === 5
                              ? "#10b981"
                              : "#22d3ee"
                })`,
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              x: [0, pos.x],
              y: [0, pos.y],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              className="relative group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => setActiveCategory(category.category)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <motion.div
                className={`bg-gradient-to-br ${category.color} rounded-xl p-6 border-2 ${category.borderColor} backdrop-blur-sm relative overflow-hidden shadow-lg`}
                whileHover={{
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                animate={{
                  borderColor: activeCategory === category.category ? "hsl(var(--primary))" : undefined,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  transform:
                    activeCategory === category.category
                      ? `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`
                      : "none",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: activeCategory === category.category ? ["-100%", "100%"] : "0%",
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: activeCategory === category.category ? Number.POSITIVE_INFINITY : 0,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="relative"
                      animate={{
                        rotate: activeCategory === category.category ? 360 : 0,
                        scale: activeCategory === category.category ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={category.icon || "/placeholder.svg"}
                        alt={`${category.category} icon`}
                        width={40}
                        height={40}
                        className="rounded-lg shadow-md"
                      />
                    </motion.div>
                    <motion.h3
                      className="text-xl font-bold text-foreground"
                      animate={{
                        scale: activeCategory === category.category ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.category}
                    </motion.h3>
                  </div>

                  <motion.p
                    className="text-muted-foreground mb-4 text-sm leading-relaxed"
                    animate={{
                      x: activeCategory === category.category ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-3"
                    variants={{
                      hover: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    animate={activeCategory === category.category ? "hover" : "initial"}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        variants={{
                          initial: { scale: 1, rotateZ: 0 },
                          hover: { scale: 1.1, rotateZ: 5 },
                        }}
                        whileHover={{
                          scale: 1.2,
                          rotateZ: 10,
                          y: -5,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <Badge
                              variant="secondary"
                              className="cursor-pointer bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-primary-foreground transition-all duration-300 relative overflow-hidden group px-3 py-1.5 font-medium shadow-md"
                            >
                              <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0"
                                animate={{
                                  x: ["-100%", "100%"],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear",
                                }}
                              />
                              <span className="relative z-10">{skill}</span>
                            </Badge>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold">{skill}</h4>
                              <p className="text-sm text-muted-foreground">
                                Experienced in {skill} development and implementation
                              </p>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}