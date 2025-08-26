"use client"

import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, Code2, Database, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  const handleScrollToSkills = () => {
    document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleScrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  // Calculate years of experience from 2020
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - 2020

  const stats = [
    { number: "10x", label: "System Optimization" },
    { number: "15+", label: "AWS Services Experience" },
    { number: `${yearsOfExperience}+`, label: "Years Experience" },
  ]

  const codeLines = [
    { 
      number: 1, 
      content: (
        <span>
          <span className="text-purple-400">const</span>{' '}
          <span className="text-blue-300">bright</span>{' '}
          <span className="text-white">=</span>{' '}
          <span className="text-yellow-400">{'{'}</span>
        </span>
      )
    },
    { 
      number: 2, 
      content: (
        <span>
          {'  '}<span className="text-red-300">name</span>
          <span className="text-white">:</span>{' '}
          <span className="text-green-400">"Bright Olawale"</span>
          <span className="text-white">,</span>
        </span>
      )
    },
    { 
      number: 3, 
      content: (
        <span>
          {'  '}<span className="text-red-300">expertise</span>
          <span className="text-white">:</span>{' '}
          <span className="text-yellow-400">[</span>
          <span className="text-green-400">"AWS"</span>
          <span className="text-white">,</span>{' '}
          <span className="text-green-400">"TypeScript"</span>
          <span className="text-white">,</span>{' '}
          <span className="text-green-400">"Go"</span>
          <span className="text-white">,</span>{' '}
          <span className="text-green-400">"Python"</span>
          <span className="text-yellow-400">]</span>
          <span className="text-white">,</span>
        </span>
      )
    },
    { 
      number: 4, 
      content: (
        <span>
          {'  '}<span className="text-red-300">hobbies</span>
          <span className="text-white">:</span>{' '}
          <span className="text-yellow-400">[</span>
          <span className="text-green-400">"🎾 Tennis"</span>
          <span className="text-white">,</span>{' '}
          <span className="text-green-400">"⚽ Football"</span>
          <span className="text-white">,</span>{' '}
          <span className="text-green-400">"✈️ Traveling"</span>
          <span className="text-yellow-400">]</span>
          <span className="text-white">,</span>
        </span>
      )
    },
    { 
      number: 5, 
      content: (
        <span>
          {'  '}<span className="text-red-300">motto</span>
          <span className="text-white">:</span>{' '}
          <span className="text-green-400">"By thee I run through a troop 🏃‍♂️"</span>
          <span className="text-white">,</span>
        </span>
      )
    },
    { 
      number: 6, 
      content: (
        <span>
          {'  '}<span className="text-red-300">passion</span>
          <span className="text-white">:</span>{' '}
          <span className="text-green-400">"Teaching & building scalable systems"</span>
        </span>
      )
    },
    { 
      number: 7, 
      content: (
        <span>
          <span className="text-yellow-400">{'}'}</span>
          <span className="text-white">;</span>
        </span>
      )
    },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Subtle Christian Fish Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.1, 0.1, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatDelay: 12,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-1/3 w-32 h-20 pointer-events-none"
        >
          <svg 
            viewBox="0 0 100 60" 
            className="w-full h-full text-primary/20"
            fill="currentColor"
          >
            <path d="M10 30c0 0 15-20 40-20s40 20 40 20s-15 20-40 20S10 30 10 30z M50 30L90 30"/>
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="animated-gradient-text text-lg font-medium"
            >
              Hi, I'm
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold"
            >
              <div className="gradient-text leading-[1.4] mb-6">Bright Olawale</div>
              <div className="text-foreground/80 text-3xl lg:text-5xl font-light leading-tight">
                Software Engineer
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-2xl"
            >
              Passionate Backend Engineer specializing in{" "}
              <span className="text-primary font-semibold">AWS cloud architectures</span>,{" "}
              <span className="text-accent font-semibold">scalable microservices</span>, and{" "}
              <span className="text-primary font-semibold">high-performance systems</span>. 
              I enjoy building scalable systems and learning new technologies.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-8 py-8 border-y border-border"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  className="text-2xl lg:text-3xl font-bold gradient-text mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg" 
              onClick={handleScrollToSkills}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              View My Skills
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleScrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Let's Connect
            </Button>
          </motion.div>
        </motion.div>

        {/* Code Window */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
            {/* Window Header */}
            <div className="bg-muted/50 px-4 py-3 flex items-center justify-between border-b border-border">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="text-muted-foreground text-sm font-mono ml-2">bright-systems.ts</div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm">
              {codeLines.map((line, index) => (
                <motion.div
                  key={line.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="flex items-center mb-2"
                >
                  <span className="text-muted-foreground mr-4 select-none w-4 text-right">
                    {line.number}
                  </span>
                  <span>{line.content}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <Cloud className="w-8 h-8 text-primary" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-4 -left-4 w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <Code2 className="w-7 h-7 text-accent" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
            className="absolute top-1/2 -right-8 w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <Database className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}

export default HeroSection