"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Story() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="bg-[#fafaf9]">
            {/* Hero Section */}
            <div className="relative h-screen overflow-hidden flex items-center justify-center">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-black/30 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2574&auto=format&fit=crop"
                        alt="Editorial Fashion"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 text-center text-white px-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase mb-8"
                    >
                        Built on Belief
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight"
                    >
                        Driven by <br />
                        <span className="italic font-light text-brand-gold">Quality</span>
                    </motion.h1>
                </div>

                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
                >
                    <span className="block w-[1px] h-24 bg-white/50 mx-auto" />
                </motion.div>
            </div>

            {/* Narrative Scroll Section */}
            <section className="py-32 px-6 max-w-[1920px] mx-auto">
                <div className="flex flex-col md:flex-row gap-20 items-center">
                    <div className="md:w-1/2">
                        <div className="relative aspect-[3/4] overflow-hidden group">
                            <motion.img
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop"
                                alt="Sakshi Gupta"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute bottom-0 left-0 p-8 text-white z-10">
                                <p className="font-serif text-3xl italic">Sakshi Gupta</p>
                                <p className="font-sans text-[10px] tracking-[0.2em] uppercase mt-2">Founder</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 md:pl-12">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-gold text-[10px] tracking-[0.4em] uppercase block mb-8">The Origin</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917] mb-12 leading-tight">
                                Fashion that speaks to the soul of the <span className="italic text-brand-gray">modern woman.</span>
                            </h2>
                            <div className="space-y-8 font-serif text-lg md:text-xl text-[#1c1917]/70 leading-relaxed">
                                <p>
                                    Auryah Vastram began with a simple conviction: that women deserve fashion that’s as thoughtful as they are. Founded in November 2025, the brand was created to bridge a gap in modern women’s wardrobes.
                                </p>
                                <p>
                                    Like many women, Sakshi struggled to find clothing that balanced elegance, comfort, and value. This gap became Auryah Vastram—a vision supported by family and built on the promise of intentional design.
                                </p>
                                <p className="text-[#1c1917]">
                                    Today, we focus on delivering exceptional women’s apparel that blends tradition with modernity. We aren't just selling clothes. We are curating confidence.
                                </p>
                            </div>

                            <div className="mt-16 pt-16 border-t border-[#1c1917]/10">
                                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-gray mb-4">Established</p>
                                <p className="font-serif text-3xl text-[#1c1917]">November 2025</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
