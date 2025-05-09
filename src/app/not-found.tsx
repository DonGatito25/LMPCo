import Link from "next/link"
import React from "react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
            <div className="max-w-md mx-auto px-4 py-16 text-center">
                <h1 className="text-6xl font-bold mb-6">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-lg hover:shadow-blue-500/20 inline-block"
                >
                    Return Home
                </Link>
            </div>
        </div>
    )
}