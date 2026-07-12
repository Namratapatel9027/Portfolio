"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const formEl = e.currentTarget;
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/namratapatel091@gmail.com", {
        method: "POST",
        headers: {
            'Accept': 'application/json'
        },
        body: formData,
      });
      
      if (res.ok) {
        setStatus('success');
        formEl.reset();
        // Reset the loop back to idle state after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={<><span className="text-white">GET IN</span> <span className="text-gradient">TOUCH</span></>} 
          subtitle="Let's discuss how we can build intelligent solutions together." 
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
            <div className="flex items-start space-x-4">
              <div className="p-4 rounded-full bg-accent-cyan/10 text-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Email</h4>
                <p className="text-text-secondary mt-1">namratapatel091@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-4 rounded-full bg-accent-blue/10 text-accent-blue shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Location</h4>
                <p className="text-text-secondary mt-1">India, Pune</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#7BA0FC]/15 via-[#53D6FD]/15 to-[#8389FA]/15 backdrop-blur-xl border border-[#53D6FD]/30 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-[0_0_30px_rgba(83,214,253,0.15)]"
          >
            <div className="bg-gradient-glow pointer-events-none" />
            
            <form 
              onSubmit={handleSubmit}
              className="relative z-10 space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/90 pl-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-xl text-white placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan/50 transition-all shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/90 pl-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-xl text-white placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan/50 transition-all shadow-inner"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white/90 pl-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="_subject"
                  required
                  className="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-xl text-white placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:border-accent-purple/50 transition-all shadow-inner"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/90 pl-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-xl text-white placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all shadow-inner resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Ultra-Rounded Multi-State Animated Submit Button */}
              <motion.button 
                type="submit" 
                disabled={status === 'loading'}
                animate={status === 'loading' ? 'loading' : 'idle'}
                variants={{
                  idle: { backgroundColor: "#0ea5e9" }, // Sky Blue / Cyan
                  loading: { backgroundColor: "#8b5cf6" }, // Rich Mauve / Purple
                }}
                transition={{ duration: 0.3 }}
                className="btn-17 relative w-full h-14 rounded-full flex items-center justify-center hover:cursor-pointer hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-shadow duration-300 outline-none overflow-hidden mt-8"
                style={{ '--btn-fill': '#11222C', '--btn-speed': '0.35s', '--btn-skew': '-0.25' } as React.CSSProperties}
              >
                {/* State 1 & 3: Crisp White Uppercase Text */}
                <motion.span
                  initial={false}
                  animate={{ 
                    opacity: status === 'loading' ? 0 : 1, 
                    scale: status === 'loading' ? 0.8 : 1,
                    y: status === 'loading' ? -20 : 0
                  }}
                  transition={{ duration: 0.25 }}
                  className="absolute text-white font-bold font-sans uppercase tracking-widest text-sm text-container w-full h-full flex items-center justify-center"
                >
                  <span className="text flex items-center">
                    {status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed to send' : 'Send Message'}
                  </span>
                </motion.span>
                
                {/* State 2: Infinite Loading Spinner */}
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: status === 'loading' ? 1 : 0, 
                    scale: status === 'loading' ? 1 : 0.8,
                    y: status === 'loading' ? 0 : 20
                  }}
                  transition={{ duration: 0.25 }}
                  className="absolute flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                </motion.div>
              </motion.button>
              
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
