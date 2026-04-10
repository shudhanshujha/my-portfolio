"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageCarouselHero } from "../ui/ai-image-generator-hero";
import { Sparkles } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919990971008";

export const HeroBanner = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#d4af37] py-3 z-[70]">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...Array(15)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 px-4">
            <span className="text-[12px] font-accent font-black uppercase tracking-[0.3em] text-black">
              ✦ Now Accepting Q3 Projects ✦ Luxury Brand Engineering ✦ Digital Excellence ✦
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const GradientNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 z-[60] flex w-full items-center justify-between px-10 py-6 backdrop-blur-xl bg-background/80 border-b border-white/5"
        >
          <a href="/" className="flex items-center gap-4 group">
            <img src="/logo.png" alt="KloutKrew Logo" className="h-14 w-auto brightness-200 contrast-125 transition-transform group-hover:scale-110" />
            <div className="hidden sm:block text-2xl font-accent font-bold tracking-tighter text-white group-hover:text-gold transition-colors">
              KLOUT<span className="text-gold">KREW</span>
            </div>
          </a>
          <div className="hidden space-x-12 md:flex">
            {["Expertise", "Process", "Work", "Testimonials"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-accent uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <button 
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className="group relative overflow-hidden rounded-full bg-white px-8 py-3 text-xs font-accent font-bold uppercase tracking-widest text-black transition-all hover:scale-105"
          >
            <span className="relative z-10">Book a Call</span>
            <div className="absolute inset-0 bg-gold translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0" />
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

const PROJECT_IMAGES = [
  { id: "1", src: "/projects/nexus.png", alt: "Nexus Platform", rotation: 0 },
  { id: "2", src: "/projects/manifest.png", alt: "Manifest Drives", rotation: 0 },
  { id: "3", src: "/projects/puma.png", alt: "Puma Campaign", rotation: 0 },
  { id: "4", src: "/projects/movers.png", alt: "Movers & Packers", rotation: 0 },
  { id: "5", src: "/projects/ignite.png", alt: "Ignite Dashboard", rotation: 0 },
  { id: "6", src: "/projects/farm.png", alt: "Farm Chronicle", rotation: 0 },
  { id: "7", src: "/projects/raj-industries.png", alt: "Raj Industries", rotation: 0 },
  { id: "8", src: "/projects/pagani.png", alt: "Pagani Zonda R", rotation: 0 },
];

export const HeroIntro = () => (
  <section className="relative pt-40 pb-10 bg-background overflow-hidden">
    <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/5 px-6 py-3"
      >
        <Sparkles className="h-4 w-4 text-gold" />
        <span className="text-xs font-accent font-bold uppercase tracking-[0.2em] text-gold">
          Engineering the Extraordinary
        </span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-serif text-6xl sm:text-8xl md:text-[10rem] text-white leading-[0.85] tracking-tighter"
      >
        Digital <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold italic font-light">
          Ascendance.
        </span>
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8"
      >
        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-white/20 hidden sm:block" />
        <p className="max-w-md text-sm sm:text-lg text-white/40 font-light leading-relaxed uppercase tracking-widest">
          Where Technical Mastery Meets Absolute Artistic Vision.
        </p>
        <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-white/20 hidden sm:block" />
      </motion.div>
    </div>
    
    {/* Background Elements */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[120px] animate-pulse" />
    </div>
  </section>
);

export const Hero = () => {
  return (
    <div className="bg-background">
      <HeroBanner />
      <HeroIntro />
      <section className="relative w-full overflow-hidden bg-background">
        <ImageCarouselHero
          title={
            <>
              Immersive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold italic font-light">
                Experiences.
              </span>
            </>
          }
          description="We build bespoke, high-conversion web experiences for luxury brands and industry leaders. Elevate your digital presence with award-winning design and flawless execution."
          ctaText="Book a Call"
          onCtaClick={() => window.open(WHATSAPP_URL, "_blank")}
          images={PROJECT_IMAGES}
          features={[
            {
              title: "Luxurious Design",
              description: "Crafting digital experiences that command attention and define your brand.",
            },
            {
              title: "Flawless Execution",
              description: "Pixel-perfect performance and smooth interactions across all digital touchpoints.",
            },
            {
              title: "High Conversion",
              description: "Strategic engineering that turns visitors into loyal customers and clients.",
            },
          ]}
        />
      </section>
    </div>
  );
};
