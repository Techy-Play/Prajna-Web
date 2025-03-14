"use client"

import { MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { AuroraText } from "@/components/magicui/aurora-text"
import Link from "next/link"

export function SiteHeader() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [themeChangeAnimation, setThemeChangeAnimation] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = () => {
    setThemeChangeAnimation(true)
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light")
      setTimeout(() => setThemeChangeAnimation(false), 500)
    }, 200)
  }

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <AnimatePresence>
        {themeChangeAnimation && (
          <motion.div
            className="absolute inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              background: resolvedTheme === 'dark' 
                ? 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)'
                : 'radial-gradient(circle at center, rgba(0,0,0,0.15) 0%, rgba(255,255,255,0) 70%)'
            }}
          />
        )}
      </AnimatePresence>

      <div className="container flex h-14 items-center px-4 md:px-6">
        <motion.div 
          className="mr-4 flex"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="text-xl font-bold">
              <AuroraText>Prajna</AuroraText>
            </span>
          </Link>
        </motion.div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {[
              { name: "Features", href: "/#features" },
              { name: "Use Cases", href: "/#use-cases" },
              { name: "FAQ", href: "/#faq" }
            ].map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavigationMenuItem>
                  <Link href={item.href} className={navigationMenuTriggerStyle()}>
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              </motion.div>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleThemeChange}
              className="relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
            <Link href="/getstarted">
              <Button>Request Demo</Button>
            </Link>
          </motion.div>

          <Button
            variant="ghost"
            size="icon"
            className="ml-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="md:hidden">
            <nav className="border-t px-4 py-2">
              <motion.ul className="space-y-2">
                {[
                  { name: "Features", href: "/#features" },
                  { name: "Use Cases", href: "/#use-cases" },
                  { name: "FAQ", href: "/#faq" }
                ].map((item) => (
                  <motion.li 
                    key={item.name}
                    variants={{ closed: { opacity: 0, x: -10 }, open: { opacity: 1, x: 0 } }}
                  >
                    <Link 
                      href={item.href}
                      className="block rounded-lg px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li variants={{ closed: { opacity: 0, x: -10 }, open: { opacity: 1, x: 0 } }}>
                  <Link 
                    href="/getstarted"
                    className="block rounded-lg px-4 py-2 text-sm hover:bg-muted" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Request Demo
                  </Link>
                </motion.li>
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

