"use client";

import { motion } from "framer-motion";

export default function RefundPolicy() {
    return (
        <div className="pt-32 pb-20 px-6 bg-[#fafaf9] min-h-screen text-[#1c1917]">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-4xl md:text-5xl mb-12">Return, Refund & Exchange Policy</h1>

                    <div className="space-y-12 font-sans font-light leading-relaxed text-sm md:text-base text-gray-600">
                        <section>
                            <p>We want you to love your purchase. If something is not right, we are here to help.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Exchange Window (India Orders)</h2>
                            <p>Exchanges are accepted within 3 days of delivery.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Eligible for Exchange</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Size issue</li>
                                <li>Change of preference</li>
                                <li>Different fit requirement</li>
                            </ul>
                            <p className="mt-4 italic">A logistics fee of ₹150 per product is applicable.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Free Return / Exchange (No Charges)</h2>
                            <p className="mb-2">Applicable if:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Wrong item delivered</li>
                                <li>Damaged or defective product</li>
                                <li>Major quality issue</li>
                            </ul>
                            <p className="mt-4">Customers should inform us within 48 hours of delivery with images. An unboxing video may be requested for faster resolution (not mandatory but helpful).</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Discounted / Sale Items</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Exchanges allowed for size issues.</li>
                                <li>Returns allowed only if item is defective or incorrect.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">International Orders</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Due to high logistics costs, returns and exchanges are not available for international orders.</li>
                                <li>In case of wrong/damaged product, customers must share images within 48 hours for resolution.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Important</h2>
                            <p>Do not ship any product back without confirmation from our support team.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
