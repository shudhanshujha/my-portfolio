"use client";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Discovery",
    description: "Deep dive into your brand architecture, target audience, and business objectives.",
    color: "gold"
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Creating high-fidelity, interactive prototypes that define the visual language.",
    color: "blue"
  },
  {
    icon: Code2,
    title: "Development",
    description: "Engineering robust, scalable code using the latest digital technologies.",
    color: "gold"
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Optimization, deployment, and global performance scaling.",
    color: "blue"
  }
];

export const Process = () => {
  return (
    <section id="process" className="relative py-32 px-6 overflow-hidden bg-[#050505]">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-xs font-medium uppercase tracking-widest text-gold"
          >
            Our Workflow
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl text-white md:text-7xl leading-tight"
          >
            The Path To <span className="text-gold italic font-light">Perfection.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-y-1/2" />
          
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group relative"
            >
              <div className="relative z-10 flex flex-col items-center text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-500">
                <div className={`mb-8 p-4 rounded-2xl bg-background border border-white/10 group-hover:scale-110 group-hover:border-gold/50 transition-all duration-500 text-gold`}>
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  {step.description}
                </p>
                <div className="mt-6 text-[10px] font-accent font-bold uppercase tracking-[0.3em] text-white/20 group-hover:text-gold/50 transition-colors">
                  Step 0{index + 1}
                </div>
              </div>
              
              {/* Decorative Background Glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
