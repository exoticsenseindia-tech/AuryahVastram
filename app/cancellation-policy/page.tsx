"use client";

import { motion } from "framer-motion";

export default function CancellationPolicy() {
    return (
        <div className="pt-32 pb-20 px-6 bg-[#fafaf9] min-h-screen text-[#1c1917]">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-4xl md:text-5xl mb-12">Cancellation Policy</h1>

                    <div className="space-y-12 font-sans font-light leading-relaxed text-sm md:text-base text-gray-600">
                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Order Cancellation</h2>
                            <p>Auryah Vastram reserves the right to cancel any order due to:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li>Pricing errors</li>
                                <li>Stock unavailability</li>
                                <li>Suspicious or fraudulent transactions</li>
                                <li>Incorrect customer information</li>
                            </ul>
                            <p className="mt-4">In such cases, a full refund will be issued.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Customer Cancellations</h2>
                            <p>If you wish to cancel an order, please contact our customer care team immediately. Once an order has been dispatched, it cannot be canceled and will be treated as per our Return, Refund & Exchange Policy.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Contact</h2>
                            <p>Email: <a href="mailto:customercare@auryahvastram.com" className="text-brand-gold hover:underline">customercare@auryahvastram.com</a></p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
