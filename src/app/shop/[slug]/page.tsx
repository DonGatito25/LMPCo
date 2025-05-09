"use client"

import { useState } from "react"
import { useParams, notFound } from "next/navigation"
import Navbar from "../../../components/navbar"
import MobileMenu from "../../../components/mobile-menu"
import { getProductBySlug, getRelatedProducts } from "../../../lib/products"
import Link from "next/link"
import { useCart } from "../../../context/cart-context"
import { ChevronRight, Minus, Plus, ShoppingCart } from "lucide-react"
import React from "react"

export default function ProductPage() {
    const params = useParams()
    const slug = params?.slug as string
    const [menuOpen, setMenuOpen] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCart()

    // Get product data
    const product = getProductBySlug(slug)

    // Handle invalid product slug
    if (!product) {
        notFound()
    }

    // Get related products
    const relatedProducts = getRelatedProducts(product)

    // Handle quantity changes
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    // Handle add to cart
    const handleAddToCart = () => {
        addToCart(product, quantity)
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <main className="pt-20 pb-16">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Breadcrumbs */}
                    <nav className="py-4">
                        <ol className="flex text-sm text-gray-400">
                            <li className="flex items-center">
                                <Link href="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                                <ChevronRight className="h-4 w-4 mx-2" />
                            </li>
                            <li className="flex items-center">
                                <Link href="/shop" className="hover:text-white transition-colors">
                                    Shop
                                </Link>
                                <ChevronRight className="h-4 w-4 mx-2" />
                            </li>
                            <li className="flex items-center">
                                <Link href={`/shop?category=${product.category}`} className="hover:text-white transition-colors">
                                    {product.category}
                                </Link>
                                <ChevronRight className="h-4 w-4 mx-2" />
                            </li>
                            <li className="text-white">{product.name}</li>
                        </ol>
                    </nav>

                    {/* Product details */}
                    <div className="grid md:grid-cols-2 gap-12 mt-6">
                        {/* Product image */}
                        <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl overflow-hidden flex items-center justify-center p-8 border border-white/10">
                            <div className="w-48 h-48 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <span className="text-8xl">{product.emoji}</span>
                            </div>
                        </div>

                        {/* Product info */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                            <div className="flex items-center mb-6">
                                <span className="text-2xl font-bold text-blue-400">${product.price.toLocaleString()}</span>
                                <span className="ml-4 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                                    {product.category}
                                </span>
                            </div>

                            <p className="text-gray-300 mb-8">{product.description}</p>

                            {/* Quantity selector */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
                                <div className="flex items-center">
                                    <button
                                        onClick={decreaseQuantity}
                                        className="p-2 border border-white/20 rounded-l-md hover:bg-white/10 transition-colors"
                                        aria-label="Decrease quantity"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="px-4 py-2 border-t border-b border-white/20 min-w-[3rem] text-center">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={increaseQuantity}
                                        className="p-2 border border-white/20 rounded-r-md hover:bg-white/10 transition-colors"
                                        aria-label="Increase quantity"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Add to cart button */}
                            <button
                                onClick={handleAddToCart}
                                className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-lg hover:shadow-blue-500/20 flex items-center justify-center"
                            >
                                <ShoppingCart className="mr-2 h-5 w-5" />
                                Add to Cart
                            </button>

                            {/* Features */}
                            <div className="mt-12">
                                <h2 className="text-xl font-bold mb-4">Key Features</h2>
                                <ul className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-blue-400 mr-2">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Specifications */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
                        <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                                {Object.entries(product.specs).map(([key, value], index) => (
                                    <div key={index} className="p-4 bg-white/5 rounded-lg">
                                        <h3 className="text-sm font-medium text-gray-400 mb-1">{key}</h3>
                                        <p className="text-lg font-semibold">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Related products */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-20">
                            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {relatedProducts.map((relatedProduct) => (
                                    <div
                                        key={relatedProduct.id}
                                        className="bg-white/5 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30"
                                    >
                                        <Link href={`/shop/${relatedProduct.slug}`} className="block">
                                            <div className="h-48 bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center">
                                                <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center">
                                                    <span className="text-4xl">{relatedProduct.emoji}</span>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="p-6">
                                            <Link href={`/shop/${relatedProduct.slug}`}>
                                                <h3 className="text-xl font-bold mb-2 hover:text-blue-400 transition-colors">
                                                    {relatedProduct.name}
                                                </h3>
                                            </Link>
                                            <p className="text-gray-400 mb-4 line-clamp-2">{relatedProduct.description}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xl font-bold text-blue-400">
                                                    ${relatedProduct.price.toLocaleString()}
                                                </span>
                                                <button
                                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                                                    onClick={() => addToCart(relatedProduct, 1)}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
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