"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

import { Product } from '@/lib/products';

export const ProductCard = ({ product, index }: { product: Product; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showSizes, setShowSizes] = useState(false);
    const { addToCart } = useCart();
    const router = useRouter();

    const handleViewDetails = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        router.push(`/shop/${product.slug}`);
    };

    const handleQuickAdd = (e: React.MouseEvent, size: string) => {
        e.stopPropagation();
        addToCart(product, size);
        setShowSizes(false); // Reset after adding
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] as any }}
            className="group cursor-pointer relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setShowSizes(false); }}
            onClick={handleViewDetails}
        >
            {/* Glass Card Container */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                <img
                    src={product.image1}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                />

                {/* Full Glass Overlay on Hover */}
                <div
                    className={`absolute inset-0 bg-black/10 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                    {!showSizes ? (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowSizes(true);
                                }}
                                className="bg-white text-black px-8 py-3 rounded-full uppercase text-[10px] tracking-widest font-bold hover:bg-brand-black hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-100 shadow-lg"
                            >
                                <span className="flex items-center gap-2"><Plus className="w-3 h-3" /> Quick Add</span>
                            </button>
                            <button
                                onClick={handleViewDetails}
                                className="bg-white/90 text-black px-8 py-3 rounded-full uppercase text-[10px] tracking-widest font-bold hover:bg-black hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-200 shadow-lg"
                            >
                                View Details
                            </button>
                        </>
                    ) : (
                        <div className="bg-white p-4 rounded-lg shadow-xl animate-in fade-in zoom-in duration-200 flex flex-col gap-2 items-center" onClick={(e) => e.stopPropagation()}>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Select Size</span>
                            <div className="flex gap-2">
                                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                    <button
                                        key={size}
                                        onClick={(e) => handleQuickAdd(e, size)}
                                        className="w-8 h-8 flex items-center justify-center border border-gray-200 text-xs font-medium hover:bg-black hover:text-white hover:border-black transition-colors rounded-sm"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); setShowSizes(false); }}
                                className="text-[10px] underline text-gray-400 mt-1 hover:text-black"
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Info - Minimalist */}
            <div className="text-center group-hover:-translate-y-1 transition-transform duration-500">
                <h3 className="font-serif text-xl mb-2">{product.name}</h3>
                <p className="font-sans text-xs text-gray-500 tracking-[0.2em] mb-2">{product.category}</p>
                <p className="font-sans text-sm font-medium">{product.price}</p>
            </div>
        </motion.div>
    );
};
