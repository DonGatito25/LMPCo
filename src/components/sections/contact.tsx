import React from "react"

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
                        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-lg hover:shadow-blue-500/20"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
                        <h3 className="text-2xl font-bold mb-6">Corporate Headquarters</h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold mb-2 text-blue-400">Address</h4>
                                <p className="text-gray-300">
                                    1234 Innovation Drive
                                    <br />
                                    Tech District
                                    <br />
                                    San Francisco, CA 94105
                                    <br />
                                    United States
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-2 text-blue-400">Contact Information</h4>
                                <p className="text-gray-300">
                                    Email: info@lmpco.tech
                                    <br />
                                    Phone: +1 (555) 123-4567
                                    <br />
                                    Support: support@lmpco.tech
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-2 text-blue-400">Business Hours</h4>
                                <p className="text-gray-300">
                                    Monday - Friday: 9:00 AM - 6:00 PM PST
                                    <br />
                                    Saturday - Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
