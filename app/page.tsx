"use client";

import React, { useEffect, useState } from 'react';
import {
  Menu, Search, User, ShoppingBag, ArrowDown, Play,
  ChevronDown, Quote, Instagram, Facebook, ArrowUp
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

export default function Home() {
  // --- Smooth Scroll (Lenis) ---
  useEffect(() => {
    let lenis: any;
    import('lenis').then((LenisModule) => {
      try {
        const Lenis = LenisModule.default || LenisModule;
        // @ts-ignore
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (e) {
        console.warn("Lenis init failed", e);
      }
    });
    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  // --- Physics-Based Custom Cursor ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring config for smooth "magnetic" feel
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', () => setIsClicking(true));
    window.addEventListener('mouseup', () => setIsClicking(false));
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', () => setIsClicking(true));
      window.removeEventListener('mouseup', () => setIsClicking(false));
    };
  }, [mouseX, mouseY]);

  // Hover handlers
  const hoverCursor = () => setIsHovered(true);
  const unhoverCursor = () => setIsHovered(false);

  // --- Parallax Hooks ---
  const { scrollY } = useScroll();
  // Transform scroll Y for parallax elements
  const yHero = useTransform(scrollY, [0, 1000], [0, 150]); // Hero image moves slower
  const yGolden = useTransform(scrollY, [0, 4000], [0, -300]); // Golden Hour Parallax

  // --- Back to Top Visibility ---
  const backToTopOpacity = useTransform(scrollY, [0, 500], [0, 1]);
  const backToTopY = useTransform(scrollY, (value) => value > 500 ? 0 : 20);
  const backToTopPointerEvents = useTransform(scrollY, (value) => value > 500 ? "auto" : "none");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- FAQ State ---
  const [faqOpen, setFaqOpen] = useState<{ [key: string]: boolean }>({
    faq1: false, faq2: false, faq3: false, faq4: false, faq5: false
  });
  const toggleFaq = (id: string) => setFaqOpen(prev => ({ ...prev, [id]: !prev[id] }));

  // --- REFINED ANIMATION VARIANTS (Luxury Feel) ---
  const transition = { duration: 1.4, ease: [0.25, 1, 0.5, 1] as any }; // Ultra smooth easing

  const scaleReveal = {
    hidden: { opacity: 0, scale: 0.98 }, // Less aggressive scaling
    visible: { opacity: 1, scale: 1, transition }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 }, // Reduced distance
    visible: { opacity: 1, y: 0, transition }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] as any } }
  };

  return (
    <div className="antialiased overflow-x-hidden selection:bg-brand-gold selection:text-white bg-[#fafaf9] text-[#1c1917] min-h-screen cursor-none">

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-black rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 border border-brand-black/50 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovered ? 60 : 40,
          height: isHovered ? 60 : 40,
          backgroundColor: isHovered ? "rgba(197, 160, 89, 0.1)" : "transparent",
          borderColor: isHovered ? "#C5A059" : "rgba(28, 25, 23, 0.3)",
          scale: isClicking ? 0.9 : 1
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Navigation */}


      {/* Hero Section */}
      <header className="relative pt-20 min-h-screen flex flex-col md:flex-row border-b border-[#1c1917]/5 overflow-hidden">
        <div className="w-full md:w-[45%] flex flex-col justify-center px-8 md:px-20 py-12 md:py-0 border-r border-[#1c1917]/5 bg-[#fafaf9] relative order-2 md:order-1 z-10">
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            className="stagger-text"
          >
            <motion.div variants={staggerItem} className="overflow-hidden mb-6">
              <span className="inline-block font-sans text-[10px] tracking-[0.3em] text-brand-gold uppercase border border-brand-gold/30 px-3 py-1 rounded-full">Contemporary Ethnic</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="font-serif text-4xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[0.9] text-brand-black mb-6 md:mb-10">
              Where Style <br />
              <span className="italic font-light text-brand-gray/80">Meets</span> <br />
              Substance
            </motion.h2>
            <motion.p variants={staggerItem} className="font-sans text-brand-gray text-sm leading-8 max-w-sm mb-12">
              Thoughtfully Curated. From versatile tops to statement one-pieces, every garment is selected to be an extension of your modern identity.
            </motion.p>
            <motion.div variants={staggerItem} className="flex gap-8 items-center">
              <a href="#categories" className="group flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-black hover:text-brand-gold transition-colors duration-300 hoverable" onMouseEnter={hoverCursor} onMouseLeave={unhoverCursor}>
                Shop Categories
                <span className="block h-[1px] w-8 bg-brand-black group-hover:bg-brand-gold transition-all duration-300"></span>
              </a>
            </motion.div>
          </motion.div>

          <div className="absolute left-20 bottom-12 hidden md:flex items-center gap-4 opacity-50">
            <span className="font-sans text-[9px] tracking-[0.2em] text-brand-gray uppercase rotate-90 origin-left translate-y-full">Scroll Down</span>
          </div>
        </div>

        <div className="w-full md:w-[55%] h-[60vh] md:h-auto relative overflow-hidden order-1 md:order-2 group">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] as any }}
            className="w-full h-full absolute inset-0"
          >
            <motion.img
              style={{ y: yHero }}
              src="https://www.globalbrandsmagazine.com/wp-content/uploads/2021/06/pexels-freestocksorg-291762.jpg"
              className="w-full h-[120%] object-cover object-top -mt-10 hoverable"
              alt="Modern Ethnic Fashion"
              onMouseEnter={hoverCursor} onMouseLeave={unhoverCursor}
            />
          </motion.div>

          <div className="absolute bottom-0 left-0 bg-white p-4 md:p-8 z-20 flex items-center gap-4 border-t border-r border-black/5">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center cursor-pointer hover:bg-brand-black hover:text-white transition-all duration-300 group hoverable" onMouseEnter={hoverCursor} onMouseLeave={unhoverCursor}>
              <Play className="w-2.5 h-2.5 md:w-4 md:h-4 fill-current ml-0.5" />
            </div>
            <span className="font-serif text-sm italic text-brand-black">Watch Campaign</span>
          </div>
        </div>
      </header>

      {/* Marquee - Smoother CSS Animation */}
      <div className="border-b border-[#1c1917]/5 py-4 overflow-hidden bg-white/50 backdrop-blur-sm">
        <div className="whitespace-nowrap flex animate-marquee items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-xl md:text-3xl font-serif px-8 text-brand-black/60 italic font-light">Quality First</span>
              <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
              <span className="text-xl md:text-3xl font-serif px-8 text-brand-black/60 italic font-light">Elegance Over Excess</span>
              <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
              <span className="text-xl md:text-3xl font-serif px-8 text-brand-black/60 italic font-light">Modern Femininity</span>
              <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Browse By Category */}
      <section id="categories" className="py-32 max-w-[1920px] mx-auto px-6 bg-[#fafaf9]">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-end mb-20"
        >
          <div>
            <h3 className="font-serif text-3xl md:text-5xl text-brand-black mb-3">The Essentials</h3>
            <p className="font-sans text-[10px] text-brand-gray tracking-[0.2em] uppercase">Browse by Category</p>
          </div>
          <a href="#" className="hidden md:block font-sans text-[9px] font-bold uppercase tracking-[0.2em] border-b border-brand-black/20 pb-1 hover:border-brand-black transition-colors hoverable" onMouseEnter={hoverCursor} onMouseLeave={unhoverCursor}>View Full Catalog</a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 h-auto md:min-h-[850px]">
          {/* One Piece - Large Card */}
          <motion.a
            href="#"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={scaleReveal}
            className="md:col-span-5 relative group overflow-hidden hoverable h-[550px] md:h-auto rounded-sm" onMouseEnter={hoverCursor} onMouseLeave={unhoverCursor}
          >
            <div className="w-full h-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt="One Piece" />
            </div>
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-700"></div>
            <div className="absolute bottom-8 left-8 z-20">
              <span className="block text-white/80 text-[10px] tracking-[0.3em] uppercase mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">Collection 2026</span>
              <h4 className="font-serif text-6xl text-white italic group-hover:tracking-wide transition-all duration-700">One Piece</h4>
            </div>
          </motion.a>

          {/* Right Column */}
          <div className="md:col-span-7 grid grid-cols-2 gap-6 md:gap-8">
            {/* Top Wear */}
            <motion.a
              href="#"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={scaleReveal}
              className="col-span-2 relative group overflow-hidden hoverable h-[350px] md:h-[500px] rounded-sm" onMouseEnter={hoverCursor} onMouseLeave={unhoverCursor}
            >
              <div className="w-full h-full overflow-hidden">
                <img src="https://www.younari.com/cdn/shop/products/April2019-1259_1024x1024_76968a68-7984-4562-a19c-ce6bde892fed_800x.jpg?v=1563543872" className="w-full h-full object-cover object-top transition-transform duration-[1.6s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt="Top Wear" />
              </div>
              <div className="absolute top-8 right-8 text-right z-20 mix-blend-difference">
                <h4 className="font-serif text-5xl text-white mb-2">Top Wear</h4>
                <span className="block w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></span>
              </div>
            </motion.a>

            {/* Bottom Wear */}
            <motion.a
              href="#"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={scaleReveal}
              className="col-span-1 relative group overflow-hidden hoverable h-[300px] md:h-[350px] rounded-sm" onMouseEnter={hoverCursor} onMouseLeave={unhoverCursor}
            >
              <div className="w-full h-full overflow-hidden">
                <img src="https://5.imimg.com/data5/SELLER/Default/2024/2/391194354/XW/JX/YJ/41319745/light-moss-green-1-500x500.jpg" className="w-full h-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt="Bottom Wear" />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-700 flex items-center justify-center">
                <div className="text-center border border-white/40 p-6 w-[85%] h-[85%] flex flex-col items-center justify-center transform scale-95 group-hover:scale-100 transition-transform duration-700">
                  <h4 className="font-serif text-2xl text-white">Bottom Wear</h4>
                </div>
              </div>
            </motion.a>

            {/* Jewellery */}
            <motion.a
              href="#"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={scaleReveal}
              className="col-span-1 relative group overflow-hidden hoverable h-[300px] md:h-[350px] rounded-sm" onMouseEnter={hoverCursor} onMouseLeave={unhoverCursor}
            >
              <div className="w-full h-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt="Jewellery" />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-serif text-xl text-brand-black mb-1">Jewellery</h4>
                <p className="font-sans text-[9px] uppercase tracking-widest text-brand-gray">Handpicked</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Redesigned Story Section (OVERHAULED) */}
      <section className="relative py-32 bg-white" id="about">
        <div className="max-w-[1920px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Sticky Image Column */}
            <div className="lg:col-span-5 sticky top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={transition}
                className="relative"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                  <img src="https://media.istockphoto.com/id/854321536/photo/look-at-this-gorgeous-dress.jpg?s=612x612&w=0&k=20&c=UyxEiEddYEFQPAoopwYs-_8xJ5vp0vKE0Sl3GnrQpK8="
                    className="w-full h-full object-cover"
                    alt="The Muse" />
                </div>
                {/* Decorative overlay card */}
                <div className="absolute -bottom-10 -right-10 bg-[#fafaf9] p-8 max-w-xs shadow-xl hidden md:block border border-[#1c1917]/5 z-20">
                  <p className="font-serif italic text-2xl text-brand-black leading-snug">&quot;Fashion that speaks to the soul of the modern woman.&quot;</p>
                </div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 lg:pl-16 space-y-24 pt-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <motion.span variants={staggerItem} className="text-brand-gold font-sans text-[10px] tracking-[0.4em] uppercase block mb-6">The Origin</motion.span>
                <motion.h3 variants={staggerItem} className="font-serif text-4xl md:text-6xl text-brand-black mb-8 leading-tight">Built on Belief & <br /><span className="italic text-brand-gray">Family Values</span></motion.h3>
                <motion.p variants={staggerItem} className="font-sans text-brand-gray/80 leading-8 text-lg mb-8">
                  Founded in November 2025 by Sakshi Gupta. Auryah Vastram began with a simple conviction: that women deserve fashion that’s as thoughtful as they are. Like many women, Sakshi struggled to find clothing that balanced elegance, comfort, and value—this gap became Auryah Vastram.
                </motion.p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div variants={staggerItem}>
                  <h4 className="font-serif text-2xl text-brand-black mb-4">Family Driven</h4>
                  <p className="font-sans text-brand-gray/80 leading-7 text-sm">
                    What started as one woman’s vision—supported by family—has grown into a trusted destination. Alongside Sakshi, Co-Founders <strong className="text-brand-black font-medium">Rekha Yadav</strong> and <strong className="text-brand-black font-medium">Seema Soni</strong> ensure every piece meets our standard of modern femininity.
                  </p>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <h4 className="font-serif text-2xl text-brand-black mb-4">Your Styling Partner</h4>
                  <p className="font-sans text-brand-gray/80 leading-7 text-sm">
                    Auryah Vastram isn’t about wearing someone else’s idea of fashion. It’s about finding pieces that feel effortlessly yours. Our vision is to become your complete styling partner, offering elegance over excess.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <a href="#new" className="inline-block bg-brand-black text-white px-10 py-4 font-sans text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold transition-colors duration-300 hoverable" onMouseEnter={hoverCursor} onMouseLeave={unhoverCursor}>
                  Discover The Story
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid - Polished Cards */}
      <section id="new" className="max-w-[1920px] mx-auto px-6 py-32 border-t border-[#1c1917]/5">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <h3 className="font-serif text-4xl text-brand-black">The Curated Edit</h3>
          <a href="#" className="hidden md:block font-sans text-[10px] font-bold uppercase tracking-[0.2em] border-b border-brand-black/20 pb-1 hover:border-brand-black transition-colors hoverable">View All Products</a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "The Avani Top", price: "₹ 1,250", desc: "Mustard Silk", img: "https://quabofficial.com/cdn/shop/files/F5D384D7-8BA8-4BF4-BB1D-4BB1BF0EE694.jpg?v=1742976632", new: true },
            { name: "Flowing Palazzos", price: "₹ 1,100", desc: "Emerald Green", img: "https://static.zara.net/assets/public/268c/839b/dbb24bb5b7ce/10189a03ad68/01255515528-p/01255515528-p.jpg?ts=1752075651845&w=744&f=auto" },
            { name: "Midnight Maxi", price: "₹ 1,650", desc: "Navy Blue", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2574&auto=format&fit=crop" },
            { name: "Heritage Jhumkas", price: "₹ 1,350", desc: "Gold Plated", img: "https://images.unsplash.com/photo-1602751584552-8ba42d523f17?q=80&w=2574&auto=format&fit=crop" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.25, 1, 0.5, 1] as any }}
              className="group"
            >
              <div className="relative overflow-hidden mb-6 aspect-[3/4] hoverable bg-gray-100" onMouseEnter={hoverCursor} onMouseLeave={unhoverCursor}>
                <div className="w-full h-full overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt={item.name} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                  <button className="w-full bg-white/95 backdrop-blur-sm text-brand-black py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-colors duration-300 shadow-xl">Quick Add</button>
                </div>
                {item.new && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white text-brand-black text-[9px] px-3 py-1 uppercase tracking-widest font-bold">New</span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <h4 className="font-serif text-xl text-brand-black mb-1 group-hover:text-brand-gold transition-colors duration-300">{item.name}</h4>
                <p className="font-sans text-[10px] text-brand-gray mb-2 uppercase tracking-wide">{item.desc}</p>
                <p className="font-sans text-sm font-medium text-brand-black">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Auryah Standard */}
      <section className="bg-[#fafaf9] py-32 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1920px]">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-32"
          >
            <span className="text-brand-gold text-[10px] tracking-[0.4em] uppercase block mb-4">Our Philosophy</span>
            <h2 className="font-serif text-4xl md:text-6xl text-brand-black">The Auryah Standard</h2>
          </motion.div>

          {[
            { title: "Conscious Curation", img: "https://lifestyle.sustainability-directory.com/wp-content/uploads/2025/11/Biophilic-Interior-Vignette-Showcasing-Sustainable-Materiality-and-Wellness-Aesthetics.jpg", text: "We don't just sell clothes; we curate emotions. Every fabric is hand-selected from trusted manufacturers.", tag: "Quality First", reverse: false },
            { title: "Modern Heritage", img: "https://i.pinimg.com/736x/11/a1/fa/11a1fae59c17f78a38c24a7e3078760a.jpg", text: "Bridging the gap between ancient looms and modern silhouettes. Elegance over excess.", tag: "Timeless Style", reverse: true },
            { title: "Intentional Luxury", img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2574", text: "Trust and consistency are our hallmarks. We focus on intentional growth.", tag: "Trust & Value", reverse: false },
          ].map((item, i) => (
            <div key={i} className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-32 mb-32`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={transition}
                className="w-full md:w-1/2"
              >
                <div className="w-full h-[500px] md:h-[650px] overflow-hidden rounded-sm shadow-xl relative group">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt={item.title} />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0"></div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`w-full md:w-1/2 ${item.reverse ? 'md:pl-12' : 'md:pr-12'} text-center md:text-left`}
              >
                <span className="text-[9px] uppercase tracking-[0.3em] text-brand-gold mb-4 block">{item.tag}</span>
                <h3 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 leading-tight">{item.title}</h3>
                <p className="font-sans text-brand-gray/80 leading-8 text-lg mb-8 max-w-md mx-auto md:mx-0">{item.text}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Fabric Studio - Texture Library */}
      <section className="py-0 bg-[#fafaf9] border-t border-[#1c1917]/5 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[90vh]">
          {[
            { name: 'Silk', desc: 'Opulent & Flowing', img: 'https://saroj.in/cdn/shop/files/WhatsAppImage2023-03-10at5.10.03PM_1_1024x1024.jpg?v=1728303404' },
            { name: 'Cotton', desc: 'Breathable Heritage', img: 'https://zelouffabrics.com/cdn/shop/articles/cotton_fabric.png?v=1689006116' },
            { name: 'Linen', desc: 'Earthly Texture', img: 'https://thumbs.dreamstime.com/b/close-up-textured-linen-fabric-elegant-folds-soft-light-play-swapping-out-fabrics-to-wool-textile-concept-natural-408048186.jpg' }
          ].map((fab, i) => (
            <motion.div
              key={fab.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="relative group overflow-hidden border-r border-[#1c1917]/5 last:border-r-0 h-[60vh] md:h-full"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10"></div>
              <img src={fab.img} className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt={fab.name} />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 mix-blend-difference w-full px-4">
                <h3 className="font-serif text-4xl md:text-7xl text-white mb-4 tracking-tight">{fab.name}</h3>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/80 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">{fab.desc}</p>
              </div>

              <div className="absolute bottom-8 left-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block">
                <div className="h-[1px] w-full bg-white/30"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Diaries - Carousel Style */}
      <section className="py-32 bg-[#fafaf9] border-t border-b border-[#1c1917]/5">
        <div className="max-w-[1920px] mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-20">
            <span className="text-brand-gold text-[10px] tracking-[0.4em] uppercase block mb-4">Real Women</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black">Client Diaries</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1572427027557-0a4270a240d9?q=80&w=2574", quote: "Absolutely stunning fit.", name: "Radhika P." },
              { img: "https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?q=80&w=2574", quote: "The silk is divine.", name: "Sanya M." },
              { img: "https://images.unsplash.com/photo-1627932882269-8051756543b5?q=80&w=2687", quote: "Perfect for the festive season.", name: "Tanvi K." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }}
                className="relative group h-[500px] overflow-hidden hoverable rounded-sm" onMouseEnter={hoverCursor} onMouseLeave={unhoverCursor}
              >
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" alt="Client" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-10 left-10 text-white text-left max-w-[80%]">
                  <p className="font-serif italic text-xl md:text-2xl mb-4 leading-relaxed">&quot;{item.quote}&quot;</p>
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase border-t border-white/30 pt-4 block w-full"> {item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gifting Edit */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] as any }}
            className="order-2 md:order-1 relative h-[600px] overflow-hidden shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)]" alt="Gifting" />
            <div className="absolute -bottom-12 -right-12 w-80 h-80 border border-brand-gold hidden md:block pointer-events-none opacity-50"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] as any }}
            className="order-1 md:order-2"
          >
            <span className="text-brand-gold text-[10px] tracking-[0.4em] uppercase block mb-6">Celebrate</span>
            <h2 className="font-serif text-4xl md:text-6xl text-brand-black mb-6 md:mb-8 leading-tight">The Gifting <br /><span className="italic">Edit</span></h2>
            <p className="font-sans text-brand-gray/80 leading-8 text-lg mb-12 max-w-md">
              Wrap your love in layers of heritage. Discover curated gift sets perfect for weddings, festivities, or a thoughtful gesture for someone special.
            </p>
            <a href="#" className="inline-block border-b border-brand-black pb-1 uppercase tracking-widest text-[10px] font-bold hover:text-brand-gold hover:border-brand-gold transition-colors hoverable py-2" onMouseEnter={hoverCursor} onMouseLeave={unhoverCursor}>Shop Curated Gifts</a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#fafaf9] border-b border-[#1c1917]/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
            <h3 className="font-serif text-3xl md:text-4xl text-brand-black mb-3">Curious Minds</h3>
            <p className="font-sans text-[10px] text-brand-gray tracking-[0.2em] uppercase">Frequently Asked Questions</p>
          </motion.div>

          <div className="space-y-4">
            {[
              { id: 'faq1', q: "Why are prices at your stall lower than the website?", a: "Prices offered at society exhibitions, pop-up stalls, and promotional events are special launch prices for customer acquisition and brand promotion. These are limited-time marketing offers and may not be available on our website or mobile application." },
              { id: 'faq2', q: "How can I request an exchange?", a: "You can request an exchange within 3 days of delivery by contacting our support team on WhatsApp or email with your order details. Our team will guide you through the simple exchange process." },
              { id: 'faq3', q: "How long does delivery take?", a: "Within India: 3–7 working days after dispatch. International Orders: 7–15 working days depending on the country and customs clearance. All orders are dispatched within 24–48 working hours." },
              { id: 'faq4', q: "Do you accept returns?", a: "Yes, we accept returns only in case of: Wrong product delivered, Damaged or defective product, or Major quality issue. For size issues or preference changes, we offer an easy exchange option." },
              { id: 'faq5', q: "Do you ship internationally?", a: "Yes, we ship worldwide. Please note that for international orders, customs duty or import taxes must be borne by the customer. Returns and exchanges are not available for international orders." }
            ].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border-b border-[#1c1917]/10 pb-4 hoverable" onMouseEnter={hoverCursor} onMouseLeave={unhoverCursor}
              >
                <button className="w-full flex justify-between items-center py-6 text-left focus:outline-none group" onClick={() => toggleFaq(item.id)}>
                  <span className="font-serif text-xl text-brand-black group-hover:text-brand-gold transition-colors duration-300">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-gray transition-transform duration-500 ${faqOpen[item.id] ? 'rotate-180' : ''}`} />
                </button>
                <div className={`text-brand-gray font-sans text-sm leading-relaxed overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${faqOpen[item.id] ? 'max-h-52 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                  {item.a}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Hour - Editorial Mosaic */}
      <section className="py-32 bg-[#fafaf9] overflow-hidden" id="collections">
        <div className="max-w-[1920px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Typography & Detail Column */}
            <div className="w-full md:w-[40%] flex flex-col justify-between">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <span className="block text-brand-gold tracking-[0.4em] uppercase text-[10px] mb-6">Spotlight Collection</span>
                <h2 className="font-serif text-5xl md:text-9xl text-brand-black leading-[0.9] md:leading-[0.85] mb-6 md:mb-8">Golden <br /><span className="italic font-light text-brand-gold pl-8 md:pl-12">Hour</span></h2>
                <p className="font-sans text-brand-gray/80 leading-7 text-sm max-w-sm ml-auto mr-0 md:mr-12 text-right">
                  Inspired by the amber hues of the setting sun over the Thar desert. Shimmering silks, intricate zari, and a warmth that transcends seasons.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={transition}
                className="mt-16 self-end w-[200px] aspect-[3/4] overflow-hidden"
              >
                <img src="https://images.unsplash.com/photo-1602751584552-8ba42d523f17?q=80&w=1500" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-grayscale duration-700" alt="Detail" />
              </motion.div>
            </div>

            {/* Hero Mosaic */}
            <div className="w-full md:w-[60%] relative h-[80vh]">
              {/* Back Landscape Image */}
              <motion.div
                style={{ y: useTransform(scrollY, [0, 4000], [0, -100]) }}
                className="absolute top-0 right-0 w-[90%] h-[70%] z-10"
              >
                <img src="https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=2670" className="w-full h-full object-cover shadow-2xl" alt="Golden Hour Landscape" />
              </motion.div>

              {/* Front Portrait Image */}
              <motion.div
                initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute bottom-0 left-0 w-[50%] h-[70%] z-[40] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] pointer-events-auto"
              >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFQhquMt55Txf7j6kyIsBrQ2YAhDpCXOVSw&s" className="w-full h-full object-cover" alt="Golden Hour Portrait" />
                <div className="absolute bottom-8 left-8 right-8">
                  <a href="#" className="block w-full bg-white/90 backdrop-blur text-brand-black text-center py-4 uppercase tracking-widest text-[10px] font-bold hover:bg-brand-black hover:text-white transition-colors">Explore The Edit</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter - Split Editorial "The Curator's Desk" */}
      <section className="bg-[#f5f5f4] text-brand-black overflow-hidden relative">
        <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
          {/* Left Visuals */}
          <div className="w-full md:w-1/2 relative h-[400px] md:h-full bg-gray-200 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[60%] z-10">
              <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1500" className="w-full h-full object-cover" alt="Fashion Mood" />
            </div>
            <div className="absolute bottom-0 right-0 w-[70%] h-[50%] z-20 border-t-[10px] border-l-[10px] border-[#f5f5f4]">
              <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1500" className="w-full h-full object-cover" alt="Detail" />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
            <span className="block text-brand-gold tracking-[0.3em] uppercase text-[10px] mb-6 font-bold">The Auryah Circle</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">Unveil the <br /><span className="italic font-light text-brand-gold">Exceptional</span></h2>
            <p className="font-sans text-brand-gray/80 text-sm mb-12 max-w-md leading-relaxed">
              Join our inner circle for early access to new collections, private styling notes, and invitations to exclusive events.
            </p>

            <form className="max-w-md relative">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-transparent border-b border-brand-black/20 py-4 pr-12 text-lg font-serif focus:outline-none focus:border-brand-black transition-colors placeholder:text-brand-black/30 placeholder:italic"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>




      {/* Back to top (Animated) */}
      <motion.button
        id="backToTop"
        onClick={scrollToTop}
        style={{
          y: backToTopY,
          opacity: backToTopOpacity,
          pointerEvents: backToTopPointerEvents
        }}
        className="fixed bottom-8 right-8 bg-brand-gold text-white p-4 rounded-full shadow-2xl z-50 hover:bg-brand-black transition-colors duration-300 hoverable"
        onMouseEnter={hoverCursor}
        onMouseLeave={unhoverCursor}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
