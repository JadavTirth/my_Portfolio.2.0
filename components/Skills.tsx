"use client"
import { motion } from "framer-motion"
import { Cloud, GitBranch, Settings, Code, Server, Wrench, Globe } from "lucide-react"
import Image from "next/image"

export default function Skills() {
  const skillCategories = [
    {
      category: "Cloud Platforms",
      skills: ["AWS"],
      color: "from-orange-500/30 to-amber-500/30",
      borderColor: "border-orange-500/50",
      icon: "/aws-cloud-logo-orange.png",
      lucideIcon: Cloud,
    },
    {
      category: "Containerization & Orchestration",
      skills: ["Docker"],
      color: "from-blue-600/30 to-cyan-500/30",
      borderColor: "border-blue-500/50",
      icon: "/docker-whale-logo-blue.png",
      lucideIcon: Server,
    },
    {
      category: "CI/CD Tools",
      skills: ["GitLab"],
      color: "from-purple-600/30 to-violet-500/30",
      borderColor: "border-purple-500/50",
      icon: "/gitlab-logo-purple.png",
      lucideIcon: Settings,
    },
    {
      category: "Configuration Management",
      skills: ["Ansible"],
      color: "from-red-500/30 to-rose-500/30",
      borderColor: "border-red-500/50",
      icon: "/ansible-logo-red.png",
      lucideIcon: Wrench,
    },
    {
      category: "Version Control",
      skills: ["Git"],
      color: "from-slate-600/30 to-gray-500/30",
      borderColor: "border-slate-500/50",
      icon: "/git-logo-black.png",
      lucideIcon: GitBranch,
    },
    {
      category: "Infrastructure as Code (IaC)",
      skills: ["Terraform"],
      color: "from-yellow-500/30 to-lime-500/30",
      borderColor: "border-yellow-500/50",
      icon: "/Iac.png",
      lucideIcon: Code,
    },
    {
      category: "Scripting Languages",
      skills: ["Shell Scripting", "YAML", "Python"],
      color: "from-green-600/30 to-emerald-500/30",
      borderColor: "border-green-500/50",
      icon: "/python-snake-logo-green.png",
      lucideIcon: Code,
    },
    {
      category: "Other",
      skills: ["Java", "HTML", "CSS", "JavaScript", "React"],
      color: "from-teal-600/30 to-cyan-500/30",
      borderColor: "border-teal-500/50",
      icon: "/react-logo-teal.png",
      lucideIcon: Globe,
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-black dark:text-white text-sm font-medium mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skill-Set</h2>
          <div className="w-16 h-1 bg-black dark:bg-white mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((skill, index) => {
            const Icon = skill.lucideIcon
            return (
              <motion.div
                key={skill.category}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-black/50 dark:hover:border-white/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="mb-4 p-3 rounded-lg bg-gray-700/50 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors duration-300 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {skill.icon ? (
                      <div className="w-8 h-8 relative">
                        <Image
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.category}
                          fill
                          className="object-contain"
                          unoptimized
                          onError={(e: any) => {
                            const img = e.currentTarget as HTMLImageElement
                            img.style.display = "none"
                            if (img.nextElementSibling instanceof HTMLElement) {
                              img.nextElementSibling.style.display = "block"
                            }
                          }}
                        />
                        <Icon className="w-8 h-8 text-black dark:text-white hidden" />
                      </div>
                    ) : (
                      <Icon className="w-8 h-8 text-black dark:text-white" />
                    )}
                  </motion.div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                    {skill.category}
                  </h3>

                  <div className="mb-3">
                    <div className="flex flex-wrap justify-center gap-1">
                      {skill.skills.map((skillName, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-black/20 dark:bg-white/20 text-black dark:text-white rounded-full"
                        >
                          {skillName}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
