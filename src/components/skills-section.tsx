"use client"

import { motion } from "framer-motion"
import { Cloud, Code, Database, Server } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AWS & Cloud Services",
      icon: Cloud,
      skills: [
        "AWS Lambda",
        "AWS Step Functions", 
        "Amazon S3",
        "DynamoDB",
        "AWS Amplify",
        "Amazon RDS",
        "CloudFormation",
        "EC2"
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        "TypeScript",
        "Node.js",
        "Golang",
        "Python",
        "JavaScript",
        "SQL"
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        "PostgreSQL",
        "Redis",
        "MySQL", 
        "BigQuery",
        "MongoDB",
        "Kubernetes",
        "Docker",
        "Git"
      ]
    }
  ]

  return (
    <section id="skills" className="py-20">
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
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mastering the art of backend engineering and cloud architecture
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-xl lg:text-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full hover:from-primary/20 hover:to-accent/20 hover:border-primary/40 transition-all duration-300 cursor-default"
                      >
                        <span className="text-foreground font-medium">{skill}</span>
                      </motion.div>
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

export default SkillsSection