import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Beachside - Beach Treat Locator | Hyperlocal Beach Delivery",
  description: "Connect with local beach vendors and off-beach merchants. Locate beach vendors and order your favorite cold treats and drinks from your beach chair or towel. You will still need to pick them up!",
  keywords: ["beach delivery", "beach vendors", "hyperlocal marketplace", "beach treats", "food delivery"],
  authors: [{ name: "Beachside App" }],
  openGraph: {
    title: "Beachside - Beach Treat Locator",
    description: "Hyperlocal beach delivery marketplace connecting vendors and customers.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4A9B9B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Beachside" />
        <link rel="apple-touch-icon" href="/logo-compass.png" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
