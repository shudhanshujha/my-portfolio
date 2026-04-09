"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ImageCarouselHero } from "../ui/ai-image-generator-hero";

export const GradientNav = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 z-[60] flex w-full items-center justify-between px-8 py-6 backdrop-blur-xl bg-background/50 border-b border-white/5"
    >
      <a href="/" className="flex items-center gap-3 group">
        <img src="/logo.png" alt="KloutKrew Logo" className="h-10 w-auto brightness-200 contrast-125" />
        <div className="hidden sm:block text-xl font-accent font-bold tracking-tighter text-white group-hover:text-gold transition-colors">
          KLOUT<span className="text-gold">KREW</span>
        </div>
      </a>
      <div className="hidden space-x-12 md:flex">
        {["Expertise", "Work", "Testimonials"].map((item) => (
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
        onClick={() => (document.getElementById('contact-modal') as HTMLDialogElement)?.showModal()}
        className="group relative overflow-hidden rounded-full bg-white px-8 py-3 text-xs font-accent font-bold uppercase tracking-widest text-black transition-all hover:scale-105"
      >
        <span className="relative z-10">Book a Call</span>
        <div className="absolute inset-0 bg-gold translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0" />
      </button>
    </motion.nav>
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

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <ImageCarouselHero
        title={
          <>
            Digital Excellence, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold italic font-light">
              Engineered.
            </span>
          </>
        }
        subtitle="KloutKrew Portfolio"
        description="We build bespoke, high-conversion web experiences for luxury brands and industry leaders. Elevate your digital presence with award-winning design and flawless execution."
        ctaText="Start Your Project"
        onCtaClick={() => (document.getElementById('contact-modal') as HTMLDialogElement)?.showModal()}
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
  );
};
