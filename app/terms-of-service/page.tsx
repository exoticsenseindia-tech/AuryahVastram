"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
    return (
        <div className="pt-32 pb-20 px-6 bg-[#fafaf9] min-h-screen text-[#1c1917]">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-4xl md:text-5xl mb-12">Terms & Conditions</h1>

                    <div className="space-y-12 font-sans font-light leading-relaxed text-sm md:text-base text-gray-600">
                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Auryah Vastram Pvt Ltd</h2>
                            <p>Welcome to AURYAH VASTRAM. By accessing our website, mobile application, WhatsApp catalogue, social media pages, or purchasing from our promotional stalls or exhibitions, you agree to be bound by the following Terms & Conditions.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">1. Product Representation</h2>
                            <p>We make every effort to display product colours, design, and details accurately. However, slight variations may occur due to lighting, photography, or screen resolution.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">2. Pricing & Promotional Offers</h2>
                            <p>Prices offered during promotional stalls, exhibitions, society events, or launch campaigns are special marketing prices for customer acquisition and may differ from prices listed on our website or mobile application. Such prices cannot be claimed later online.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">3. Order Acceptance & Cancellation</h2>
                            <p>Auryah Vastram reserves the right to cancel any order due to:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li>Pricing errors</li>
                                <li>Stock unavailability</li>
                                <li>Suspicious or fraudulent transactions</li>
                                <li>Incorrect customer information</li>
                            </ul>
                            <p className="mt-4">In such cases, a full refund will be issued.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">4. Intellectual Property</h2>
                            <p>All images, videos, designs, logos, content, and branding belong exclusively to Auryah Vastram. Unauthorized use, copying, or reproduction is strictly prohibited and legally actionable.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">5. User Conduct</h2>
                            <p>Any misuse of the platform, fraudulent activity, abuse, or false claims may lead to legal action and blacklisting from future purchases.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">6. Limitation of Liability</h2>
                            <p>Auryah Vastram shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">7. Governing Law & Jurisdiction</h2>
                            <p>All disputes are subject to the jurisdiction of Mumbai, Maharashtra, India only.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
