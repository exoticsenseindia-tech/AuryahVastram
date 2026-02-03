"use client";

import { motion } from "framer-motion";

const leaders = [
    {
        name: "Sakshi Gupta",
        role: "Founder",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
        bio: "The visionary behind Auryah, driven by a passion for authentic style."
    },
    {
        name: "Rekha Yadav",
        role: "Co-Founder",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop",
        bio: "Ensuring operational excellence and maintaining our quality standards."
    },
    {
        name: "Seema Soni",
        role: "Co-Founder",
        image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=1740&auto=format&fit=crop",
        bio: "Curating relationships and expanding the Auryah family."
    },
];

export function Leadership() {
    return (
        <section className="py-32 bg-white text-[#1c1917]">
            <div className="max-w-[1920px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-6 block">The Collective</span>
                    <h2 className="text-5xl md:text-7xl font-serif">Leadership</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 remove-gap"> {/* Minimal gap for editorial feel */}
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
                        >
                            <img
                                src={leader.image}
                                alt={leader.name}
                                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                <p className="text-[10px] uppercase tracking-[0.3em] mb-3 opacity-70 group-hover:opacity-100 transition-opacity delay-100">{leader.role}</p>
                                <h3 className="text-3xl md:text-4xl font-serif mb-4 italic">{leader.name}</h3>
                                <p className="font-sans text-sm opacity-0 group-hover:opacity-80 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 delay-200 border-l border-white/30 pl-4 max-w-xs">
                                    {leader.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
