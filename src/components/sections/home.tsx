import React from "react"

export default function Home() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Welcome to{" "}
                    <span className="font-mono">
                        L.M.P.<span className="text-blue-500"> Co.</span>
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Legacy of Modern Progress Corporation - Pioneering the future of technology
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#products"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-lg hover:shadow-blue-500/20"
                    >
                        Our Products
                    </a>
                    <a
                        href="/shop"
                        className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/20 rounded-md transition-colors"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </section>
    )
}
