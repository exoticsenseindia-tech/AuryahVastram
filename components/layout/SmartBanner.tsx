"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

export const SmartBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="md:hidden sticky top-0 z-[99999] bg-[#fafaf9] border-b border-[#1c1917]/10 px-4 py-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
                <button onClick={() => setIsVisible(false)} className="text-brand-black/60 p-1">
                    <X className="w-5 h-5" />
                </button>
                <div className="flex flex-col">
                    <span className="font-serif text-sm tracking-widest text-brand-black">AURYAH</span>
                    <span className="text-[10px] text-brand-gray uppercase tracking-wide leading-tight">A Better Experience.<br />Discover it in the app.</span>
                </div>
            </div>
            <button className="bg-brand-black/90 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-brand-black transition-colors">
                Open App
            </button>
        </div>
    );
};
