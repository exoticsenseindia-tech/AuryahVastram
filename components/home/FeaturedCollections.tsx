"use client";

import { Section } from "../ui/section";
import { products } from "@/lib/data";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export function FeaturedCollections() {
    return (
        <Section id="collections" className="bg-[#fdfbf7]">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-primary">Signature Selections</h2>
                <p className="text-gray-600 text-lg">
                    Limited pieces, lasting impressions. These are the styles we’re especially proud of—the ones that capture what Auryah Vastram stands for.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 mb-4">
                            {/* Placeholder for image */}
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                Image: {product.name}
                            </div>

                            {product.isNew && (
                                <span className="absolute top-2 left-2 bg-secondary text-white text-xs uppercase font-bold px-2 py-1 tracking-wider">
                                    New Arrival
                                </span>
                            )}
                        </div>

                        <h3 className="font-playfair text-lg font-bold mb-1 group-hover:text-secondary transition-colors">
                            {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                        <p className="font-medium text-primary">{product.price}</p>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Button variant="outline">View All Collections</Button>
            </div>
        </Section>
    );
}
