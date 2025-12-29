"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  MapPin, 
  Smartphone, 
  ShoppingBag, 
  Zap, 
  Shield, 
  Users 
} from "lucide-react"

interface Feature {
  icon: React.ReactElement
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <MapPin className="h-10 w-10 text-beachside-teal" />,
    title: "Hyperlocal Delivery",
    description: "Order from your beach site, and pick up at the waters edge.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-beachside-teal" />,
    title: "Real-Time Tracking",
    description: "Track your vendor's location in real-time. Know exactly when to grab your order.",
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-beachside-teal" />,
    title: "Local Vendors",
    description: "Support independent beach vendors and local merchants. Fresh, quality products.",
  },
  {
    icon: <Zap className="h-10 w-10 text-beachside-teal" />,
    title: "Lightning Fast",
    description: "Optimized for beach logistics. Quick delivery through sand and surf.",
  },
  {
    icon: <Shield className="h-10 w-10 text-beachside-teal" />,
    title: "Secure Payments",
    description: "Safe and secure payment processing. Multiple payment options available.",
  },
  {
    icon: <Users className="h-10 w-10 text-beachside-teal" />,
    title: "Community Driven",
    description: "Built for beach communities. Connecting locals and visitors alike.",
  },
]

export function FeaturesSection(): React.ReactElement {
  return (
    <section id="features" className="relative py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Why Choose <span className="text-beachside-teal">Beachside</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            We solve the hyperlocal logistics paradox with innovative technology
            and a community-first approach.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature: Feature, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:border-beachside-teal/50">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

