"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GlowCard, SmokeBackground } from "../ui";

const projects = [
  {
    title: "Movers & Packers",
    description: "Annum Movers and Packers service showcase website.",
    url: "https://annumoversandpackers.in/",
    image: "/projects/movers.png",
    glow: "gold" as const,
  },
  {
    title: "Puma Campaign",
    description: "High-energy Puma Hungry for More campaign page.",
    url: "https://puma-hungry-for-more.netlify.app/",
    image: "/projects/puma.png",
    glow: "blue" as const,
  },
  {
    title: "Ignite Dashboard",
    description: "Modern analytics and performance monitoring UI.",
    url: "https://ignite-gules.vercel.app/",
    image: "/projects/ignite.png",
    glow: "gold" as const,
  },
  {
    title: "Nexus Platform",
    description: "Advanced technology interface for modern platforms.",
    url: "https://nexus-three-ebon.vercel.app/",
    image: "/projects/nexus.png",
    glow: "blue" as const,
  },
  {
    title: "Farm Chronicle",
    description: "Agricultural portal for modern farming insights.",
    url: "https://www.farmchronicle.info/",
    image: "/projects/farm.png",
    glow: "gold" as const,
  },
  {
    title: "Aura Design System",
    description: "Minimalist, functional, and deeply emotive architectural design system.",
    url: "https://aura-snowy-sigma.vercel.app/",
    image: "/projects/aura.png",
    glow: "gold" as const,
  },
  {
    title: "Luxury Watch Clone",
    description: "Premium Franck Muller Smurfette Limited Edition Vanguard showcase.",
    url: "https://franck-muller-smurfette.netlify.app/",
    image: "/projects/watch.png",
    glow: "gold" as const,
  },
  {
    title: "Manifest Drives",
    description: "Automotive e-commerce platform for car enthusiasts.",
    url: "https://manifestdrives.shop/",
    image: "/projects/manifest.png",
    glow: "blue" as const,
  },
  {
    title: "Raj Industries",
    description: "Indigenous Combat Drone | Military-Grade Precision | Investor-Ready Platform.",
    url: "https://deft-syrniki-e62766.netlify.app/",
    image: "/projects/raj-industries.png",
    glow: "gold" as const,
  },
  {
    title: "Pagani Zonda R",
    description: "A family of extreme performance cars. Digital experience for the apex predator.",
    url: "https://starlit-faun-29fba1.netlify.app/",
    image: "/projects/pagani.png",
    glow: "gold" as const,
  },
];

export const ProjectsGrid = () => {
  return (
    <section id="work" className="relative min-h-screen bg-background py-32 px-4 md:px-8">
      <SmokeBackground smokeColor="#d4af37" className="opacity-20" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl text-white md:text-7xl"
          >
            Selected Works
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mx-auto mt-4 h-[1px] w-32 bg-primary origin-center"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <GlowCard glowColor={project.glow} className="group h-full flex flex-col p-4">
                <div className="relative overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center gap-4">
                     <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-black transition-colors">
                        <ExternalLink size={20} />
                     </a>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-grow text-sm text-white/50">
                    {project.description}
                  </p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className={`text-[10px] uppercase tracking-widest font-accent ${project.glow === 'pink' ? 'text-primary' : project.glow === 'gold' ? 'text-gold' : 'text-blue'}`}>
                      {project.glow} Showcase
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-accent uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                    >
                      View Live <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};