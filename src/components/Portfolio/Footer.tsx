"use client";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#080808] py-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-full max-w-7xl bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="KloutKrew Logo" className="h-10 w-auto brightness-200 contrast-125" />
              <div className="text-2xl font-accent font-bold tracking-tighter text-white">
                KLOUT<span className="text-gold">KREW</span>
              </div>
            </div>
            <p className="text-sm text-white/30">
              © 2026 KloutKrew. All rights reserved.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-white/40 hover:text-blue transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          <div className="text-right">
            <div className="text-xs font-accent uppercase tracking-widest text-white/30">
              Based in
            </div>
            <div className="mt-1 text-sm text-white/80">San Francisco, CA</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
