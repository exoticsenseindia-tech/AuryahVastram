"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export const CartDrawer = () => {
    const { isOpen, toggleCart, items, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-100">
                            <h2 className="font-serif text-2xl">Shopping Bag ({items.length})</h2>
                            <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Motivation / Free Shipping Indicator */}
                        {items.length > 0 && (
                            <div className="bg-brand-gold/10 px-6 py-3 text-center border-b border-brand-gold/20">
                                <p className="text-xs text-brand-black flex items-center justify-center gap-2">
                                    <ShoppingBag className="w-3 h-3" />
                                    You're minutes away from your dream outfit!
                                </p>
                            </div>
                        )}

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                                    <ShoppingBag className="w-12 h-12 mb-4 opacity-50" />
                                    <p className="font-serif">Your bag is empty.</p>
                                    <button onClick={toggleCart} className="mt-4 text-xs font-bold uppercase tracking-widest border-b border-black">
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-24 h-32 bg-gray-100 relative overflow-hidden flex-shrink-0">
                                            <img src={item.product.image1} alt={item.product.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h3 className="font-serif text-lg leading-tight w-[80%]">{item.product.name}</h3>
                                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{item.product.category} | Size: {item.size}</p>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div className="flex items-center gap-3 border border-gray-200 px-2 py-1">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-400 hover:text-black"><Minus className="w-3 h-3" /></button>
                                                    <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-400 hover:text-black"><Plus className="w-3 h-3" /></button>
                                                </div>
                                                <p className="font-sans font-medium">{item.product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-sm uppercase tracking-widest text-gray-500">Subtotal</span>
                                <span className="font-serif text-xl">₹{cartTotal.toLocaleString()}</span>
                            </div>
                            <Link
                                href="/checkout"
                                onClick={toggleCart}
                                className="block w-full text-center bg-brand-black text-white py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-brand-gold transition-colors"
                            >
                                Checkout
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
