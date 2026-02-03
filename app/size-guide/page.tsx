"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SizeGuidePage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="block text-brand-gold tracking-[0.4em] uppercase text-[10px] mb-4">Fit Perfect</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-brand-black mb-6">Size Guide</h1>
                    <div className="font-sans text-gray-500 max-w-2xl mx-auto leading-relaxed space-y-4">
                        <p>
                            A proper Size Guide will save you from maximum exchanges and “size not fitting” arguments.
                        </p>
                        <p>
                            This size chart is made specially for Auryah Vastram considering:
                        </p>
                        <ul className="list-disc list-inside text-left mx-auto max-w-md space-y-2">
                            <li>You sell at stalls first (trial sometimes possible)</li>
                            <li>Then customers order online without trial</li>
                            <li>Indian body types (very important)</li>
                            <li>Kurtis, Tops, Dresses, Co-ord sets, Jeans</li>
                            <li>Easy for customers to measure at home</li>
                        </ul>
                    </div>
                </motion.div>

                {/* How to Measure Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-20 bg-[#fafaf9] p-8 md:p-12 rounded-sm"
                >
                    <h2 className="font-serif text-3xl mb-8 text-center">📏 How to Measure Yourself</h2>
                    <p className="text-center mb-8 text-gray-600 font-sans">Ask customers to measure with a measuring tape:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <ul className="space-y-6 text-sm text-gray-600 font-sans">
                                <li>
                                    <strong className="block text-black mb-1 uppercase tracking-wider text-xs">Bust</strong>
                                    Around the fullest part of chest
                                </li>
                                <li>
                                    <strong className="block text-black mb-1 uppercase tracking-wider text-xs">Waist</strong>
                                    Narrowest part of waist
                                </li>
                                <li>
                                    <strong className="block text-black mb-1 uppercase tracking-wider text-xs">Hips</strong>
                                    Widest part of hips
                                </li>
                                <li>
                                    <strong className="block text-black mb-1 uppercase tracking-wider text-xs">Length</strong>
                                    From shoulder to desired length
                                </li>
                            </ul>
                        </div>
                        <div className="h-64 md:h-full bg-white border border-gray-200 flex items-center justify-center p-8 text-center text-gray-400 italic font-serif">
                            {/* Placeholder for illustration */}
                            [Illustration Placeholder]
                        </div>
                    </div>
                </motion.div>


                {/* Upper Wear Chart Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="font-serif text-2xl mb-4 text-center">👗 Kurtis | Tops | Dresses | Co-ord Sets (Upper Wear)</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200 text-sm font-sans text-gray-700">
                            <thead>
                                <tr className="bg-[#fafaf9]">
                                    <th className="border border-gray-200 p-4 font-bold uppercase tracking-wider">Size</th>
                                    <th className="border border-gray-200 p-4 font-bold uppercase tracking-wider">Bust (in)</th>
                                    <th className="border border-gray-200 p-4 font-bold uppercase tracking-wider">Waist (in)</th>
                                    <th className="border border-gray-200 p-4 font-bold uppercase tracking-wider">Hips (in)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { size: 'XS', bust: '32', waist: '26', hips: '34' },
                                    { size: 'S', bust: '34', waist: '28', hips: '36' },
                                    { size: 'M', bust: '36', waist: '30', hips: '38' },
                                    { size: 'L', bust: '38', waist: '32', hips: '40' },
                                    { size: 'XL', bust: '40', waist: '34', hips: '42' },
                                    { size: 'XXL', bust: '42', waist: '36', hips: '44' },
                                    { size: '3XL', bust: '44', waist: '38', hips: '46' },
                                ].map((row, i) => (
                                    <tr key={i} className="text-center hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-200 p-4 font-bold">{row.size}</td>
                                        <td className="border border-gray-200 p-4">{row.bust}</td>
                                        <td className="border border-gray-200 p-4">{row.waist}</td>
                                        <td className="border border-gray-200 p-4">{row.hips}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 text-center font-sans space-y-1">
                        <p className="text-gray-600">👉 If your bust is 36, choose M</p>
                        <p className="text-gray-600">👉 If between two sizes, choose the bigger size for comfort fit.</p>
                    </div>
                </motion.div>

                {/* Bottom Wear Chart Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="font-serif text-2xl mb-4 text-center">👖 Jeans | Pants | Bottom Wear</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200 text-sm font-sans text-gray-700">
                            <thead>
                                <tr className="bg-[#fafaf9]">
                                    <th className="border border-gray-200 p-4 font-bold uppercase tracking-wider">Size</th>
                                    <th className="border border-gray-200 p-4 font-bold uppercase tracking-wider">Waist (in)</th>
                                    <th className="border border-gray-200 p-4 font-bold uppercase tracking-wider">Hips (in)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { size: '28', waist: '28', hips: '36' },
                                    { size: '30', waist: '30', hips: '38' },
                                    { size: '32', waist: '32', hips: '40' },
                                    { size: '34', waist: '34', hips: '42' },
                                    { size: '36', waist: '36', hips: '44' },
                                ].map((row, i) => (
                                    <tr key={i} className="text-center hover:bg-gray-50 transition-colors">
                                        <td className="border border-gray-200 p-4 font-bold">{row.size}</td>
                                        <td className="border border-gray-200 p-4">{row.waist}</td>
                                        <td className="border border-gray-200 p-4">{row.hips}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 text-center font-sans">
                        <p className="text-gray-600">👉 Measure waist where you normally wear jeans.</p>
                    </div>
                </motion.div>

                {/* Fit Type Guide */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <div className="bg-[#fafaf9] p-8 rounded-sm">
                        <h2 className="font-serif text-2xl mb-6 flex items-center gap-2">
                            <span>🧵</span> Fit Type Guide
                        </h2>
                        <ul className="space-y-4 font-sans text-gray-700">
                            <li><strong>Regular Fit</strong> – Comfortable daily wear</li>
                            <li><strong>Straight Fit</strong> – Slightly relaxed</li>
                            <li><strong>Slim Fit</strong> – Body fitted, choose one size bigger if unsure</li>
                            <li><strong>Free Size</strong> – Fits S to XL comfortably</li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-4 italic">(important for fewer returns)</p>
                    </div>

                    <div className="border border-brand-gold/30 p-8 rounded-sm bg-brand-gold/5">
                        <h2 className="font-serif text-2xl mb-6 flex items-center gap-2">
                            <span>⚠️</span> Important Note
                        </h2>
                        <p className="font-sans text-gray-700 leading-relaxed">
                            Sizes may vary slightly depending on fabric and style. If you are confused between two sizes, we recommend choosing the larger size for a better fit.
                        </p>
                    </div>
                </motion.div>

                {/* Help Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-center py-12 border-t border-gray-100"
                >
                    <h2 className="font-serif text-2xl mb-4 flex items-center justify-center gap-2">
                        <span>💬</span> Help Line
                    </h2>
                    <p className="text-gray-600 font-sans max-w-lg mx-auto mb-6">
                        Need help with size? WhatsApp us your measurements and we will suggest the perfect size for you.
                    </p>
                    <a
                        href="https://wa.me/91XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-black text-white px-8 py-3 uppercase tracking-wider text-sm hover:bg-brand-gold transition-colors duration-300"
                    >
                        Chat on WhatsApp
                    </a>
                </motion.div>

            </div>
        </div>
    );
}
