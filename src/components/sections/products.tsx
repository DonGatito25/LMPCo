import React from "react"

export default function Products() {
    return (
        <section id="products" className="min-h-screen py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Product 1 */}
                    <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30">
                        <div className="h-48 bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center">
                            <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <span className="text-4xl">⚡</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Quantum Processor</h3>
                            <p className="text-gray-400 mb-4">
                                Next-generation computing power with revolutionary quantum architecture.
                            </p>
                            <a href="/shop/quantum-processor" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                                Learn more <span className="ml-1">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30">
                        <div className="h-48 bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center">
                            <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <span className="text-4xl">🔮</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Neural Interface</h3>
                            <p className="text-gray-400 mb-4">Seamless brain-computer interface for intuitive digital interaction.</p>
                            <a href="/shop/neural-interface" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                                Learn more <span className="ml-1">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30">
                        <div className="h-48 bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center">
                            <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <span className="text-4xl">🛡️</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Quantum Encryption</h3>
                            <p className="text-gray-400 mb-4">Unbreakable security solutions powered by quantum cryptography.</p>
                            <a href="/shop/quantum-encryption" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                                Learn more <span className="ml-1">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="/shop"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-lg hover:shadow-blue-500/20 inline-block"
                    >
                        View All Products
                    </a>
                </div>
            </div>
        </section>
    )
}  