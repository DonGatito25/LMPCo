import React from "react"

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">About L.M.P. Co.</h2>
                <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                                sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla
                                enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                                sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla
                                enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4">Our History</h3>
                            <p className="text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                                sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla
                                enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
