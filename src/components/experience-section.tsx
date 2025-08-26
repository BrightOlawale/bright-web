"use client"

import { motion } from "framer-motion"
import { Building2, Calendar, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Backend Engineer",
      company: "BFree Africa",
      duration: "Feb 2024 - Present",
      type: "Current",
      description: "Leading engineering efforts on the BFREE Workflow Project, utilizing AWS tools such as Step Functions, Lambda, and S3 for effective task orchestration.",
      achievements: [
        "Developed a scalable data processing pipeline to efficiently batch process large volumes of customer data",
        "Created a system for interpreting workflows using Amazon State Language (ASL) and custom workflow language",
        "Designed and implemented the BFREE templating engine for SMS, Email, and WhatsApp message templates",
        "Collaborated on the BFREE dispatcher service with failover mechanisms for reliability"
      ],
      technologies: ["AWS", "Kubernetes", "TypeScript", "Redis", "BigQuery", "Golang"]
    },
    {
      title: "Backend Engineer", 
      company: "Valley",
      duration: "Sep 2024 - Aug 2025",
      type: "Contract",
      description: "Led architectural redesign of critical response processing, reducing user processing time from 20 minutes to 30 seconds through advanced TypeScript techniques and strategic system overhaul.",
      achievements: [
        "Developed LinkedIn integration system with real-time synchronization using BullMQ job queuing",
        "Implemented real-time processing to replace batch processing, enhancing error handling",
        "Collaborated on end-to-end management of Valley worker processes and GraphQL API",
        "Utilized Slack API and GitHub API to seamlessly integrate developer tools"
      ],
      technologies: ["AWS", "TypeScript", "Redis", "PostgreSQL", "MySQL"]
    },
    {
      title: "Lead Engineer",
      company: "Coefficient", 
      duration: "Nov 2023 - Dec 2024",
      type: "Leadership",
      description: "Led the setup of the Coefficient project to improve the software development life cycle (SDLC), defining tasks and providing oversight throughout.",
      achievements: [
        "Implemented rich text formatting on Slack and developed the Priority Algorithm",
        "Architected robust serverless structure with microtenancy functionalities",
        "Spearheaded two Dev Lab initiatives, demonstrating leadership in microservices design"
      ],
      technologies: ["TypeScript", "Slack API", "Git", "REST API"]
    },
    {
      title: "Full Stack Engineer",
      company: "Autinerary",
      duration: "Dec 2022 - Jan 2024", 
      type: "Full-time",
      description: "Contributed to the re-development of the company website and collaborated on features including SibChat, their flagship product.",
      achievements: [
        "Utilized AWS S3 Bucket and Postgres to develop a ServiceHub platform for autism spectrum individuals",
        "Deployed website using AWS Amplify and organization database to RDS",
        "Led backend engineering to deliver Storbloc's MVP in two months"
      ],
      technologies: ["AWS", "Node.js", "PostgreSQL", "Postman"]
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Current": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Contract": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Leadership": return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <section id="experience" className="py-20">
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
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building scalable systems and leading engineering excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background shadow-lg" />

                {/* Content Card */}
                <Card className="ml-16 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg border-border/50">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Building2 className="w-5 h-5 text-primary" />
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-foreground">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * i }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection