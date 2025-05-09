"use client"

import React from "react"

interface MobileMenuProps {
    menuOpen: boolean
    setMenuOpen: (value: boolean) => void
}

export default function MobileMenu({ menuOpen, setMenuOpen }: MobileMenuProps) {
    return (
        <div
            className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
        >
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <a
                href={typeof window !== "undefined" && window.location.pathname !== "/" ? "/#home" : "#home"}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                onClick={() => setMenuOpen(false)}
            >
                Home
            </a>
            <a
                href={typeof window !== "undefined" && window.location.pathname !== "/" ? "/#about" : "#about"}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                onClick={() => setMenuOpen(false)}
            >
                About
            </a>
            <a
                href={typeof window !== "undefined" && window.location.pathname !== "/" ? "/#products" : "#products"}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                onClick={() => setMenuOpen(false)}
            >
                Products
            </a>
            <a
                href="/shop"
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                onClick={() => setMenuOpen(false)}
            >
                Shop
            </a>
            <a
                href={typeof window !== "undefined" && window.location.pathname !== "/" ? "/#contact" : "#contact"}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                onClick={() => setMenuOpen(false)}
            >
                Contact
            </a>
        </div>
    )
}