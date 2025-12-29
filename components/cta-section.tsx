"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Store, Bike } from "lucide-react"

export function CTASection(): React.ReactElement {
  const [email, setEmail] = React.useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
  }

  return (
    <section id="get-started" className="py-20 md:py-32 bg-gradient-to-b from-background to-beachside-teal/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our marketplace as a vendor or start ordering today.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card className="border-2 hover:border-beachside-teal transition-colors">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-beachside-teal/10">
                  <Bike className="h-6 w-6 text-beachside-teal" />
                </div>
                <CardTitle>Mobile Beach Vendor</CardTitle>
                <CardDescription>
                  Are you a sand sprinter? Join our platform and reach more customers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <a href="/partners/mobile">
                    Sign Up as Vendor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-beachside-teal transition-colors">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-beachside-ocean/10">
                  <Store className="h-6 w-6 text-beachside-ocean" />
                </div>
                <CardTitle>Off-Beach Merchant</CardTitle>
                <CardDescription>
                  Extend your reach to the beach. Partner with us for delivery.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="secondary" asChild>
                  <a href="/partners/merchant">
                    Become a Partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-beachside-teal text-white border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-white">Stay Updated</CardTitle>
              <CardDescription className="text-white/80">
                Get notified when we launch in your area.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white text-foreground"
                />
                <Button type="submit" variant="secondary" size="lg">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
