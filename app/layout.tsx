import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Updated fonts for ChimeSense - Inter for body, Orbitron for headings
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
})

const orbitron = Orbitron({
	subsets: ["latin"],
	variable: "--font-orbitron",
	weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
	title: "ChimeSense - Smart Doorbells & Home Entry Tech",
	description: "Intelligence at Your Doorstep. Smart doorbells with real-time vision and AI motion alerts.",
	referrer: 'unsafe-url',
	keywords: ["smart doorbell", "home security", "AI motion detection", "video doorbell", "smart home"],
	// Next.js automatically uses icon.svg from app directory
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="dark">
			<body className={`${inter.className} ${orbitron.variable} font-sans antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
