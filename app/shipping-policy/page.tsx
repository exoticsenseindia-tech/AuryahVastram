"use client";

import { motion } from "framer-motion";

export default function ShippingPolicy() {
    return (
        <div className="pt-32 pb-20 px-6 bg-[#fafaf9] min-h-screen text-[#1c1917]">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-4xl md:text-5xl mb-12">Shipping Policy</h1>

                    <div className="space-y-12 font-sans font-light leading-relaxed text-sm md:text-base text-gray-600">
                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">India & International</h2>
                            <p><strong className="text-black">Order Dispatch Time:</strong> 24–48 working hours from order confirmation.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">India Delivery</h2>
                            <p><strong className="text-black">Estimated delivery time:</strong> 3–7 working days depending on location.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">International Delivery</h2>
                            <p><strong className="text-black">Estimated delivery time:</strong> 7–15 working days depending on country and customs clearance.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Important Notes</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>We are not liable for delays caused by courier companies or customs authorities.</li>
                                <li>Delivery will be made to the address provided by the customer. Customers are responsible for providing complete and accurate addresses.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Customs, Duties & Taxes (International Orders)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>For international orders, any customs duty, import tax, or local charges must be borne by the customer.</li>
                                <li>If a customer refuses delivery due to customs charges, no refund will be issued.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-black mb-4">Lost / Delayed Shipments</h2>
                            <p>Auryah Vastram is not responsible for delays due to customs hold, natural events, or courier issues after dispatch.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
