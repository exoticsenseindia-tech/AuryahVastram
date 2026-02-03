"use client";

import React from 'react';
import Link from 'next/link';
import { collections } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

export default function CollectionsPage() {
    return (
        <main className="min-h-screen bg-white text-black pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="font-serif text-5xl md:text-7xl mb-6 text-center">Collections</h1>
                <p className="text-center text-gray-500 max-w-2xl mx-auto mb-20 font-serif text-lg">
                    Discover our carefully curated edits, each telling a unique story of tradition and modernity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {collections.map((collection, index) => (
                        <Link
                            href={`/collections/${collection.slug}`}
                            key={collection.id}
                            className="group block"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden mb-6">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                <img
                                    src={collection.image}
                                    alt={collection.name}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 z-20 flex items-center justify-center">
                                    <span className="bg-white/90 backdrop-blur text-black px-8 py-3 uppercase text-xs tracking-[0.2em] font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                        Explore Collection
                                    </span>
                                </div>
                            </div>
                            <div className="text-center">
                                <h2 className="font-serif text-3xl mb-2 group-hover:text-brand-gold transition-colors">{collection.name}</h2>
                                <p className="text-gray-500 font-serif italic mb-4">{collection.description}</p>
                                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-transparent group-hover:border-black pb-1 transition-all">
                                    View Products <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
