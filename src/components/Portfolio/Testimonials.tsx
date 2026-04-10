"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const REVIEWS = [
  {
    name: "Alexia Vance",
    role: "CMO, Horizon Luxury",
    text: "KloutKrew didn't just build a website; they engineered an experience. Our conversion rates doubled within the first month.",
  },
  {
    name: "Julian Wright",
    role: "Founder, Wright Architecture",
    text: "The sheer attention to detail and flawless animations make our digital presence as premium as the physical spaces we design.",
  },
  {
    name: "Sophia Chen",
    role: "Director, Elevate Global",
    text: "A masterclass in modern web development. They understand luxury, aesthetics, and performance like no other agency.",
  },
  {
    name: "Marcus Thorne",
    role: "CEO, Thorne & Co",
    text: "Working with them was a revelation. Their technical prowess is matched only by their incredible eye for high-end design.",
  },
  {
    name: "Elena Rossi",
    role: "Creative Director, Voda",
    text: "The most professional agency we've ever partnered with. The final product exceeded all our expectations.",
  }
];

const DUPLICATED_REVIEWS = [...REVIEWS, ...REVIEWS];

const TestimonialCard = ({ review }: { review: typeof REVIEWS[0] }) => (
  <div className="w-[350px] sm:w-[450px] shrink-0 px-4">
    <div className="group relative rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-10 transition-all hover:border-gold/30 hover:bg-white/[0.04]">
      <div className="absolute top-8 right-10 text-gold/20 group-hover:text-gold/40 transition-colors">
        <Quote size={40} />
      </div>
      
      <div className="mb-8 flex gap-1">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      
      <p className="mb-10 font-sans text-xl font-light leading-relaxed text-white/80 italic">
        "{review.text}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gold/40 to-transparent border border-white/10 flex items-center justify-center text-white font-serif font-bold text-xl">
          {review.name.charAt(0)}
        </div>
        <div>
          <div className="font-accent text-sm font-bold uppercase tracking-wider text-white">
            {review.name}
          </div>
          <div className="mt-1 text-xs text-gold/80">
            {review.role}
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-b from-gold/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  </div>
);

export const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-[#080808] py-32">
      <div className="container mx-auto px-6 max-w-7xl mb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-xs font-medium uppercase tracking-widest text-gold"
        >
          Client Praise
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl text-white md:text-7xl"
        >
          Voices Of <span className="text-gold italic font-light">Excellence.</span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-[#080808] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-[#080808] to-transparent" />
        
        <motion.div 
          ref={carouselRef}
          className="flex"
          animate={{ x: [0, -width] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40,
            repeatType: "loop"
          }}
        >
          {DUPLICATED_REVIEWS.map((review, i) => (
            <TestimonialCard key={i} review={review} />
          ))}
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="container mx-auto max-w-7xl mt-24 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5 bg-white/[0.01] rounded-3xl">
          {[
            { label: "Client Satisfaction", value: "100%" },
            { label: "Repeat Business", value: "92%" },
            { label: "NPS Score", value: "88" },
            { label: "Avg. ROI Increase", value: "2.5x" }
          ].map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-3xl font-serif text-gold mb-2">{stat.value}</div>
              <div className="text-[10px] font-accent uppercase tracking-[0.2em] text-white/30">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
