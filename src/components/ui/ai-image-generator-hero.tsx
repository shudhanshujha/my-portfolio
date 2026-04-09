"use client"

import type React from "react"
import { useState, useEffect, useRef, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "../../lib/utils"
import { SmokeBackground } from "./spooky-smoke-animation"

interface ImageCard {
  id: string
  src: string
  alt: string
  rotation: number
}

interface ImageCarouselHeroProps {
  title: React.ReactNode
  subtitle: string
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
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export function ImageCarouselHero({
  title,
  subtitle,
  description,
  ctaText,
  onCtaClick,
  images,
  features = [],
}: ImageCarouselHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [rotationAngle, setRotationAngle] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { width } = useWindowSize();

  // Optimized rotation using requestAnimationFrame for perfect smoothness
  useEffect(() => {
    let rafId: number;
    let lastTime = performance.now();
    
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      // 0.015 degrees per millisecond = ~0.9 degrees per frame at 60fps
      setRotationAngle(prev => (prev + delta * 0.015) % 360);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (width < 1024) return; // Disable mouse parallax on touch devices/small screens
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  const radius = useMemo(() => {
    if (width < 640) return 140;
    if (width < 1024) return 220;
    return 350;
  }, [width]);

  const cardSize = useMemo(() => {
    if (width < 640) return { w: 140, h: 90 };
    if (width < 1024) return { w: 220, h: 140 };
    return { w: 320, h: 200 };
  }, [width]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center pt-24 pb-20 md:pt-40">
      <SmokeBackground smokeColor="#d4af37" className="opacity-20" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[30vw] h-[30vw] min-w-[300px] bg-gold/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] min-w-[300px] bg-gold/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4 mx-auto">
        {/* Carousel Container */}
        <div
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] mb-8 lg:mb-12 touch-none"
          onMouseMove={handleMouseMove}
        >
          <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '2000px' }}>
            {images.map((image, index) => {
              const baseAngle = index * (360 / images.length);
              const currentAngle = (rotationAngle + baseAngle) % 360;
              const angleRad = currentAngle * (Math.PI / 180);
              
              const x = Math.cos(angleRad) * radius;
              const z = Math.sin(angleRad) * radius;
              
              const perspectiveX = width >= 1024 ? (mousePosition.x - 0.5) * 40 : 0;
              const perspectiveY = width >= 1024 ? (mousePosition.y - 0.5) * 40 : 0;

              const depthOpacity = (z + radius) / (radius * 2) * 0.9 + 0.1;

              return (
                <div
                  key={image.id}
                  className="absolute transition-opacity duration-300 will-change-transform"
                  style={{
                    width: cardSize.w,
                    height: cardSize.h,
                    transform: `
                      translate3d(${x}px, ${Math.sin(angleRad * 2) * 15}px, ${z}px)
                      rotateY(${-currentAngle}deg)
                      rotateX(${perspectiveY}deg)
                      rotateY(${perspectiveX}deg)
                    `,
                    transformStyle: "preserve-3d",
                    zIndex: Math.round(z + radius),
                    opacity: depthOpacity
                  }}
                >
                  <div
                    className={cn(
                      "relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden border border-white/10 shadow-2xl",
                      "transition-all duration-500 hover:scale-105 hover:border-gold/50",
                      "group bg-neutral-900"
                    )}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-2 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 transform">
                        <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-gold font-bold truncate">{image.alt}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 text-center max-w-4xl mx-auto mb-12 lg:mb-20"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-medium text-white mb-6 lg:mb-10 leading-[1.1] tracking-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/50 mb-10 lg:mb-14 max-w-2xl mx-auto font-light leading-relaxed px-4">
            {description}
          </p>

          <button
            onClick={onCtaClick}
            className={cn(
              "group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full overflow-hidden",
              "bg-gold text-black font-bold uppercase tracking-widest text-xs sm:text-sm transition-all hover:scale-105 active:scale-95"
            )}
          >
            <span className="relative z-10 flex items-center gap-2">
              {ctaText} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0" />
          </button>
        </motion.div>

        {/* Features Section */}
        <div className="relative z-20 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={cn(
                "text-left p-6 sm:p-8 rounded-2xl",
                "bg-white/[0.02] backdrop-blur-md border border-white/5",
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
