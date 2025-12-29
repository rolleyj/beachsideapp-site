"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, MapPin } from "lucide-react"

export function HeroSection(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-beachside-teal/10 via-background to-background py-20 md:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur"
          >
            <Sparkles className="mr-2 h-4 w-4 text-beachside-teal" />
            <span>Hyperlocal Beach Delivery Marketplace</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Beach Treats,{" "}
            <span className="text-beachside-teal">Delivered to Your Sand</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl"
          >
            Connect with local beach vendors and off-beach merchants. Locate beach vendors and order your favorite cold treats and drinks from your beach chair or towel. You will still need to pick them up!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button size="lg" asChild className="text-base flex items-center justify-center w-fit">
              <Link href="/download-app" className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5" />
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base w-fit">
              <Link href="#features">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-beachside-teal/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-beachside-ocean/10 blur-3xl" />
      </div>
    </section>
  )
}

