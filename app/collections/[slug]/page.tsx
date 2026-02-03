"use client";

import React from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import { allProducts, collections } from '@/lib/products';
import { ProductCard } from '@/components/shop/ProductCard';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function SingleCollectionPage() {
    const params = useParams();

    const collection = collections.find(c => c.slug === params.slug);

    if (!collection) {
        return <div className="h-screen flex items-center justify-center">Collection not found.</div>
    }

    // Filter products based on collection logic
    const collectionProducts = allProducts.filter(product => {
        if (collection.filterType === 'category') {
            return product.category === collection.filterValue;
        } else if (collection.filterType === 'type') {
            return product.type === collection.filterValue;
        }
        return false;
    });

    return (
        <main className="min-h-screen bg-white text-black pt-32 pb-20">
            {/* Header */}
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 mb-12">
                <Link href="/collections" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-black mb-8 transition-colors">
                    <ChevronLeft className="w-3 h-3" /> Back to Collections
                </Link>

                <div className="flex flex-col md:flex-row gap-12 items-end border-b border-gray-100 pb-12">
                    <div className="flex-1">
                        <span className="text-brand-gold uppercase text-xs tracking-[0.2em] font-bold mb-4 block">Collection</span>
                        <h1 className="font-serif text-5xl md:text-7xl mb-6">{collection.name}</h1>
                        <p className="font-serif text-xl text-gray-500 max-w-xl leading-relaxed">
                            {collection.description}
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <p className="text-xs uppercase tracking-widest text-gray-400">{collectionProducts.length} Products</p>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                {collectionProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {collectionProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="font-serif text-gray-400">No products found in this collection.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
