"use client";

import React, { useState } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import { allProducts } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star, Minus, Plus, ShoppingBag, Truck, ShieldCheck, RefreshCw, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { ProductCard } from '@/components/shop/ProductCard';

export default function ProductDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const { addToCart } = useCart();

    // Find Product by Slug
    const product = allProducts.find(p => p.slug === params.slug);

    // State
    const [selectedSize, setSelectedSize] = useState('M');
    const [activeImage, setActiveImage] = useState(0);
    const [openAccordion, setOpenAccordion] = useState<string | null>('details');

    if (!product) {
        return <div className="h-screen flex items-center justify-center">Product not found.</div>
    }

    const handleAddToCart = () => {
        addToCart(product, selectedSize);
    };

    const handleBuyNow = () => {
        addToCart(product, selectedSize);
        router.push('/checkout');
    };

    const images = [product.image1, product.image2, product.image1, product.image2];

    const relatedProducts = allProducts
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-white text-black pt-32 pb-20">
            {/* Breadcrumb */}
            <div className="px-6 md:px-12 mb-8 flex items-center text-xs text-gray-400 uppercase tracking-widest gap-2">
                <Link href="/shop" className="hover:text-black transition-colors">Shop</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href={`/collections/${product.type.toLowerCase().replace(' ', '-')}`} className="hover:text-black transition-colors">{product.type}</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-black">{product.name}</span>
            </div>

            <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left: Enhanced Gallery */}
                    <div className="lg:w-2/3 flex flex-col-reverse md:flex-row gap-6">
                        {/* Thumbnails - Vertical Slider */}
                        <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:max-h-[80vh] no-scrollbar py-1">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 border transition-all overflow-hidden ${activeImage === idx ? 'border-brand-gold ring-1 ring-brand-gold' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                >
                                    <img src={img} className="w-full h-full object-cover" alt="" />
                                </button>
                            ))}
                        </div>

                        {/* Main Image with Smart Layout */}
                        <div className="flex-1 h-[60vh] md:h-[80vh] relative overflow-hidden bg-gray-50 group rounded-sm border border-gray-100">
                            {/* Blurred Background Layer */}
                            <motion.div
                                key={`bg-${activeImage}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
                                style={{ backgroundImage: `url(${images[activeImage]})` }}
                            />

                            {/* Foreground Image - Contain */}
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <motion.img
                                    key={activeImage}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    src={images[activeImage]}
                                    className="w-full h-auto max-h-full object-contain relative z-10 drop-shadow-xl"
                                    alt={product.name}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Info (Sticky) */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32 pr-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">{product.name}</h1>

                                <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-6">
                                    <p className="text-3xl font-sans font-light">{product.price}</p>
                                    <div className="flex items-center gap-1 text-brand-gold">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                        <span className="text-gray-400 text-xs ml-2 font-sans tracking-wide">(12 Reviews)</span>
                                    </div>
                                </div>

                                <p className="font-serif text-gray-500 leading-relaxed mb-8 text-lg">
                                    {product.description || "Experience the epitome of luxury with this handcrafted masterpiece. Designed for the modern woman who cherishes tradition."}
                                </p>

                                {/* Size Selector */}
                                <div className="mb-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-bold uppercase tracking-widest">Select Size</span>
                                        <Link href="/size-guide" className="text-xs underline text-gray-500 hover:text-brand-gold flex items-center gap-1 transition-colors">
                                            <span>Size Guide</span>
                                        </Link>
                                    </div>
                                    <div className="flex gap-3">
                                        {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`w-14 h-14 border flex items-center justify-center text-sm transition-all ${selectedSize === size ? 'border-brand-gold bg-brand-gold text-white shadow-lg transform scale-105' : 'border-gray-200 hover:border-black'}`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="space-y-4 mb-12">
                                    <button
                                        onClick={handleBuyNow}
                                        className="w-full py-5 bg-black text-white uppercase text-xs tracking-[0.2em] font-bold hover:bg-brand-gold transition-all shadow-xl hover:shadow-2xl transform active:scale-[0.99] duration-300"
                                    >
                                        Buy Now
                                    </button>
                                    <button
                                        onClick={handleAddToCart}
                                        className="w-full py-5 border border-black text-black uppercase text-xs tracking-[0.2em] font-bold hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-3"
                                    >
                                        <ShoppingBag className="w-4 h-4" /> Add to Shopping Bag
                                    </button>
                                </div>

                                {/* Accordions */}
                                <div className="border-t border-gray-200">
                                    <AccordionItem
                                        title="Product Details"
                                        isOpen={openAccordion === 'details'}
                                        onClick={() => setOpenAccordion(openAccordion === 'details' ? null : 'details')}
                                    >
                                        <div className="text-sm text-gray-500 leading-relaxed space-y-2">
                                            <p>• Material: Premium Silk Blend</p>
                                            <p>• Craft: Hand Embroidered Zari</p>
                                            <p>• Care: Dry Clean Only</p>
                                            <p>• Origin: Handcrafted in India</p>
                                        </div>
                                    </AccordionItem>
                                    <AccordionItem
                                        title="Shipping & Returns"
                                        isOpen={openAccordion === 'shipping'}
                                        onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                                    >
                                        <div className="text-sm text-gray-500 leading-relaxed space-y-4">
                                            <div className="flex gap-3">
                                                <Truck className="w-5 h-5 flex-shrink-0" />
                                                <p>Free express shipping on all orders above ₹1,500. Expected delivery within 5-7 business days.</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                                                <p>
                                                    <strong className="block text-black mb-1">Eligible for Exchange:</strong>
                                                    For imitation jewellery, exchange is allowed only if the product is unused, unworn, and returned in original packaging with tags intact.
                                                </p>
                                            </div>
                                            <div className="flex gap-3">
                                                <RefreshCw className="w-5 h-5 flex-shrink-0" />
                                                <p>
                                                    <strong className="block text-black mb-1">Free Return / Exchange:</strong>
                                                    Accepted only in case of wrong item delivered or manufacturing defect reported within 48 hours of delivery.
                                                </p>
                                            </div>
                                            <div className="p-3 bg-gray-50 text-xs italic">
                                                Due to hygiene and product sensitivity, imitation jewellery is not eligible for return or exchange for reasons such as change of mind, minor color variation, or personal preference.
                                            </div>
                                        </div>
                                    </AccordionItem>
                                </div>

                                {/* Jewellery Disclaimer */}
                                <div className="mt-6 border-t border-gray-100 pt-6">
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider text-center">
                                        Note: This is imitation (fashion) jewellery. It is not made of real gold, silver, or precious stones.
                                    </p>
                                    <div className="mt-4 p-4 bg-[#fafaf9] text-xs text-gray-500 leading-relaxed">
                                        <span className="font-bold block mb-1 text-black">Jewellery Care:</span>
                                        Our imitation jewellery is crafted with high-quality plating and finish. To ensure long-lasting shine, avoid contact with water, perfume, and chemicals. Store in a dry place after use.
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Similar Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-32 border-t border-gray-100 pt-20">
                        <h2 className="font-serif text-3xl mb-12 text-center">You May Also Like</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedProducts.map((p, idx) => (
                                <ProductCard key={p.id} product={p} index={idx} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

const AccordionItem = ({ title, children, isOpen, onClick }: { title: string, children: React.ReactNode, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={onClick}
                className="w-full py-6 flex justify-between items-center text-left hover:text-brand-gold transition-colors"
            >
                <span className="font-serif text-lg">{title}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
