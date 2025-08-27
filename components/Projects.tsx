"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Variants, motion } from "framer-motion";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Notes App",
      description:
        "Deployed full-stack Notes application on AWS EC2 using Docker, MySQL, and Nginx with Docker Compose.",
      technologies: ["Docker", "Docker Compose", "MySQL", "Nginx", "AWS EC2"],
      dockerhub:
        "https://hub.docker.com/repository/docker/YOUR_USERNAME/notes-app",
    },
    {
      title: "Import-Export Website",
      description:
        "A professional business website for import-export services built using React for frontend and Node.js for backend.",
      technologies: ["React", "Node.js", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/JadavTirth/import-export",
      live: "http://www.argoimex.com",
    },
    {
      title: "🌩️ Terraform Remote State Backup",
      description:
        "Implemented remote state management by storing the terraform.tfstate file in an S3 bucket with DynamoDB for state locking, ensuring secure and consistent infrastructure deployments.",
      technologies: [
        "Terraform",
        "AWS",
        "S3",
        "DynamoDB",
        "Remote State",
      ],
      github: "https://github.com/JadavTirth/terraform_CreateFile_in_s3",
      
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="bg-background rounded-lg border p-6 relative overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
                animate={{
                  borderColor:
                    hoveredProject === index
                      ? "hsl(var(--primary))"
                      : "hsl(var(--border))",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0"
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                {hoveredProject === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/40 rounded-full"
                        initial={{
                          x: Math.random() * 300,
                          y: Math.random() * 200,
                          opacity: 0,
                        }}
                        animate={{
                          y: [null, -20],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </>
                )}
                <div className="space-y-4 relative z-10">
                  <motion.h3
                    className="text-xl font-semibold text-foreground"
                    animate={{
                      scale: hoveredProject === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    animate={{
                      x: hoveredProject === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotateZ: 5,
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Badge variant="outline" className="hover:bg-primary/10">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    className="flex gap-2 pt-2"
                    animate={{
                      y: hoveredProject === index ? -2 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.dockerhub && (
                      <motion.div
                        whileHover={{ scale: 1.05, rotateX: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="hover:bg-primary/10 bg-transparent"
                        >
                          <a href={project.dockerhub} target="_blank" rel="noopener noreferrer">
                            🐳 Docker Hub
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {project.github && (
                      <motion.div
                        whileHover={{ scale: 1.05, rotateX: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="hover:bg-primary/10 bg-transparent"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {project.live && (
                      <motion.div
                        whileHover={{ scale: 1.05, rotateX: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="hover:bg-primary/10 bg-transparent"
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}