"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Particles } from "@/components/magicui/particles"
import { ScrollProgress } from "@/components/magicui/scroll-progress"
import Link from "next/link"
import { MagicCard } from "@/components/magicui/magic-card"
import { Button } from "@/components/ui/button"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import { Zap } from "lucide-react"
// Fix the import - change from named import to default import
import HeroVideoDialog from "@/components/magicui/hero-video-dialog"

export default function GetStarted() {
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

  return (
    <div className="min-h-screen flex flex-col ">
      <SiteHeader />
      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] px-4 sm:px-6 lg:px-8">
        <div className="container relative z-10 mx-auto max-w-7xl flex items-center min-h-[100dvh]">
          <motion.div className="mx-auto max-w-4xl text-center px-4">
            <div className="mb-4 flex items-center justify-center">
              <AnimatedGradientText variant="large">
                Get Started with Prajna AI
              </AnimatedGradientText>
            </div>
            <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your journey to AI-powered insights begins here
            </h1>
            <div className="flex flex-wrap justify-center pt-10 gap-8">
              <Link href="/signup">
                <Button size="lg" className="gap-2 px-6">
                  <Zap className="h-4 w-4" />
                  Create Account
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg" className="px-6">Login</Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <Particles 
          className="absolute inset-0 z-0 pointer-events-none" 
          quantity={50} 
          ease={10} 
          color={color} 
          refresh={false}
        />
      </section>

      {/* Video Demo Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">See Prajna AI in Action</h2>
            <p className="text-muted-foreground">Watch this quick demo to understand how our platform works</p>
          </motion.div>
          
          <motion.div
            className="mx-auto max-w-4xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { delay: 0.2 } },
            }}
          >
            <MagicCard className="overflow-hidden">
              <div className="relative p-1">
                <HeroVideoDialog
                  className="block dark:hidden"
                  animationStyle="top-in-bottom-out"
                  videoSrc="https://www.youtube.com/embed/ejr2oBFL73Q?si=yeYflXDSJnm8-2jj"
                  thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                  thumbnailAlt="Prajna AI Demo Video"
                />
                <HeroVideoDialog
                  className="hidden dark:block"
                  animationStyle="top-in-bottom-out"
                  videoSrc="https://www.youtube.com/embed/ejr2oBFL73Q?si=yeYflXDSJnm8-2jj"
                  thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                  thumbnailAlt="Prajna AI Demo Video"
                />
              </div>
            </MagicCard>
          </motion.div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="relative border-t bg-muted/40 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Follow These Simple Steps</h2>
            <p className="text-muted-foreground">Getting started with Prajna AI is quick and easy</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { delay: 0.2 } },
              }}
            >
              <MagicCard className="h-full">
                <div className="p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-4 inline-flex mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">1. Create Account</h3>
                  <p className="text-muted-foreground">Sign up for a Prajna AI account to access our powerful AI platform.</p>
                </div>
              </MagicCard>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { delay: 0.4 } },
              }}
            >
              <MagicCard className="h-full">
                <div className="p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-4 inline-flex mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">2. Configure</h3>
                  <p className="text-muted-foreground">Set up your AI models and customize the platform to your needs.</p>
                </div>
              </MagicCard>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { delay: 0.6 } },
              }}
            >
              <MagicCard className="h-full">
                <div className="p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-4 inline-flex mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">3. Launch</h3>
                  <p className="text-muted-foreground">Start using Prajna AI to analyze data and generate meaningful insights.</p>
                </div>
              </MagicCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >

            <h2 className="text-3xl font-bold mb-2 sm:text-4xl">Ready to get started?</h2>
            <p className="text-xl mb-6 text-muted-foreground">Join thousands of businesses already using Prajna AI</p>
            <Link href="/signup">
              <Button size="lg" className="gap-2 px-6">
                <Zap className="h-4 w-4" />
                Create Free Account
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/40 py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-6">
              <h5 className="font-bold text-xl mb-4">Prajna AI</h5>
              <p className="text-muted-foreground">Transforming businesses through AI-powered insights.</p>
            </div>
            <div className="md:col-span-3">
              <h5 className="font-bold text-xl mb-4">Links</h5>
              <ul className="space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
                <li><Link href="/getstarted" className="text-muted-foreground hover:text-foreground">Get Started</Link></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h5 className="font-bold text-xl mb-4">Connect</h5>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-6 text-center">
            <p className="text-sm text-muted-foreground">&copy; 2025 Prajna AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Background Particles */}

    </div>
  )
}