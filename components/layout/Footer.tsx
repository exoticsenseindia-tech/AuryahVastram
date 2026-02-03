"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white text-black py-20 px-8 border-t border-gray-100" id="contact">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8">
                <div className="md:w-1/3">
                    <h2 className="font-playfair text-3xl mb-4">Auryah.</h2>
                    <p className="font-sans text-xs text-gray-500 mb-8 max-w-xs leading-relaxed">
                        Premium fashion for women who know their worth. Thoughtfully curated, ensuring elegance over excess.
                    </p>
                    <div className="flex gap-6 opacity-60">
                        <a href="https://instagram.com/auryah_vastram" target="_blank" className="hover:scale-110 transition-transform hover-target">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <Facebook className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform hover-target" />
                        <Twitter className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform hover-target" />
                    </div>
                </div>

                <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-12">
                    <div>
                        <h4 className="uppercase text-[10px] tracking-[0.2em] font-bold mb-6">Shop</h4>
                        <ul className="space-y-4 text-xs font-medium text-gray-500">
                            <li><Link href="/shop" className="hover:text-brand-gold transition-colors hover-target">All Products</Link></li>
                            <li><Link href="/collections" className="hover:text-brand-gold transition-colors hover-target">Collections</Link></li>
                            <li><Link href="/shop?category=new" className="hover:text-brand-gold transition-colors hover-target">New Arrivals</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="uppercase text-[10px] tracking-[0.2em] font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-xs font-medium text-gray-500">
                            <li><Link href="/about" className="hover:text-brand-gold transition-colors hover-target">Our Story</Link></li>
                            <li><Link href="/about" className="hover:text-brand-gold transition-colors hover-target">Vision & Values</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-gold transition-colors hover-target">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="uppercase text-[10px] tracking-[0.2em] font-bold mb-6">Service</h4>
                        <ul className="space-y-4 text-xs font-medium text-gray-500">
                            <li><Link href="/contact" className="hover:text-brand-gold transition-colors hover-target">Customer Care</Link></li>
                            <li><Link href="/shipping-policy" className="hover:text-brand-gold transition-colors hover-target">Shipping Policy</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-brand-gold transition-colors hover-target">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-brand-gold transition-colors hover-target">Terms & Conditions</Link></li>
                            <li><Link href="/refund-policy" className="hover:text-brand-gold transition-colors hover-target">Refund Policy</Link></li>
                            <li><Link href="/cancellation-policy" className="hover:text-brand-gold transition-colors hover-target">Cancellation Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 gap-4">
                <p>&copy; {new Date().getFullYear()} Auryah Vastram. All rights reserved.</p>
                <p className="hidden md:block">Premium Women&apos;s Fashion Online India</p>
            </div>
        </footer>
    );
}
