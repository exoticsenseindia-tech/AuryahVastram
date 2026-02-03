"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

const categories = [
    { name: "Top", items: ["Blouses", "Tunics", "Crop Tops", "Kurtis"] },
    { name: "Bottom wear", items: ["Skirts", "Palazzos", "Trousers", "Lehengas"] },
    { name: "One piece", items: ["Gowns", "Sarees", "Dresses", "Anarkalis"] },
    { name: "Jewellery", items: ["Necklaces", "Earrings", "Bangles", "Sets"] }
];

const prices = ["₹1,000 - ₹1,500", "₹1,500 - ₹2,000"];

interface ShopSidebarProps {
    selectedCategories: string[];
    onCategoryChange: (category: string) => void;
    selectedPrices: string[];
    onPriceChange: (price: string) => void;
}

export const ShopSidebar = ({ selectedCategories, onCategoryChange, selectedPrices, onPriceChange }: ShopSidebarProps) => {
    const [openSection, setOpenSection] = useState<string | null>("Bottom wear");

    const toggleSection = (name: string) => {
        setOpenSection(openSection === name ? null : name);
    };

    return (
        <div className="w-full">
            {/* Glass Container */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                <h3 className="font-serif text-2xl tracking-tight mb-8 text-gray-800">Categories</h3>

                <div className="space-y-6">
                    {categories.map((cat) => (
                        <div key={cat.name} className="border-b border-black/5 pb-4 last:border-0">
                            <button
                                onClick={() => toggleSection(cat.name)}
                                className="flex justify-between items-center w-full text-left uppercase text-[10px] tracking-[0.2em] font-bold text-gray-600 hover:text-brand-gold transition-colors mb-4"
                            >
                                {cat.name}
                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openSection === cat.name ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {openSection === cat.name && (
                                    <motion.ul
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] as any }}
                                        className="overflow-hidden space-y-3 pl-2"
                                    >
                                        {cat.items.map((item) => (
                                            <li key={item}>
                                                <button
                                                    onClick={() => onCategoryChange(item)}
                                                    className={`text-sm font-serif transition-colors flex items-center gap-3 ${selectedCategories.includes(item) ? 'text-brand-gold italic' : 'text-gray-500 hover:text-gray-800'}`}
                                                >
                                                    <div className={`w-3 h-3 rounded-full border flex items-center justify-center transition-colors ${selectedCategories.includes(item) ? 'border-brand-gold bg-brand-gold text-white' : 'border-gray-300'}`}>
                                                        {selectedCategories.includes(item) && <Check className="w-2 h-2" />}
                                                    </div>
                                                    {item}
                                                </button>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <h3 className="font-serif text-2xl tracking-tight mt-12 mb-8 text-gray-800">Price Range</h3>
                <div className="space-y-3 pl-2">
                    {prices.map((price) => (
                        <button
                            key={price}
                            onClick={() => onPriceChange(price)}
                            className={`text-sm font-serif transition-colors flex items-center gap-3 ${selectedPrices.includes(price) ? 'text-brand-gold italic' : 'text-gray-500 hover:text-gray-800'}`}
                        >
                            <div className={`w-3 h-3 rounded-full border flex items-center justify-center transition-colors ${selectedPrices.includes(price) ? 'border-brand-gold bg-brand-gold text-white' : 'border-gray-300'}`}>
                                {selectedPrices.includes(price) && <Check className="w-2 h-2" />}
                            </div>
                            {price}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
