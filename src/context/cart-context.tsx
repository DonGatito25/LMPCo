"use client"

import React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Product } from "../lib/products"

interface CartItem {
    product: Product
    quantity: number
}

interface CartContextType {
    items: CartItem[]
    addToCart: (product: Product, quantity: number) => void
    removeFromCart: (productId: string) => void
    updateQuantity: (productId: string, quantity: number) => void
    clearCart: () => void
    isCartOpen: boolean
    toggleCart: () => void
    closeCart: () => void
    totalItems: number
    totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isClient, setIsClient] = useState(false)

    // Initialize from localStorage once on client side
    useEffect(() => {
        setIsClient(true)
        const savedCart = localStorage.getItem("cart")
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart))
            } catch (e) {
                console.error("Failed to parse cart from localStorage", e)
            }
        }
    }, [])

    // Save to localStorage whenever cart changes
    useEffect(() => {
        if (isClient) {
            localStorage.setItem("cart", JSON.stringify(items))
        }
    }, [items, isClient])

    const addToCart = (product: Product, quantity: number) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.product.id === product.id)

            if (existingItem) {
                // Update quantity if item already exists
                return prevItems.map((item) =>
                    item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
                )
            } else {
                // Add new item
                return [...prevItems, { product, quantity }]
            }
        })

        // Open cart when adding items
        setIsCartOpen(true)
    }

    const removeFromCart = (productId: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId))
    }

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId)
            return
        }

        setItems((prevItems) => prevItems.map((item) => (item.product.id === productId ? { ...item, quantity } : item)))
    }

    const clearCart = () => {
        setItems([])
    }

    const toggleCart = () => {
        setIsCartOpen((prev) => !prev)
    }

    const closeCart = () => {
        setIsCartOpen(false)
    }

    // Calculate total items and price
    const totalItems = items.reduce((total, item) => total + item.quantity, 0)
    const totalPrice = items.reduce((total, item) => total + item.product.price * item.quantity, 0)

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                isCartOpen,
                toggleCart,
                closeCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}
