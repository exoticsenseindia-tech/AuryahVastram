"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, User, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { MenuOverlay } from "./MenuOverlay";
import { useCart } from "@/context/CartContext";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount, toggleCart } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    return (
        <>
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <nav className={cn(
                "fixed top-0 w-full z-50 bg-[#fafaf9]/80 backdrop-blur-xl border-b border-[#1c1917]/5 transition-all duration-300",
                isScrolled ? "shadow-sm py-4" : "py-6"
            )}>
                <div className="max-w-[1920px] mx-auto px-6 flex justify-between items-center text-[#1c1917]">

                    {/* Left Links (Desktop) */}
                    <div className="hidden md:flex gap-8 items-center text-[10px] tracking-[0.25em] font-sans uppercase font-medium">
                        <Link href="/shop" className="hover:text-brand-gold transition-colors duration-300 py-2">Shop</Link>
                        <Link href="/collections" className="hover:text-brand-gold transition-colors duration-300 py-2">Collections</Link>
                        <Link href="/about" className="hover:text-brand-gold transition-colors duration-300 py-2">About</Link>
                        <Link href="/contact" className="hover:text-brand-gold transition-colors duration-300 py-2">Contact</Link>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <button className="md:hidden hover:text-brand-gold transition-colors" onClick={() => setIsMenuOpen(true)}>
                        <Menu className="w-5 h-5" />
                    </button>

                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-center group flex flex-col items-center justify-center">
                        <h1 className="font-serif text-2xl md:text-3xl tracking-widest bg-gradient-to-r from-[#8a6c29] via-[#d4af37] to-[#8a6c29] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity duration-500">
                            AURYAH
                        </h1>
                        <span className="font-sans text-[7px] md:text-[9px] tracking-[0.3em] uppercase text-[#8a6c29] opacity-90 group-hover:tracking-[0.4em] transition-all duration-500 leading-none mt-0.5">
                            VASTRAM
                        </span>
                    </Link>

                    {/* Right Icons */}
                    <div className="flex items-center gap-6">
                        <button className="hover:text-brand-gold transition-colors duration-300">
                            <Search className="w-4 h-4" />
                        </button>
                        <button className="hover:text-brand-gold transition-colors duration-300">
                            <User className="w-4 h-4" />
                        </button>
                        <button
                            onClick={toggleCart}
                            className="hover:text-brand-gold transition-colors duration-300 relative"
                        >
                            <ShoppingBag className="w-4 h-4" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
