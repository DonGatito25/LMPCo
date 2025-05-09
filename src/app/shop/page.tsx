"use client"

import Navbar from "../../components/navbar"
import { useState } from "react"
import MobileMenu from "../../components/mobile-menu"
import { products, getAllCategories } from "../../lib/products"
import Link from "next/link"
import { useCart } from "../../context/cart-context"
import React from "react"

export default function ShopPage() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeCategory, setActiveCategory] = useState<string | null>(null)
    const { addToCart } = useCart()

    const categories = ["All", ...getAllCategories()]

    const filteredProducts =
        activeCategory && activeCategory !== "All"
            ? products.filter((product) => product.category === activeCategory)
            : products

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <main className="pt-20 pb-16">
                <div className="max-w-6xl mx-auto px-4">
                    <header className="py-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Our Products</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Discover cutting-edge technology from Legacy of Modern Progress Corporation
                        </p>
                    </header>

                    <div className="mb-12">
                        <div className="flex flex-wrap gap-4 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category === "All" ? null : category)}
                                    className={`px-4 py-2 rounded-md transition-colors ${(category === "All" && !activeCategory) || category === activeCategory
                                        ? "bg-blue-600 text-white"
                                        : "bg-white/5 text-white hover:bg-white/10"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white/5 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30"
                            >
                                <Link href={`/shop/${product.slug}`} className="block">
                                    <div className="h-64 bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-blue-500/20 rounded-full flex items-center justify-center">
                                            <span className="text-5xl">{product.emoji}</span>
                                        </div>
                                    </div>
                                </Link>
                                <div className="p-6">
                                    <Link href={`/shop/${product.slug}`} className="block">
                                        <h3 className="text-xl font-bold mb-2 hover:text-blue-400 transition-colors">{product.name}</h3>
                                    </Link>
                                    <p className="text-gray-400 mb-4 line-clamp-2">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-blue-400">${product.price.toLocaleString()}</span>
                                        <button
                                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                                            onClick={() => addToCart(product, 1)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="bg-black/50 border-t border-white/10 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
                    <p>© 2025 Legacy of Modern Progress Corporation. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
