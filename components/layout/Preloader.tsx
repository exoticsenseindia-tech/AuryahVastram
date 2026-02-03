"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (isLoading) {
            document.body.style.cursor = 'wait';
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0);

            // Counter Animation
            const interval = setInterval(() => {
                setCounter(prev => {
                    if (prev < 100) return prev + 1;
                    clearInterval(interval);
                    return 100;
                });
            }, 25); // Slower, more deliberate counting

            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 3500); // Extended for luxury pacing

            return () => {
                clearInterval(interval);
                clearTimeout(timer);
            };
        } else {
            document.body.style.cursor = 'default';
            document.body.style.overflow = 'auto';
        }
    }, [isLoading]);

    const shutterVariants = {
        initial: { height: "100%" },
        exit: {
            height: 0,
            transition: { duration: 1.2, ease: [0.87, 0, 0.13, 1] } // Ultra-smooth "luxury" easing
        }
    };

    const textVariants = {
        hidden: { opacity: 0, scale: 0.8, filter: "blur(12px)" },
        visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 1.5, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 0.8 }
        }
    };

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none bg-transparent">

                    {/* 5-Column Shutter Grid - Deepest Black */}
                    <div className="absolute inset-0 grid grid-cols-5 h-full w-full">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                variants={shutterVariants}
                                initial="initial"
                                exit="exit"
                                custom={i}
                                transition={{ delay: i * 0.12 }}
                                className="bg-[#0a0a09] w-full h-full relative border-r border-white/5 last:border-r-0 origin-top"
                            >
                            </motion.div>
                        ))}
                    </div>

                    {/* Content Layer */}
                    <motion.div
                        className="relative z-50 flex flex-col items-center justify-center"
                        exit="exit"
                    >
                        {/* Centered Typography */}
                        <div className="overflow-hidden flex flex-col items-center relative">
                            {/* Metallic Gold Gradient Text */}
                            <motion.h1
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="font-serif text-6xl md:text-9xl tracking-tight bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent drop-shadow-2xl"
                            >
                                AURYAH
                            </motion.h1>

                            <motion.div
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-6 mt-6"
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: 60 }}
                                    transition={{ duration: 1.2, delay: 0.5 }}
                                    className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                                />
                                <span className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#d4af37]/80 font-light">
                                    Vastram
                                </span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: 60 }}
                                    transition={{ duration: 1.2, delay: 0.5 }}
                                    className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                                />
                            </motion.div>
                        </div>

                        {/* Live Counter (Bottom Right) - Subtle & Elegant */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed bottom-12 right-12 z-50 flex flex-col items-end"
                        >
                            <span className="font-serif text-6xl md:text-8xl text-[#d4af37]/20 tabular-nums leading-none">
                                {counter}
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 mr-2">Loading</span>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
