"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-[#fafaf9] text-brand-black flex flex-col md:flex-row"
        >
            {/* Left Content - Text */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:pl-24 relative z-10 order-2 md:order-1">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="text-left"
                >
                    <p className="uppercase tracking-[0.4em] text-xs md:text-xs mb-8 text-brand-gold font-bold">
                        Spring / Summer 2026
                    </p>
                    <h1 className="font-playfair text-6xl md:text-8xl leading-[0.9] mb-8 tracking-tight text-brand-black">
                        The Silent <br />
                        <span className="italic text-brand-gold font-light">Symphony</span>
                    </h1>
                    <p className="font-sans text-brand-gray/80 max-w-sm leading-relaxed mb-12">
                        Timeless elegance crafted for the modern muse. Discover the art of understated luxury.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-brand-black text-white text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-brand-gold transition-colors"
                    >
                        Explore Collection
                    </motion.button>
                </motion.div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden order-1 md:order-2">
                <motion.div
                    style={{ scale }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1500"
                        alt="Hero Fashion"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute bottom-8 left-8 md:left-24 hidden md:flex items-center gap-4 z-20"
            >
                <div className="w-12 h-[1px] bg-brand-black/20" />
                <span className="uppercase text-[10px] tracking-[0.2em] text-brand-black/60">Scroll to Explore</span>
            </motion.div>
        </section>
    );
}
