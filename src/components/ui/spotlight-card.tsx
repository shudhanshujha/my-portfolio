"use client";
import { useRef, useState, type HTMLAttributes, type ReactNode, type MouseEvent } from "react";
import { cn } from "../../lib/utils";

interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
  glowColor?: "pink" | "gold" | "blue";
  children: ReactNode;
}

export const GlowCard = ({
  glowColor = "gold",
  children,
  className,
  ...props
}: GlowCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const colors = {
    pink: "rgba(212, 175, 55, 0.4)", // Replaced pink with gold for premium feel
    gold: "rgba(212, 175, 55, 0.4)",
    blue: "rgba(91, 179, 228, 0.4)",
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[#161616] p-6 transition-colors duration-500 hover:border-white/20",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${colors[glowColor]}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
