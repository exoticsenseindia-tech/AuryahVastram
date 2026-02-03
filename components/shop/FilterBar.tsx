"use client";

import React from 'react';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

export const FilterBar = () => {
    return (
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-black/5 py-4 px-6 md:px-12 transition-all duration-300">
            <div className="flex justify-between items-center max-w-[1920px] mx-auto">
                {/* Left: Filters */}
                <div className="flex gap-8">
                    <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:text-brand-gold transition-colors">
                        Filter <SlidersHorizontal className="w-3 h-3" />
                    </button>
                    <div className="hidden md:flex gap-6 text-[10px] uppercase tracking-widest text-gray-500">
                        <button className="hover:text-black transition-colors">Category <ChevronDown className="w-3 h-3 inline ml-1" /></button>
                        <button className="hover:text-black transition-colors">Material <ChevronDown className="w-3 h-3 inline ml-1" /></button>
                        <button className="hover:text-black transition-colors">Price <ChevronDown className="w-3 h-3 inline ml-1" /></button>
                    </div>
                </div>

                {/* Center: Count (Optional) */}
                <span className="hidden md:block text-[10px] uppercase tracking-widest text-gray-400">Showing 12 Results</span>

                {/* Right: Sort */}
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:text-brand-gold transition-colors">
                    Sort <ChevronDown className="w-3 h-3" />
                </button>
            </div>
        </div>
    );
};
