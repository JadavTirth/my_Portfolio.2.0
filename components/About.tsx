"use client";

import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <motion.div
                className="relative"
                onMouseEnter={() => setImageHovered(true)}
                onMouseLeave={() => setImageHovered(false)}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"
                  animate={{
                    scale: imageHovered ? 1.2 : 1,
                    opacity: imageHovered ? 0.8 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="w-48 h-48 relative">
                  <Image
                    src="/profile-5.jpg"
                    alt="Tirth A. Jadav"
                    fill
                    className="object-cover rounded-full border-4 border-primary/20"
                  />
                </div>

                {imageHovered && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/60 rounded-full"
                        initial={{
                          x: 100,
                          y: 100,
                          opacity: 0,
                        }}
                        animate={{
                          x: 100 + Math.cos((i * 60 * Math.PI) / 180) * 60,
                          y: 100 + Math.sin((i * 60 * Math.PI) / 180) * 60,
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
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
              </motion.div>

              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-2xl font-bold text-foreground"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Tirth A. Jadav
                </motion.h3>
                <motion.p
                  className="text-lg text-primary font-semibold"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    background:
                      "linear-gradient(45deg, currentColor, #3b82f6, currentColor)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  DevOps Engineer
                </motion.p>

                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-2 mt-2 text-muted-foreground"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MapPin className="h-4 w-4" />
                  <span>Junagadh, Gujarat, India</span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-2 mt-2"
                  whileHover={{ x: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Briefcase className="h-4 w-4 text-green-600" />
                  </motion.div>
                  <span className="text-green-600 font-medium">
                    Open to opportunities
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <SocialLinks />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl font-bold mb-4 text-foreground"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                My Journey
              </motion.h3>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                A passionate DevOps enthusiast currently pursuing a B.E. in
                Computer Engineering at Shantilal Shah Engineering College, in
                the 7th semester. Keen on cloud infrastructure, CI/CD
                automation, and building scalable DevOps pipelines using tools
                like Docker, Ansible, and GitLab. Always eager to learn new
                technologies and contribute to reliable, production-grade
                systems.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl font-bold mb-4 text-foreground"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Education
              </motion.h3>
              <motion.div
                className="bg-background rounded-lg p-6 border relative overflow-hidden group"
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                  borderColor: "hsl(var(--primary))",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-start gap-3 relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <GraduationCap className="h-6 w-6 text-primary mt-1" />
                  </motion.div>
                  <div>
                    <motion.h4
                      className="font-semibold text-foreground"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      B.E. in Information Technology
                    </motion.h4>
                    <motion.p
                      className="text-muted-foreground"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      Shantilal Shah Government Engineering College, GTU
                    </motion.p>
                    <motion.p
                      className="text-sm text-muted-foreground"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    >
                      2022 - 2026
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
