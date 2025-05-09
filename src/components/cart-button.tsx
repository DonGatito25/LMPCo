"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "../context/cart-context"
import React from "react"

export default function CartButton() {
    const { toggleCart, totalItems } = useCart()

    return (
        <button
            onClick={toggleCart}
            className="fixed bottom-6 right-6 z-30 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center"
            aria-label="Open cart"
        >
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    {totalItems}
                </span>
            )}
        </button>
    )
}
