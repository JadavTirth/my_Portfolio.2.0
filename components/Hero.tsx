"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Define a separate component for the animated dots to handle the client-side rendering
const AnimatedDots = () => {
  const [dotPositions, setDotPositions] = useState<
    { id: number; top: number; left: number }[]
  >([]);

  useEffect(() => {
    // Generate the random positions only on the client
    const positions = [...Array(20)].map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
    setDotPositions(positions);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {dotPositions.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/10 to-primary/5 px-4 relative overflow-hidden">
      <AnimatedDots />

      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          rotateX: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)`,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-secondary/20 to-accent/40 rounded-full blur-2xl"
        animate={{
          y: [0, 30, 0],
          rotateY: [0, -360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          transform: `translateX(${mousePosition.x * -15}px) translateY(${mousePosition.y * -15}px)`,
        }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hi, I'm{" "}
            <motion.span
              className="text-primary inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(45deg, currentColor, #3b82f6, currentColor)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Jadav Tirth
            </motion.span>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DevOps Engineer
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            passionate about automating workflows and optimizing infrastructure. Let's build scalable and reliable
            systems together.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
            <Button asChild size="lg" className="text-lg px-8 py-3 relative overflow-hidden group">
              <a href="#projects">
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
                View My Work
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              rotateX: -5,
              rotateY: -5,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 bg-transparent hover:bg-primary/10"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#about"
            className="inline-block"
            animate={{
              y: [0, 10, 0],
              rotateX: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.2,
              rotateZ: 180,
            }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}