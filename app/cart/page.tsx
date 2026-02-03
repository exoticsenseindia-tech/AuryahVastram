"use client";

import React from 'react';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
    const { items, updateQuantity, removeFromCart, cartTotal } = useCart();

    return (
        <main className="min-h-screen bg-white text-black pt-40 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="font-serif text-5xl md:text-6xl mb-12">Your Cart</h1>

                {items.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-lg">
                        <p className="font-serif text-xl text-gray-400 mb-8">Your shopping bag is empty.</p>
                        <Link href="/shop" className="inline-block border-b border-black uppercase text-xs tracking-[0.2em] font-bold pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Cart Items List */}
                        <div className="lg:w-2/3 space-y-12">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-8 border-b border-gray-100 pb-12 last:border-0">
                                    {/* Image */}
                                    <div className="w-32 h-44 bg-gray-100 flex-shrink-0">
                                        <img src={item.product.image1} className="w-full h-full object-cover" alt={item.product.name} />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-serif text-2xl mb-2">{item.product.name}</h3>
                                                <p className="text-xs uppercase tracking-widest text-gray-400">{item.product.category} — {item.size}</p>
                                            </div>
                                            <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="flex justify-between items-end">
                                            <div className="flex items-center gap-6">
                                                <div className="flex items-center border border-gray-300">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="p-3 hover:bg-gray-100"><Minus className="w-3 h-3" /></button>
                                                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="p-3 hover:bg-gray-100"><Plus className="w-3 h-3" /></button>
                                                </div>
                                            </div>
                                            <p className="font-sans text-xl font-medium">{item.product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-1/3">
                            <div className="bg-[#f9fafb] p-8 md:p-12 sticky top-32">
                                <h3 className="font-serif text-2xl mb-8">Order Summary</h3>

                                <div className="space-y-4 mb-8 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Subtotal</span>
                                        <span className="font-medium">₹{cartTotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Shipping</span>
                                        <span className="font-medium">Calculated at checkout</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Tax</span>
                                        <span className="font-medium">₹0.00</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-6 mb-8">
                                    <div className="flex justify-between items-end">
                                        <span className="font-serif text-lg">Total</span>
                                        <span className="font-sans text-2xl font-bold">₹{cartTotal.toLocaleString()}</span>
                                    </div>
                                </div>

                                <Link href="/checkout" className="w-full bg-brand-gold text-white py-5 uppercase text-xs tracking-[0.2em] font-bold hover:bg-black transition-colors flex justify-center items-center gap-2 group">
                                    Proceed to Checkout
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <p className="text-[10px] text-gray-400 text-center mt-6 leading-relaxed">
                                    Secure Checkout. <br /> Complimentary shipping on all orders above ₹1,00,000.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
