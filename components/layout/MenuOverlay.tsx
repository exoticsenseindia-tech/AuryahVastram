"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    return (
        <div
            className={cn(
                "fixed top-0 left-0 w-full h-[100vh] bg-[#0a0a0a] text-white z-[100] transform transition-transform duration-800 cubic-bezier(0.77, 0, 0.175, 1) flex justify-center items-center pointer-events-auto",
                isOpen ? "translate-y-0" : "-translate-y-full"
            )}
        >
            <button
                className="absolute top-8 right-8 hover-target uppercase text-xs tracking-widest p-4 text-white hover:text-gray-400"
                onClick={onClose}
            >
                Close
            </button>
            <div className="text-center space-y-8 flex flex-col items-center">
                <Link
                    href="/shop"
                    onClick={onClose}
                    className="block font-playfair text-5xl md:text-7xl hover:italic hover:text-brand-gold transition-all hover-target"
                >
                    Shop
                </Link>
                <Link
                    href="/collections"
                    onClick={onClose}
                    className="block font-playfair text-5xl md:text-7xl hover:italic hover:text-brand-gold transition-all hover-target"
                >
                    Collections
                </Link>
                <Link
                    href="/#atelier"
                    onClick={onClose}
                    className="block font-playfair text-5xl md:text-7xl hover:italic hover:text-brand-gold transition-all hover-target"
                >
                    Atelier
                </Link>
                <Link
                    href="/contact"
                    onClick={onClose}
                    className="block font-playfair text-5xl md:text-7xl hover:italic hover:text-brand-gold transition-all hover-target"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
}
