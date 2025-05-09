import React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { CartProvider } from "../context/cart-context"
import Cart from "../components/cart"
import CartButton from "../components/cart-button"

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
    title: "L.M.P. Co. | Legacy of Modern Progress",
    description: "Innovating the Tomorrow - Legacy of Modern Progress Corporation",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${spaceGrotesk.variable} font-sans bg-[#0a0a0a] text-gray-100`}>
                <CartProvider>
                    {children}
                    <CartButton />
                    <Cart />
                </CartProvider>
            </body>
        </html>
    )
}
