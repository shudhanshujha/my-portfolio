"use client";
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Expertise", href: "#expertise" },
        { name: "Process", href: "#process" },
        { name: "Selected Works", href: "#work" },
        { name: "Client Praise", href: "#testimonials" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "UI/UX Design", href: "#services" },
        { name: "Web Engineering", href: "#services" },
        { name: "Mobile Apps", href: "#services" },
        { name: "Strategy", href: "#services" },
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Twitter", href: "#" },
        { name: "LinkedIn", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "GitHub", href: "#" },
      ]
    }
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#050505] pt-32 pb-12 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[120px] -z-0" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <img src="/logo.png" alt="KloutKrew Logo" className="h-10 w-auto brightness-200 contrast-125" />
              <div className="text-2xl font-accent font-bold tracking-tighter text-white uppercase">
                KLOUT<span className="text-gold">KREW</span>
              </div>
            </div>
            <p className="text-white/40 font-light leading-relaxed max-w-sm mb-10">
              KloutKrew is a premier digital collective dedicated to engineering immersive experiences for the world's most ambitious brands.
            </p>
            <div className="flex gap-5">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-[10px] font-accent font-bold uppercase tracking-[0.3em] text-white/20 mb-8">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                        {link.name}
                        <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-accent font-bold uppercase tracking-[0.3em] text-white/20 mb-8">
              Stay Informed
            </h4>
            <p className="text-xs text-white/30 mb-6 leading-relaxed">
              Join our exclusive list for insights on digital luxury and technology.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs font-accent uppercase tracking-widest text-white focus:outline-none focus:border-gold/50 transition-colors"
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold transition-colors" size={16} />
              <button className="mt-4 w-full bg-gold py-4 rounded-2xl text-black text-[10px] font-accent font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-[10px] font-accent uppercase tracking-[0.2em] text-white/20">
            © {currentYear} KloutKrew. Engineered with Precision.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-[10px] font-accent uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-accent uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
