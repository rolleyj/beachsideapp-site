"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-16 items-center justify-between">
        {/* Mobile Menu Button - Left side */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Logo - Centered */}
        <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <span className="text-2xl font-bold text-beachside-teal tracking-tight">
            Beachside
          </span>
        </Link>

        {/* Desktop Navigation - Right side */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="#features"
            className="transition-colors hover:text-beachside-teal"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="transition-colors hover:text-beachside-teal"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-beachside-teal"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/download-app">Get Started</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden border-t",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="container flex flex-col space-y-4 py-4">
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-beachside-teal"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium transition-colors hover:text-beachside-teal"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-beachside-teal"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex flex-col space-y-2 pt-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="#get-started">Get Started</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
