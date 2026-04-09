import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const BRANDS = [
  "LVMH",
  "Rolex",
  "Porsche",
  "Four Seasons",
  "Cartier",
  "Sotheby's",
  "Vogue",
  "Gucci",
];

// Triple for ultra-wide screens to prevent empty space
const DUPLICATED_BRANDS = [...BRANDS, ...BRANDS, ...BRANDS];

export const BrandsMarquee = () => {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 3);
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden border-y border-white/5 bg-background py-10 sm:py-16">
      {/* Gradient Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-40 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-40 bg-gradient-to-l from-background to-transparent" />
      
      <div className="flex w-full overflow-hidden">
        <motion.div 
          ref={containerRef}
          animate={{ x: [0, -width] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 25,
            repeatType: "loop"
          }}
          className="flex w-max items-center will-change-transform"
        >
          {DUPLICATED_BRANDS.map((brand, i) => (
            <div key={`${brand}-${i}`} className="flex items-center px-8 sm:px-16">
              <span className="font-serif text-xl sm:text-3xl font-light text-white/20 transition-colors hover:text-gold cursor-default select-none">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
