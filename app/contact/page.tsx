"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const transition = { duration: 1.2, ease: [0.25, 1, 0.5, 1] };

  return (
    <div className="bg-[#fafaf9] min-h-screen pt-32 pb-20">
      <div className="max-w-[1920px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-center mb-24"
        >
          <span className="block text-brand-gold tracking-[0.4em] uppercase text-[10px] mb-4">Get In Touch</span>
          <h1 className="font-serif text-5xl md:text-7xl text-brand-black">Contact Us</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 max-w-7xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="font-serif text-3xl text-brand-black mb-6">Visit Our Boutique</h3>
              <p className="font-sans text-brand-gray/80 leading-7 text-sm mb-6 max-w-md">
                Experience our collections in person. Our stylists are available for personal consultations by appointment.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-brand-black/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-brand-black" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-brand-black mb-1">Address</h4>
                    <p className="font-sans text-brand-gray/80 text-sm">123 Fashion Avenue, Design District<br />New Delhi, 110001, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-brand-black/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-brand-black" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-brand-black mb-1">Email</h4>
                    <a href="mailto:customercare@auryahvastram.com" className="font-sans text-brand-gray/80 text-sm hover:text-brand-gold transition-colors">customercare@auryahvastram.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-brand-black/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-brand-black" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-brand-black mb-1">WhatsApp & Support</h4>
                    <a href="https://wa.me/919321182597" className="font-sans text-brand-gray/80 text-sm hover:text-brand-gold transition-colors block">9321182597</a>
                    <p className="font-sans text-brand-gray/80 text-sm mt-1">10am to 8pm, Mon-Sat</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 md:h-80 w-full bg-gray-200 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1709664532168!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: 0.4 }}
            className="bg-white p-8 md:p-12 shadow-sm border border-[#1c1917]/5"
          >
            <h3 className="font-serif text-3xl text-brand-black mb-8">Send a Message</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-brand-black focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-400 font-serif"
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-brand-black focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-400 font-serif"
                  />
                </div>
              </div>

              <div className="group">
                <input
                  type="text"
                  placeholder="Subject (Optional)"
                  className="w-full bg-transparent border-b border-gray-200 py-3 text-brand-black focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-400 font-serif"
                />
              </div>

              <div className="group">
                <textarea
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full bg-transparent border-b border-gray-200 py-3 text-brand-black focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-400 font-serif resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
