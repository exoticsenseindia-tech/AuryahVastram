"use client";

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check,
    ChevronRight,
    CreditCard,
    Truck,
    Smartphone,
    ShoppingBag,
    AlertCircle
} from 'lucide-react';

export default function CheckoutPage() {
    const { items, cartTotal } = useCart();
    const [mounted, setMounted] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    // Form State
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        pincode: '',
        deliveryInstructions: ''
    });

    const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Price Calculations
    const upiDiscountPercentage = 0.02; // 2%
    const discountAmount = paymentMethod === 'upi' ? Math.round(cartTotal * upiDiscountPercentage) : 0;
    const shippingCost = 100;
    const finalTotal = cartTotal - discountAmount; // Shipping is free (cut)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsProcessing(false);
        setOrderPlaced(true);
    };

    if (!mounted) return null;

    if (items.length === 0 && !orderPlaced) {
        return (
            <div className="min-h-screen pt-40 px-6 flex flex-col items-center justify-center bg-gray-50">
                <ShoppingBag className="w-16 h-16 text-gray-300 mb-6" />
                <h1 className="font-serif text-3xl mb-4 text-gray-800">Your cart is empty</h1>
                <Link href="/shop" className="text-brand-gold underline underline-offset-4 font-medium hover:text-black transition-colors">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    if (orderPlaced) {
        return (
            <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center bg-white text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-8 border border-green-100"
                >
                    <Check className="w-12 h-12" />
                </motion.div>
                <h1 className="font-serif text-4xl mb-4">You're All Set!</h1>
                <p className="text-gray-500 max-w-md mb-8">
                    Your dream outfit is on its way, {formData.firstName}. We've sent a confirmation to {formData.email}.
                </p>
                <Link href="/shop" className="bg-brand-black text-white px-10 py-4 uppercase text-xs tracking-widest font-bold hover:bg-brand-gold transition-colors">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#fafaf9] pt-28 pb-20">

            {/* Motivational & Progress Header */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <p className="text-center text-brand-gold font-serif italic mb-4">
                        "You are just a few steps away from your dream outfit..."
                    </p>
                    <div className="flex justify-center items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <span className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-black' : ''}`}>
                            <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center">1</span> Bag
                        </span>
                        <div className="w-12 h-[1px] bg-gray-200"></div>
                        <span className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-black' : ''}`}>
                            <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center bg-black text-white">2</span> Checkout
                        </span>
                        <div className="w-12 h-[1px] bg-gray-200"></div>
                        <span className={`flex items-center gap-2 ${currentStep >= 3 ? 'text-black' : ''}`}>
                            <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center">3</span> Done
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">

                {/* Left Column: Checkout Form */}
                <div className="lg:col-span-7 space-y-8">
                    <form id="checkout-form" onSubmit={handleSubmit}>

                        {/* 1. Contact Info */}
                        <section className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 mb-6 group hover:border-brand-gold/30 transition-colors">
                            <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
                                <span className="bg-brand-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans">1</span>
                                Contact Details
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative group">
                                    <input
                                        type="email"
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors placeholder-transparent"
                                        placeholder="Email"
                                        id="email"
                                    />
                                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">Email Address</label>
                                </div>
                                <div className="relative group">
                                    <input
                                        type="tel"
                                        required
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors placeholder-transparent"
                                        placeholder="Phone"
                                        id="phone"
                                    />
                                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">Phone Number</label>
                                </div>
                            </div>
                        </section>

                        {/* 2. Shipping Address */}
                        <section className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 mb-6 group hover:border-brand-gold/30 transition-colors">
                            <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
                                <span className="bg-brand-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans">2</span>
                                Shipping Address
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors placeholder-transparent"
                                        placeholder="First Name"
                                        id="firstName"
                                    />
                                    <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">First Name</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors placeholder-transparent"
                                        placeholder="Last Name"
                                        id="lastName"
                                    />
                                    <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">Last Name</label>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors placeholder-transparent"
                                        placeholder="Address"
                                        id="address"
                                    />
                                    <label htmlFor="address" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">Address Line 1</label>
                                </div>
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            required
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors placeholder-transparent"
                                            placeholder="City"
                                            id="city"
                                        />
                                        <label htmlFor="city" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">City</label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            required
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            className="peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors placeholder-transparent"
                                            placeholder="State"
                                            id="state"
                                        />
                                        <label htmlFor="state" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">State</label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            required
                                            name="pincode"
                                            value={formData.pincode}
                                            onChange={handleInputChange}
                                            className="peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors placeholder-transparent"
                                            placeholder="Pincode"
                                            id="pincode"
                                        />
                                        <label htmlFor="pincode" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">Pincode</label>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4. Payment Method */}
                        <section className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 mb-6 group hover:border-brand-gold/30 transition-colors">
                            <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
                                <span className="bg-brand-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans">3</span>
                                Payment Method
                            </h2>
                            <div className="space-y-4">
                                {/* UPI Option */}
                                <label
                                    className={`relative block p-6 border rounded-lg cursor-pointer transition-all duration-300 ${paymentMethod === 'upi' ? 'border-brand-gold bg-brand-gold/5 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                                    onClick={() => setPaymentMethod('upi')}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'upi' ? 'border-brand-gold' : 'border-gray-300'}`}>
                                                {paymentMethod === 'upi' && <div className="w-2.5 h-2.5 bg-brand-gold rounded-full" />}
                                            </div>
                                            <span className="font-bold flex items-center gap-2">
                                                <Smartphone className="w-5 h-5" /> UPI / PhonePe / GPay
                                            </span>
                                        </div>
                                        <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
                                            Extra 2% Off
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 ml-9">Instant discount applied securely.</p>
                                </label>

                                {/* Card Option */}
                                <label
                                    className={`relative block p-6 border rounded-lg cursor-pointer transition-all duration-300 ${paymentMethod === 'card' ? 'border-brand-gold bg-brand-gold/5 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                                    onClick={() => setPaymentMethod('card')}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-brand-gold' : 'border-gray-300'}`}>
                                                {paymentMethod === 'card' && <div className="w-2.5 h-2.5 bg-brand-gold rounded-full" />}
                                            </div>
                                            <span className="font-bold flex items-center gap-2">
                                                <CreditCard className="w-5 h-5" /> Cards (Credit/Debit)
                                            </span>
                                        </div>
                                    </div>
                                </label>

                                {/* COD Option */}
                                <label
                                    className={`relative block p-6 border rounded-lg cursor-pointer transition-all duration-300 ${paymentMethod === 'cod' ? 'border-brand-gold bg-brand-gold/5 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                                    onClick={() => setPaymentMethod('cod')}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-brand-gold' : 'border-gray-300'}`}>
                                                {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 bg-brand-gold rounded-full" />}
                                            </div>
                                            <span className="font-bold flex items-center gap-2">
                                                <Truck className="w-5 h-5" /> Cash on Delivery
                                            </span>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </section>
                    </form>
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:col-span-5">
                    <div className="sticky top-40 bg-white p-8 border border-gray-100 shadow-xl rounded-sm">
                        <h3 className="font-serif text-2xl mb-8 border-b pb-4">Your Selection</h3>

                        {/* Items */}
                        <div className="max-h-64 overflow-y-auto mb-8 space-y-6 pr-2 custom-scrollbar">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 group">
                                    <div className="w-16 h-20 bg-gray-100 flex-shrink-0 relative overflow-hidden">
                                        <img src={item.product.image1} alt={item.product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <span className="absolute -top-2 -right-2 bg-black text-white w-5 h-5 rounded-full text-xs flex items-center justify-center shadow-lg">
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-serif text-sm line-clamp-1">{item.product.name}</h4>
                                        <p className="text-xs text-gray-500 mb-1">Size: {item.size}</p>
                                        <p className="text-sm font-medium">{item.product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Calculations */}
                        <div className="space-y-3 pt-6 border-t border-gray-100 text-sm">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>₹{cartTotal.toLocaleString()}</span>
                            </div>

                            <AnimatePresence>
                                {paymentMethod === 'upi' && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="flex justify-between text-green-700 font-medium"
                                    >
                                        <span>UPI Discount (2%)</span>
                                        <span>- ₹{discountAmount.toLocaleString()}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <div className="flex gap-2">
                                    <span className="line-through text-gray-400">₹{shippingCost}</span>
                                    <span className="text-brand-gold font-bold">FREE</span>
                                </div>
                            </div>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between items-end pt-6 mt-6 border-t border-gray-200 mb-8">
                            <span className="font-serif text-lg">Total Amount</span>
                            <div className="text-right">
                                <span className="block text-3xl font-bold font-sans">
                                    ₹{finalTotal.toLocaleString()}
                                </span>
                                {paymentMethod === 'upi' && (
                                    <span className="text-xs text-green-600 font-medium flex items-center justify-end gap-1">
                                        <Check className="w-3 h-3" /> You saved ₹{discountAmount}
                                    </span>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            form="checkout-form"
                            disabled={isProcessing}
                            className="w-full bg-brand-gold text-white py-4 uppercase text-sm tracking-[0.2em] font-bold hover:bg-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 shadow-lg hover:shadow-xl transform active:scale-[0.99] duration-300"
                        >
                            {isProcessing ? (
                                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            ) : (
                                <>
                                    Complete Order <ChevronRight className="w-4 h-4" />
                                </>
                            )}
                        </button>

                        <div className="mt-6 flex items-start gap-3 bg-gray-50 p-4 rounded text-xs text-gray-500 border border-gray-100">
                            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <p>
                                Secure checkout. Your details are protected by 256-bit SSL encryption.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
