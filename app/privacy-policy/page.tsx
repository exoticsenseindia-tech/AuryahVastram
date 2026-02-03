"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <div className="pt-32 pb-20 px-6 bg-[#fafaf9] min-h-screen text-[#1c1917]">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-4xl md:text-5xl mb-12">Privacy Policy</h1>

                    <div className="space-y-12 font-sans font-light leading-relaxed text-sm md:text-base text-gray-600">
                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Auryah Vastram Pvt Ltd</h2>
                            <p>Auryah Vastram is committed to protecting your privacy.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Information We Collect</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Name, phone number, email address, shipping address</li>
                                <li>Order and transaction details</li>
                                <li>Preferences and feedback</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Use of Information</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Order processing and delivery</li>
                                <li>Customer support</li>
                                <li>Sending offers and updates (customers can opt out anytime)</li>
                                <li>Improving our products and services</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Payment Security</h2>
                            <p>We do not store your card or payment details. All payments are processed securely through trusted payment gateways.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Data Protection</h2>
                            <p>We implement appropriate security measures to protect your data from unauthorized access.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Cookies</h2>
                            <p>Our website may use cookies to enhance user experience and analyze website traffic.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Your Rights</h2>
                            <p className="mb-2">You may request to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Access your data</li>
                                <li>Correct your data</li>
                                <li>Delete your data from our records</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">International Data Sharing</h2>
                            <p>For international orders, necessary data may be shared with courier and customs authorities for shipment purposes.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Contact for Privacy Concerns</h2>
                            <p>Email: <a href="mailto:customercare@auryahvastram.com" className="text-brand-gold hover:underline">customercare@auryahvastram.com</a></p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
