"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
    id: string;
    product: any;
    quantity: number;
    size?: string;
}

interface CartContextType {
    items: CartItem[];
    isOpen: boolean;
    addToCart: (product: any, size?: string) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, change: number) => void;
    toggleCart: () => void;
    cartTotal: number;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    // Initial load from local storage could go here

    const addToCart = (product: any, size: string = 'M') => {
        setItems(prev => {
            // Find if item exists
            const existing = prev.find(item => item.product.id === product.id && item.size === size);
            if (existing) {
                return prev.map(item =>
                    item.id === existing.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // Add new item
            return [...prev, {
                id: `${product.id}-${size}-${Date.now()}`,
                product,
                quantity: 1,
                size
            }];
        });
        setIsOpen(true);
    };

    const removeFromCart = (id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, change: number) => {
        setItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + change);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const toggleCart = () => setIsOpen(!isOpen);

    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

    // Helper to parse price string "₹45,000" -> 45000
    const parsePrice = (priceStr: string) => {
        if (!priceStr) return 0;
        return parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
    }

    const cartTotal = items.reduce((acc, item) => acc + (parsePrice(item.product.price) * item.quantity), 0);

    return (
        <CartContext.Provider value={{ items, isOpen, addToCart, removeFromCart, updateQuantity, toggleCart, cartTotal, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
