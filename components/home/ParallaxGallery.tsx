"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
    { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop", y: 0, title: "Ready to Wear" },
    { src: "https://images.unsplash.com/photo-1548705085-101177834f47?q=80&w=1332&auto=format&fit=crop", y: -50, title: "Evening" },
    { src: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=987&auto=format&fit=crop", y: 50, title: "Accessories" },
    { src: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1000&auto=format&fit=crop", y: -30, title: "Footwear" },
];

export function ParallaxGallery() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section ref={container} className="py-32 px-4 md:px-12 bg-white min-h-[150vh] flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-24 text-center">
                    <h2 className="font-playfair text-4xl md:text-6xl italic">Curated Collections</h2>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">A visual dialogue</p>
                </div>

                <div className="grid grid-cols-2 gap-8 md:gap-24 relative">
                    <motion.div style={{ y: y1 }} className="flex flex-col gap-4">
                        <div className="relative aspect-[3/4] w-full overflow-hidden">
                            <img src={images[0].src} alt={images[0].title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
                        </div>
                    </motion.div>

                    <motion.div style={{ y: y2 }} className="flex flex-col gap-4 pt-32">
                        <div className="relative aspect-[3/4] w-full overflow-hidden">
                            <img src={images[1].src} alt={images[1].title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
                        </div>
                    </motion.div>

                    <motion.div style={{ y: y3 }} className="flex flex-col gap-4 -mt-32">
                        <div className="relative aspect-[3/4] w-full overflow-hidden">
                            <img src={images[2].src} alt={images[2].title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
                        </div>
                    </motion.div>

                    <motion.div style={{ y: y4 }} className="flex flex-col gap-4 pt-12">
                        <div className="relative aspect-[3/4] w-full overflow-hidden">
                            <img src={images[3].src} alt={images[3].title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
