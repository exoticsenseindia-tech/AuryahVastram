"use client";

import { Section } from "../ui/section";
import { motion } from "framer-motion";

export function BrandIntro() {
    return (
        <Section className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary">
                        Premium Fashion, Thoughtfully Curated
                    </h2>
                    <div className="w-20 h-1 bg-secondary mb-8" />
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        We believe great style shouldn’t require compromise. Each piece in our collection is selected for one reason: it meets our standard. Quality fabrics. Modern cuts. Timeless appeal. No mass production, no shortcuts—just fashion that respects your taste and your time.
                    </p>
                    <p className="text-lg text-gray-700 font-medium italic">
                        Because what you wear should support your confidence, not question it.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 gap-4"
                >
                    <div className="bg-neutral-100 p-8 h-full flex flex-col justify-center text-center hover:bg-neutral-50 transition-colors">
                        <h3 className="font-playfair text-xl font-bold mb-2">Quality First</h3>
                        <p className="text-sm text-gray-600">Every garment passes through our hands before it reaches yours.</p>
                    </div>
                    <div className="bg-neutral-100 p-8 h-full flex flex-col justify-center text-center hover:bg-neutral-50 transition-colors">
                        <h3 className="font-playfair text-xl font-bold mb-2">Curated</h3>
                        <p className="text-sm text-gray-600">Fewer pieces, better choices. Styles that work for your lifestyle.</p>
                    </div>
                    <div className="bg-neutral-100 p-8 h-full flex flex-col justify-center text-center hover:bg-neutral-50 transition-colors">
                        <h3 className="font-playfair text-xl font-bold mb-2">Modern</h3>
                        <p className="text-sm text-gray-600">Contemporary designs that understand how you live.</p>
                    </div>
                    <div className="bg-neutral-100 p-8 h-full flex flex-col justify-center text-center hover:bg-neutral-50 transition-colors">
                        <h3 className="font-playfair text-xl font-bold mb-2">Experience</h3>
                        <p className="text-sm text-gray-600">Secure checkout, reliable delivery, responsive support.</p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
