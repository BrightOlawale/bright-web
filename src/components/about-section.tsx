"use client"

import { motion } from "framer-motion"
import { Zap, Cloud, Users, User, GraduationCap, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const AboutSection = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Dramatically improve system performance through strategic architectural redesign and optimization techniques"
    },
    {
      icon: Cloud,
      title: "AWS Expert",
      description: "Extensive experience with Lambda, Step Functions, S3, DynamoDB, and serverless architectures"
    },
    {
      icon: Users,
      title: "Leadership & Mentoring",
      description: "Lead engineering teams, spearhead initiatives, and mentor the next generation of backend engineers"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/20">
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
            <span className="gradient-text">The Guy Behind The Code</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building the future with code, one system at a time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Turning Complex Problems into Elegant Solutions
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As a Backend Engineer at <strong className="text-foreground">BFREE Africa</strong> and 
                previously at <strong className="text-foreground">Valley</strong>, I specialize in 
                architecting high-performance, scalable systems that handle millions of data points 
                with precision and speed.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:bg-card/80 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Journey */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">My Journey</h4>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a passionate Backend Engineer at <strong className="text-foreground">BFREE Africa</strong>, 
                  I build production systems that serve thousands of users. I'm deeply passionate about 
                  <strong className="text-primary"> Fintech</strong>, <strong className="text-accent"> AI Integration</strong>, 
                  and creating robust <strong className="text-primary"> SaaS solutions</strong> that make a real difference.
                </p>
                <p>
                  Beyond coding, I have a heart for <strong className="text-foreground">teaching and mentoring 👨‍🏫</strong>. 
                  I love relating with kids and teens, helping them discover their potential in 
                  <strong className="text-primary"> technology</strong> and guiding them in 
                  <strong className="text-accent"> faith</strong>. There's something incredibly fulfilling about 
                  watching young minds light up when they understand a new concept or find their purpose.
                </p>
                <p>
                  When I'm not architecting scalable systems or teaching, you'll find me contributing to the developer 
                  community through <strong className="text-foreground">technical writing on Medium</strong> and 
                  <strong className="text-foreground"> open-source contributions on GitHub</strong>. I also enjoy 
                  🎾 tennis, ⚽ football, and ✈️ traveling to explore new cultures and learn from different perspectives.
                </p>
                <p>
                  Guided by faith and driven by purpose - <em className="text-accent">"For by thee I run through a troop, 
                  and by my God I leap over a wall"</em> 🙏 - I approach every challenge as an opportunity to grow 
                  and make a meaningful impact through technology and mentorship.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual/Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid gap-6">
              {/* Profile Card */}
              <Card className="gradient-border bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50">
                    <Image
                      src="/BrightPP.jpg"
                      alt="Bright Olawale"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="-mt-1">
                    <CardTitle className="gradient-text leading-[1.3]">Backend Engineer</CardTitle>
                    <CardDescription>BFREE Africa</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Fintech</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">AI Integration</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">SaaS</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Cloud Architecture</span>
                  </div>
                </CardContent>
              </Card>

              {/* Values Card */}
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Teaching & Mentoring</CardTitle>
                    <CardDescription>Empowering the next generation</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Passionate about guiding kids & teens in tech and faith
                  </p>
                </CardContent>
              </Card>

              {/* Impact Card */}
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Mission</CardTitle>
                    <CardDescription>Technology with Purpose</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Building scalable systems that make a meaningful impact
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Floating Decoration */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection