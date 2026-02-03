"use client";

import { motion } from "framer-motion";

export function Vision() {
    return (
        <div className="bg-[#1c1917] text-[#fafaf9] py-32 overflow-hidden">
            {/* Part 1: Process - Horizontal Layout */}
            <div className="max-w-[1920px] mx-auto px-6 mb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-8 block">Our Process</span>
                        <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-[0.9]">
                            Curated, <br />
                            <span className="text-gray-500 italic">Not Just Designed.</span>
                        </h2>
                        <div className="w-full h-[1px] bg-white/10 mb-10" />
                        <p className="text-lg md:text-xl font-serif leading-relaxed text-gray-300 max-w-xl">
                            We look for pieces that combine modern sensibility with enduring style. Pieces that work in your life, not just on a runway. The result? A refined selection of clothing that feels premium because it is.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-gray-800 overflow-hidden rounded-sm opacity-60">
                            <img
                                src="https://gallery.yopriceville.com/var/albums/Backgrounds/Blue_Satin_Fabric_Texture_Background.jpg?m=1629778067"
                                className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-1000"
                                alt="Fabric Texture"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Part 2: Values - Editorial List */}
            <div className="max-w-[1920px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-serif italic text-white/50">The Auryah Standard</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-5 border-t border-white/10">
                    {[
                        { title: "Quality First", desc: "Every stitch counts." },
                        { title: "Elegance", desc: "Whispered, not shouted." },
                        { title: "Trust", desc: "Building relationships." },
                        { title: "Modernity", desc: "For the now." },
                        { title: "Growth", desc: "Intentional & slow." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="border-b md:border-b-0 md:border-r border-white/10 p-10 hover:bg-white/5 transition-colors duration-500 group min-h-[300px] flex flex-col justify-between"
                        >
                            <span className="text-[10px] text-gray-500 group-hover:text-brand-gold transition-colors">0{i + 1}</span>
                            <div>
                                <h3 className="text-2xl font-serif mb-4 group-hover:tracking-wider transition-all duration-500">{item.title}</h3>
                                <p className="text-sm font-sans text-gray-400 group-hover:text-gray-200 transition-colors uppercase tracking-widest">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Closing Statement */}
            <div className="max-w-4xl mx-auto px-6 text-center mt-40">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-serif leading-tight mb-12"
                >
                    "Auryah Vastram isn’t about wearing someone else’s idea of fashion. It’s about finding pieces that feel <span className="text-brand-gold italic">effortlessly yours</span>."
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.25em] hover:bg-brand-gold hover:text-white transition-colors"
                >
                    Join The Journey
                </motion.button>
            </div>
        </div>
    );
}
