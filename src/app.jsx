import { useState, useEffect } from "react"
import LoadingScreen from "./components/loading-screen.tsx"
import Navbar from "./components/navbar.tsx"
import MobileMenu from "./components/mobile-menu.tsx"
import Home from "./components/sections/home.tsx"
import About from "./components/sections/about.tsx"
import Products from "./components/sections/products.tsx"
import Contact from "./components/sections/contact.tsx"
import React from "react"

export default function App() {
    const [isLoaded, setIsLoaded] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const hasVisitedBefore = localStorage.getItem("hasVisitedBefore")

        if (!hasVisitedBefore) {
            setIsLoaded(false)
            localStorage.setItem("hasVisitedBefore", "true")
        }
    }, [])

    return (
        <>
            {
           !isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />
            }
            <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <About />
                <Products />
                <Contact />

                <footer className="bg-black/50 border-t border-white/10 py-8">
                    <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
                        <p>© 2025 Legacy of Modern Progress Corporation. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}
