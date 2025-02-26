"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Particles } from "@/components/magicui/particles"
import { ScrollProgress } from "@/components/magicui/scroll-progress"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import { TextReveal } from "@/components/magicui/text-reveal"
import Link from "next/link"
import { MagicCard } from "@/components/magicui/magic-card"
import { Button } from "@/components/ui/button"

export default function WorkInProgress() {
  const { resolvedTheme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
  }, [resolvedTheme])

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <ScrollProgress />

      {/* Work in Progress Section */}
      <section className="relative min-h-[100dvh] px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center px-4 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <AnimatedGradientText variant="large">
                Work in Progress
              </AnimatedGradientText>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Author Section */}
      <section className="relative min-h-[100dvh] px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center px-4 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <TextReveal 
              text="By Mr. Techy"
              className="text-3xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Under Construction Card */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <MagicCard className="p-8">
            <div className="space-y-6 text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                🚧 Site Under Development 🚧
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We&apos;re crafting something extraordinary! Our team is working diligently to create an innovative AI-powered 
                  business intelligence platform that will revolutionize how you interact with your data.
                </p>
                <p>
                  The platform will be launching soon with features like natural language querying, real-time analytics, 
                  and seamless data integration. Stay tuned for the public release!
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-4"
              >
                <Link href="/">
                  <Button variant="outline" className="rounded-full px-8">
                    Return Home
                  </Button>
                </Link>
              </motion.div>
            </div>
          </MagicCard>
        </div>
      </section>

      {/* Background Particles */}
      <Particles 
        className="fixed inset-0 z-0" 
        quantity={800} 
        ease={10} 
        color={color} 
        refresh={false}
        staticity={10}
        vx={0.5}
        vy={0.5}
      />
    </div>
  )
}