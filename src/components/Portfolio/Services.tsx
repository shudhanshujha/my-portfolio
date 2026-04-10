"use client";
import { motion } from "framer-motion";
import { Layout, Database, Smartphone, Globe, Cpu } from "lucide-react";

const SERVICES = [
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Immersive digital interfaces crafted with precision, emotion, and absolute luxury aesthetics.",
    features: ["Visual Branding", "Wireframing", "Interaction Design"]
  },
  {
    icon: Code2,
    title: "Web Engineering",
    description: "High-performance, scalable web applications built with React 19, Next.js, and WebGL.",
    features: ["Frontend Development", "Custom CMS", "API Integration"]
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Bespoke mobile experiences that bring your brand to the palm of your customer's hand.",
    features: ["iOS & Android", "React Native", "Progressive Web Apps"]
  },
  {
    icon: Database,
    title: "Infrastructure",
    description: "Robust backend architectures designed for high availability and military-grade security.",
    features: ["Cloud Scaling", "DevOps", "Cyber Security"]
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Comprehensive data-driven strategies to dominate your industry and maximize conversion.",
    features: ["SEO Optimization", "Conversion Audit", "Market Analysis"]
  },
  {
    icon: Cpu,
    title: "Emerging Tech",
    description: "Harnessing the power of AI, Web3, and 3D rendering to future-proof your digital presence.",
    features: ["AI Integration", "3D WebGL", "Web3 Assets"]
  }
];

import { Code2 } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="relative py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-xs font-medium uppercase tracking-widest text-gold"
            >
              Our Capabilities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl text-white md:text-7xl leading-tight"
            >
              Elevating Brands <br />
              <span className="text-gold italic font-light">Through Tech.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-sm text-white/40 font-light leading-relaxed mb-4"
          >
            We provide a comprehensive suite of digital services designed to transform industry leaders into global icons.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-8 w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl text-white mb-6 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/40 font-light leading-relaxed mb-8 h-20">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-xs font-accent uppercase tracking-widest text-white/60">
                      <div className="w-1 h-1 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-gold/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
