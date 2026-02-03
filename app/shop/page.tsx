"use client";

import React, { useState, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ShopSidebar } from "@/components/shop/ShopSidebar";
import { ProductCard } from "@/components/shop/ProductCard";

import { allProducts } from '@/lib/products';

export default function ShopPage() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

    // Filter State
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

    // Handlers
    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
    };

    const handlePriceChange = (price: string) => {
        setSelectedPrices(prev =>
            prev.includes(price) ? prev.filter(p => p !== price) : [...prev, price]
        );
    };

    // Parsing Helper
    const parsePrice = (priceStr: string) => parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;

    // Filtering Logic
    const filteredProducts = useMemo(() => {
        return allProducts.filter(product => {
            // Category Filter (Subsection match)
            // Checks if product.category (e.g. "Sarees") is in selected list
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);

            // Price Filter
            const price = parsePrice(product.price);
            const priceMatch = selectedPrices.length === 0 || selectedPrices.some(range => {
                if (range === "₹1,000 - ₹1,500") return price >= 1000 && price <= 1500;
                if (range === "₹1,500 - ₹2,000") return price >= 1500 && price <= 2000;
                return false;
            });

            return categoryMatch && priceMatch;
        });
    }, [selectedCategories, selectedPrices]);


    return (
        <main className="min-h-screen text-black relative bg-[#f9fafb] overflow-hidden">
            {/* Ambient Background Blobs */}
            <motion.div style={{ y: y1 }} className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-multiply"></motion.div>
            <motion.div style={{ y: y2 }} className="absolute md:top-[20%] right-[-5%] w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-multiply"></motion.div>

            {/* Editorial Hero */}
            <section className="pt-48 pb-24 px-6 text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] as any }}
                    className="font-serif text-6xl md:text-9xl tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600"
                >
                    The Boutique
                </motion.h1>
                <div className="w-24 h-[1px] bg-brand-gold/50 mx-auto mb-8"></div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="font-sans text-[11px] uppercase tracking-[0.3em] text-gray-500 max-w-md mx-auto leading-relaxed"
                >
                    Curated for the modern connoisseur.
                </motion.p>
            </section>

            {/* Content Area */}
            <section className="px-6 md:px-12 pb-32 max-w-[1920px] mx-auto min-h-screen relative z-10">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24">

                    {/* Sidebar (Sticky) */}
                    <div className="md:w-1/4">
                        <div className="sticky top-32">
                            <ShopSidebar
                                selectedCategories={selectedCategories}
                                onCategoryChange={handleCategoryChange}
                                selectedPrices={selectedPrices}
                                onPriceChange={handlePriceChange}
                            />

                            {/* Decorative Element */}
                            <div className="mt-12 opacity-40">
                                <p className="font-serif italic text-2xl text-gray-400">&quot;Elegance is not standing out, but being remembered.&quot;</p>
                                <p className="text-[10px] uppercase tracking-widest mt-4 text-gray-300">— Giorgio Armani</p>
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="md:w-3/4">
                        <div className="flex justify-between items-end mb-12 border-b border-black/5 pb-4">
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gray-400">Showing {filteredProducts.length} curated items</span>
                            <div className="flex gap-4">
                                <button className="text-xs font-bold uppercase tracking-widest hover:text-brand-gold">Sort by: Featured</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 min-h-[50vh]">
                            <AnimatePresence mode='popLayout'>
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product, index) => (
                                        <ProductCard key={product.id} product={product} index={index} />
                                    ))
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                        className="col-span-full text-center py-20 text-gray-400 font-serif"
                                    >
                                        No products match your selection.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
