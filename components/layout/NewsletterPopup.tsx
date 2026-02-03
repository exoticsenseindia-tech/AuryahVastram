"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function NewsletterPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        // Show popup after 6 seconds
        const timer = setTimeout(() => {
            const hasSeenPopup = localStorage.getItem("hasSeenPopup");
            if (!hasSeenPopup) {
                setIsVisible(true);
            }
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem("hasSeenPopup", "true");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription logic here
        handleClose();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }} // smooth ease-out-cubic
                        className="relative bg-white w-full max-w-4xl h-[500px] flex overflow-hidden shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-6 right-6 z-20 hover:rotate-90 transition-transform duration-300"
                        >
                            <X className="w-6 h-6 text-black" />
                        </button>

                        {/* Image Section (Left) */}
                        <div className="hidden md:block w-1/2 relative">
                            <img
                                src="https://images.unsplash.com/photo-1596813476686-3023a1a9a834?q=80&w=1587&auto=format&fit=crop"
                                alt="Editorial Fashion"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                        </div>

                        {/* Content Section (Right) */}
                        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center items-center text-center bg-[#fdfbf9]">
                            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-4 font-bold">Join the List</span>
                            <h2 className="font-serif text-4xl mb-2 italic">Unlock 10% Off</h2>
                            <p className="font-sans text-xs text-gray-500 mb-8 max-w-xs leading-relaxed tracking-wide">
                                Be the first to know about new collections and exclusive events.
                            </p>

                            <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-6">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 text-center"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white text-[10px] uppercase tracking-[0.25em] py-4 hover:bg-brand-gold transition-colors duration-300"
                                >
                                    Subscribe
                                </button>
                            </form>

                            <p className="mt-8 text-[9px] text-gray-400 uppercase tracking-widest">
                                No spam, just elegance.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
