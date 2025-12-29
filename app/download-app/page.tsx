"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Smartphone, Download, Share2, Plus } from "lucide-react"

export default function DownloadAppPage(): React.ReactElement {
  const [isIOS, setIsIOS] = React.useState<boolean>(false)
  const [isAndroid, setIsAndroid] = React.useState<boolean>(false)
  const [isStandalone, setIsStandalone] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Detect platform
    const userAgent = window.navigator.userAgent.toLowerCase()
    const ios = /iphone|ipad|ipod/.test(userAgent)
    const android = /android/.test(userAgent)
    const standalone = window.matchMedia("(display-mode: standalone)").matches || 
                      (window.navigator as any).standalone === true

    setIsIOS(ios)
    setIsAndroid(android)
    setIsStandalone(standalone)

    // Listen for the beforeinstallprompt event (Android)
    const handleBeforeInstallPrompt = (e: Event): void => {
      e.preventDefault()
      ;(window as any).deferredPrompt = e
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = (): void => {
    // Trigger PWA install prompt if available
    if ((window as any).deferredPrompt) {
      (window as any).deferredPrompt.prompt()
      ;(window as any).deferredPrompt.userChoice.then(() => {
        ;(window as any).deferredPrompt = null
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Install <span className="text-beachside-teal">Beachside</span> App
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Add Beachside to your home screen for quick access to beach vendors and your favorite treats.
            </p>
          </motion.div>

          {isStandalone ? (
            <Card className="max-w-2xl mx-auto mb-8 border-beachside-teal">
              <CardHeader>
                <CardTitle className="text-center">App Already Installed!</CardTitle>
                <CardDescription className="text-center">
                  You already have Beachside installed on your device.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild>
                  <Link href="/">Go to App</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {/* iOS Instructions */}
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-beachside-teal/10">
                    <Smartphone className="h-6 w-6 text-beachside-teal" />
                  </div>
                  <CardTitle>iPhone / iPad</CardTitle>
                  <CardDescription>
                    Install Beachside on your iOS device
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    <li>Open Safari browser (Chrome won't work)</li>
                    <li>Tap the <Share2 className="inline h-4 w-4" /> Share button at the bottom</li>
                    <li>Scroll down and tap <Plus className="inline h-4 w-4" /> "Add to Home Screen"</li>
                    <li>Tap "Add" to confirm</li>
                    <li>The Beachside icon will appear on your home screen</li>
                  </ol>
                  {isIOS && (
                    <Button className="w-full" asChild>
                      <Link href="/">Open in Safari</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Android Instructions */}
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-beachside-ocean/10">
                    <Download className="h-6 w-6 text-beachside-ocean" />
                  </div>
                  <CardTitle>Android</CardTitle>
                  <CardDescription>
                    Install Beachside on your Android device
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    <li>Open Chrome browser</li>
                    <li>Tap the menu (three dots) in the top right</li>
                    <li>Tap "Install app" or "Add to Home screen"</li>
                    <li>Tap "Install" to confirm</li>
                    <li>The Beachside icon will appear on your home screen</li>
                  </ol>
                  {isAndroid && (
                    <Button className="w-full" onClick={handleInstallClick}>
                      Install Now
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Desktop Instructions */}
          <Card className="max-w-2xl mx-auto mt-8">
            <CardHeader>
              <CardTitle className="text-center">Desktop / Laptop</CardTitle>
              <CardDescription className="text-center">
                Install Beachside on your computer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-sm mb-6">
                <li>Click the install icon in your browser's address bar (Chrome, Edge, or Safari)</li>
                <li>Or use the browser menu: Chrome/Edge → "Install Beachside..." or Safari → "Add to Dock"</li>
                <li>The app will open in its own window</li>
              </ol>
              <div className="text-center">
                <Button onClick={handleInstallClick}>
                  Install App
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

