"use client"

import { useEffect } from "react"
import React from "react"

interface NavbarProps {
    menuOpen: boolean
    setMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void
}

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="/" className="font-mono text-xl font-bold text-white">
                        L.M.P.<span className="text-blue-500"> Co.</span>
                    </a>
                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex items-center justify-center"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        &#9776;
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href={typeof window !== "undefined" && window.location.pathname !== "/" ? "/#home" : "#home"}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href={typeof window !== "undefined" && window.location.pathname !== "/" ? "/#about" : "#about"}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            About
                        </a>
                        <a
                            href={typeof window !== "undefined" && window.location.pathname !== "/" ? "/#products" : "#products"}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Products
                        </a>
                        <a href="/shop" className="text-gray-300 hover:text-white transition-colors">
                            Shop
                        </a>
                        <a
                            href={typeof window !== "undefined" && window.location.pathname !== "/" ? "/#contact" : "#contact"}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}