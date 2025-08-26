"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Star, Zap, Database, Cloud, Heart, Cpu } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ProjectsSection = () => {
  const projects = [
    {
      title: "BFREE Workflow System",
      description: "A comprehensive workflow orchestration system built with AWS Step Functions, Lambda, and S3. Handles millions of customer data points with parallel processing and custom workflow language interpretation.",
      category: "Featured Project",
      icon: Cpu,
      highlights: [
        { icon: Zap, label: "High Performance" },
        { icon: Database, label: "Big Data Processing" },
        { icon: Cloud, label: "AWS Serverless" }
      ],
      technologies: ["AWS Step Functions", "Lambda", "S3", "TypeScript", "BigQuery"],
      links: {
        github: "https://github.com/BrightOlawale",
        live: "#"
      },
      featured: true
    },
    {
      title: "Valley AI SDR Platform",
      description: "Architected and implemented a high-performance LinkedIn integration system with real-time synchronization, reducing processing time by 40x through strategic system optimization.",
      icon: ExternalLink,
      technologies: ["TypeScript", "Redis", "PostgreSQL", "BullMQ"],
      links: {
        github: "https://github.com/BrightOlawale",
        live: "#"
      }
    },
    {
      title: "Storbloc", 
      description: "Decentralized storage application using blockchain technology for secure and private data storage. Led backend engineering to deliver MVP in just two months.",
      icon: Database,
      technologies: ["Blockchain", "Node.js", "MySQL", "React"],
      links: {
        github: "https://github.com/BrightOlawale",
        live: "https://storbloc.com"
      }
    },
    {
      title: "ServiceHub Platform",
      description: "Platform for individuals on the autism spectrum to access growth services. Built with AWS S3, PostgreSQL, and deployed using AWS Amplify.",
      icon: Heart,
      technologies: ["AWS S3", "PostgreSQL", "AWS Amplify", "RDS"],
      links: {
        github: "https://github.com/BrightOlawale",
        live: "#"
      }
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions that make a real-world impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="relative overflow-hidden">
                  {/* Project Icon/Image */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                    <project.icon className="w-16 h-16 text-primary opacity-60" />
                    
                    {/* Overlay with Links */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.links.live !== "#" && (
                        <Button size="sm" asChild>
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {project.category && (
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {project.category}
                      </span>
                    )}
                    <CardTitle className="text-xl lg:text-2xl">{project.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Highlights for featured project */}
                  {project.highlights && (
                    <div className="flex flex-wrap gap-3">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                          <highlight.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-primary">{highlight.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection