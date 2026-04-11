"use client"

import type React from "react"
import { useState, useEffect, useRef, useMemo } from "react"
import { motion, useSpring, useMotionValue, useInView } from "framer-motion"
import { cn } from "../../lib/utils"
import { SmokeBackground } from "./spooky-smoke-animation"
import StarButton from "./star-button"

interface ImageCard {
  id: string
  src: string
  alt: string
  rotation: number
}

interface ImageCarouselHeroProps {
  title: React.ReactNode
  description: string
  ctaText: string
  onCtaClick?: () => void
  images: ImageCard[]
  features?: Array<{
    title: string
    description: string
  }>
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    let timeoutId: number;
    function handleResize() {
      // Debounce resize to prevent layout thrashing
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 150);
    }
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
        window.clearTimeout(timeoutId);
    };
  }, []);

  return windowSize;
}

export function ImageCarouselHero({
  title,
  description,
  ctaText,
  onCtaClick,
  images,
  features = [],
}: ImageCarouselHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef)
  const { width } = useWindowSize();
  
  // High-precision motion values for parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Spring physics for "heavy" luxurious movement
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const [rotationAngle, setRotationAngle] = useState(0)

  useEffect(() => {
    if (!isInView) return;

    let rafId: number;
    let lastTime = performance.now();
    
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      setRotationAngle(prev => (prev + delta * 0.012) % 360);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isInView]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (width < 1024 || !isInView) return;
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  const radius = useMemo(() => {
    if (width < 640) return 180;
    if (width < 1024) return 280;
    return 450;
  }, [width]);

  const cardSize = useMemo(() => {
    if (width < 640) return { w: 180, h: 120 };
    if (width < 1024) return { w: 280, h: 180 };
    return { w: 420, h: 260 };
  }, [width]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center pt-24 pb-20 md:pt-40">
      <SmokeBackground smokeColor="#d4af37" className="opacity-20" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[30vw] h-[30vw] min-w-[300px] bg-gold/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] min-w-[300px] bg-gold/5 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4 mx-auto">
        <div
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] mb-8 lg:mb-12 touch-none flex items-center justify-center"
          onMouseMove={handleMouseMove}
        >
          <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}>
            {images.map((image, index) => (
              <CarouselCard 
                key={image.id}
                image={image}
                index={index}
                total={images.length}
                rotationAngle={rotationAngle}
                radius={radius}
                cardSize={cardSize}
                smoothMouseX={smoothMouseX}
                smoothMouseY={smoothMouseY}
                width={width}
              />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 text-center max-w-4xl mx-auto mb-12 lg:mb-20"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-medium text-white mb-6 lg:mb-10 leading-[1.1] tracking-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/50 mb-10 lg:mb-14 max-w-2xl mx-auto font-light leading-relaxed px-4">
            {description}
          </p>

          <StarButton
            text={ctaText}
            onClick={onCtaClick}
          />
        </motion.div>

        <div className="relative z-20 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "text-left p-6 sm:p-8 rounded-2xl",
                "bg-white/[0.04] border border-white/5",
                "hover:bg-white/[0.04] hover:border-gold/20 transition-all duration-500",
                "group cursor-default"
              )}
            >
              <h3 className="text-lg sm:text-xl font-accent font-bold uppercase tracking-wider text-white mb-2 group-hover:text-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Sub-component for individual cards to optimize rendering
function CarouselCard({ image, index, total, rotationAngle, radius, cardSize, smoothMouseX, smoothMouseY, width }: any) {
  const baseAngle = index * (360 / total);
  const currentAngle = (rotationAngle + baseAngle) % 360;
  const angleRad = currentAngle * (Math.PI / 180);
  
  const x = Math.cos(angleRad) * radius;
  const z = Math.sin(angleRad) * radius;
  
  // Use MotionValues for high-performance parallax
  const [pX, setPX] = useState(0);
  const [pY, setPY] = useState(0);

  useEffect(() => {
    return smoothMouseX.on("change", (v: number) => setPX((v - 0.5) * 45));
  }, [smoothMouseX]);

  useEffect(() => {
    return smoothMouseY.on("change", (v: number) => setPY((v - 0.5) * 45));
  }, [smoothMouseY]);

  const depthOpacity = (z + radius) / (radius * 2) * 0.9 + 0.1;

  return (
    <div
      className="absolute will-change-transform pointer-events-auto"
      style={{
        width: cardSize.w,
        height: cardSize.h,
        transform: `
          translate3d(${x}px, ${Math.sin(angleRad * 2) * 20}px, ${z}px)
          rotateY(${-currentAngle}deg)
          rotateX(${width >= 1024 ? pY : 0}deg)
          rotateY(${width >= 1024 ? pX : 0}deg)
        `,
        transformStyle: "preserve-3d",
        zIndex: Math.round(z + radius),
        opacity: depthOpacity,
        transition: 'opacity 0.5s ease'
      }}
    >
      <div
        className={cn(
          "relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl",
          "transition-all duration-700 hover:scale-105 hover:border-gold/50",
          "group bg-neutral-900"
        )}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 transform">
            <p className="text-[12px] uppercase tracking-[0.2em] text-gold font-bold truncate">{image.alt}</p>
        </div>
      </div>
    </div>
  )
}
