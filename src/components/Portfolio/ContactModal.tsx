"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, Send, Mail, Phone, ArrowRight } from "lucide-react";

export const ContactModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Function to open the dialog
  const openModal = () => {
    dialogRef.current?.showModal();
  };

  // Function to close the dialog
  const closeModal = () => {
    dialogRef.current?.close();
  };

  // Listen for custom events if we want to trigger it from outside
  useEffect(() => {
    const handleOpen = () => openModal();
    window.addEventListener('open-contact-modal', handleOpen);
    return () => window.removeEventListener('open-contact-modal', handleOpen);
  }, []);

  return (
    <>
      <section id="contact" className="relative bg-background py-32 px-4 md:px-8 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-30 grayscale brightness-50"
          >
            <source src="/bg-elevate.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background" />
        </div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/5 bg-white/[0.02] p-12 md:p-24 backdrop-blur-md overflow-hidden relative"
          >
            <h2 className="font-serif text-5xl text-white md:text-7xl mb-6 relative z-10">
              Ready to <span className="text-gold italic font-light">Elevate?</span>
            </h2>
            <p className="mx-auto max-w-2xl font-sans text-lg text-white/50 font-light mb-12 relative z-10">
              Partner with KloutKrew to transform your digital presence into a premium experience that commands attention and drives conversions.
            </p>
            <button
              onClick={openModal}
              className="group relative inline-flex overflow-hidden rounded-full bg-gold px-12 py-4 text-sm font-medium text-black transition-all hover:scale-105 z-10"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0" />
            </button>
          </motion.div>
        </div>
      </section>

      <dialog 
        id="contact-modal" 
        ref={dialogRef}
        className="backdrop:bg-black/80 backdrop:backdrop-blur-sm bg-transparent w-full max-w-5xl m-auto p-4 open:animate-in open:fade-in-0 open:zoom-in-95"
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/95 backdrop-blur-xl p-0 shadow-2xl">
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-yellow-200 to-gold" />
          
          <button
            onClick={closeModal}
            className="absolute right-6 top-6 z-10 text-white/40 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="bg-white/5 p-12 lg:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-4xl text-white">Get In Touch</h3>
                <p className="mt-4 text-white/50 font-light leading-relaxed">
                  Discuss your project with our expert team. We aim to respond within 24 hours.
                </p>

                <div className="mt-12 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gold/10 p-3 text-gold border border-gold/20">
                      <Mail size={20} />
                    </div>
                    <span className="text-white/80 font-light tracking-wide">aditya.anand1101@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gold/10 p-3 text-gold border border-gold/20">
                      <Phone size={20} />
                    </div>
                    <span className="text-white/80 font-light tracking-wide">+91 9990971008</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 lg:col-span-3">
              <form method="dialog" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40 ml-2">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/5 bg-white/[0.02] p-4 text-white placeholder-white/20 outline-none transition-all focus:border-gold/50 focus:bg-white/[0.05]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40 ml-2">Email</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full rounded-xl border border-white/5 bg-white/[0.02] p-4 text-white placeholder-white/20 outline-none transition-all focus:border-gold/50 focus:bg-white/[0.05]"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-2">Company / Project Name</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    className="w-full rounded-xl border border-white/5 bg-white/[0.02] p-4 text-white placeholder-white/20 outline-none transition-all focus:border-gold/50 focus:bg-white/[0.05]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-2">Project Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals, timeline, and budget..."
                    className="w-full rounded-xl border border-white/5 bg-white/[0.02] p-4 text-white placeholder-white/20 outline-none transition-all focus:border-gold/50 focus:bg-white/[0.05] resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  onClick={closeModal}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gold p-4 font-accent text-sm font-bold uppercase tracking-widest text-black transition-all hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Submit Inquiry <Send size={16} />
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};