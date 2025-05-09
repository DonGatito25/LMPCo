"use client"

import { useCart } from "../context/cart-context"
import { useEffect, useRef } from "react"
import { X, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Cart() {
    const { items, isCartOpen, closeCart, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart()

    const cartRef = useRef<HTMLDivElement>(null)

    // Close cart when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
                closeCart()
            }
        }

        if (isCartOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isCartOpen, closeCart])

    // Prevent scrolling when cart is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isCartOpen])

    if (!isCartOpen) return null

    return (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
            <div
                ref={cartRef}
                className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-white/10 shadow-xl transition-all"
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                        <h2 className="text-xl font-bold flex items-center">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Cart ({totalItems})
                        </h2>
                        <button
                            onClick={closeCart}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            aria-label="Close cart"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Cart items */}
                    <div className="flex-1 overflow-y-auto py-4 px-4">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                                <ShoppingCart className="h-16 w-16 mb-4 opacity-20" />
                                <p className="text-lg mb-4">Your cart is empty</p>
                                <button
                                    onClick={closeCart}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            <ul className="space-y-4">
                                {items.map((item) => (
                                    <li key={item.product.id} className="flex border-b border-white/10 pb-4">
                                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-white/5 mr-4 flex items-center justify-center">
                                            <span className="text-3xl">{item.product.emoji}</span>
                                        </div>

                                        <div className="flex flex-1 flex-col">
                                            <div className="flex justify-between text-base font-medium">
                                                <h3>
                                                    <Link
                                                        href={`/shop/${item.product.slug}`}
                                                        onClick={closeCart}
                                                        className="hover:text-blue-400 transition-colors"
                                                    >
                                                        {item.product.name}
                                                    </Link>
                                                </h3>
                                                <p className="ml-4 text-blue-400">${item.product.price.toLocaleString()}</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center border border-white/20 rounded-md">
                                                    <button
                                                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-white/10 transition-colors"
                                                        aria-label="Decrease quantity"
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </button>
                                                    <span className="px-2 py-1 min-w-[2rem] text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-white/10 transition-colors"
                                                        aria-label="Increase quantity"
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => removeFromCart(item.product.id)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                    aria-label="Remove item"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="border-t border-white/10 p-4 space-y-4">
                            <div className="flex justify-between text-base font-medium">
                                <p>Subtotal</p>
                                <p>${totalPrice.toLocaleString()}</p>
                            </div>
                            <p className="text-sm text-gray-400">Shipping and taxes calculated at checkout</p>
                            <div className="mt-6">
                                <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-lg hover:shadow-blue-500/20">
                                    Checkout
                                </button>
                            </div>
                            <div className="mt-2 flex justify-center text-center text-sm text-gray-400">
                                <button type="button" className="hover:text-white transition-colors" onClick={closeCart}>
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
