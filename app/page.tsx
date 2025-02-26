"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import {
  BarChart3,
  Brain,
  Database,
  LineChart,
  Lock,
  MessageSquare,
  Shield,
  Timer,
  Zap,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SiteHeader } from "@/components/site-header"
import { Particles } from "@/components/magicui/particles"
import { ScrollProgress } from "@/components/magicui/scroll-progress"
import { MagicCard } from "@/components/magicui/magic-card"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import Link from "next/link"

export default function Home() {
  const { resolvedTheme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
  }, [resolvedTheme])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  const features = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Natural Conversations",
      description: "Ask questions in plain English - no coding required",
    },
    {
      icon: <Timer className="h-8 w-8" />,
      title: "Instant Insights",
      description: "Get real-time data analysis and business intelligence",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Multiple Data Sources",
      description: "Connect to any database, API, or spreadsheet seamlessly",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Private deployment with confidential data protection",
    },
  ]

  const useCases = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Business Executives",
      description: "Get instant insights for data-driven decision making",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Data Analysts",
      description: "Automate analysis and save hours of manual work",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "E-Commerce",
      description: "Analyze customer trends and optimize sales",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "IT & Security",
      description: "Monitor systems and detect anomalies automatically",
    },
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] px-4 sm:px-6 lg:px-8">
        <div className="container relative z-10 mx-auto max-w-7xl flex items-center min-h-[100dvh]">
          <motion.div className="mx-auto max-w-4xl text-center px-4">
            <div className="mb-4 flex items-center justify-center">
              <AnimatedGradientText variant="large">
                Introducing Prajna AI
              </AnimatedGradientText>
            </div>
            <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Your AI Business
              <br />
              Intelligence Assistant
            </h1>
            <p className="mb-8 text-base text-muted-foreground sm:text-lg md:text-xl">
              Transform complex data into actionable insights through natural conversations. No coding required, just
              ask questions in plain English.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/working">
                <Button size="lg" className="gap-2">
                  <Zap className="h-4 w-4" />
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <Particles className="absolute inset-0 z-0" quantity={800} ease={10} color={color} refresh={false} />
      </section>
      {/* Features Section */}
      <section id="features" className="relative border-t bg-muted/40 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Why Choose Prajna?</h2>
            <p className="text-muted-foreground">
              Unlike general AI assistants, Prajna is specifically designed for business intelligence
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2 },
                  },
                }}
              >
                <MagicCard className="h-full">
                  <div className="p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">{feature.icon}</div>
                    <h3 className="mb-2 font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Who Uses Prajna?</h2>
            <p className="text-muted-foreground">Trusted by business leaders and analysts across industries</p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2 },
                  },
                }}
              >
                <MagicCard className="h-full">
                  <div className="p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">{useCase.icon}</div>
                    <h3 className="mb-2 font-semibold">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-t bg-muted/40 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about Prajna</p>
          </motion.div>
          <motion.div
            className="mx-auto max-w-3xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <Link href="/working" className="w-full text-left">
                    How is Prajna different from ChatGPT?
                  </Link>
                </AccordionTrigger>
                <AccordionContent>
                  Unlike ChatGPT, Prajna is specifically designed for business intelligence. It can connect to your
                  private databases, handle confidential data securely, and provide real-time insights based on your
                  actual business data. ChatGPT is limited to public knowledge and cannot access your company&apos;s private
                  information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is my business data secure with Prajna?</AccordionTrigger>
                <AccordionContent>
                  Yes, Prajna takes security seriously. It can be deployed on your private servers or cloud
                  infrastructure, ensuring your data never leaves your control. All data processing is done within your
                  secure environment with enterprise-grade encryption and access controls.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What types of data sources can Prajna connect to?</AccordionTrigger>
                <AccordionContent>
                  Prajna can connect to various data sources including cloud databases (AWS, Google Cloud, Azure), local
                  databases (PostgreSQL, Oracle, MySQL), APIs, and spreadsheets. It&apos designed to work with your
                  existing data infrastructure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do I need technical skills to use Prajna?</AccordionTrigger>
                <AccordionContent>
                  No technical skills are required to use Prajna. You can simply ask questions in plain English, and
                  Prajna will provide insights from your data. The initial setup and integration with your data sources
                  will be handled by our technical team.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How long does it take to set up Prajna?</AccordionTrigger>
                <AccordionContent>
                  The setup time varies depending on your data infrastructure, but typically takes 1-2 weeks. This
                  includes connecting to your data sources, customizing the system to your needs, and training your team
                  on how to use Prajna effectively.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Join leading companies already using Prajna to make faster, data-driven decisions
            </p>
            <Link href="/working">
              <Button size="lg" className="gap-2">
                <Zap className="h-4 w-4" />
                Schedule a Demo
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

