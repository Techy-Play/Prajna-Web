"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Particles } from "@/components/magicui/particles"
import { SiteHeader } from "@/components/site-header"

export default function ParticlesDemo() {
  const { resolvedTheme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
  }, [resolvedTheme])

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="container py-8">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
          <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none">
            Particles
          </span>
          <Particles className="absolute inset-0 z-0" quantity={100} ease={80} color={color} refresh />
        </div>
      </div>
    </div>
  )
}

