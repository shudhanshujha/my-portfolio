"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { SmokeBackground } from "../ui";

export const About = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0.4, 0.7], [100, -100]);

  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Lines of Code", value: "250K+" },
    { label: "Happy Clients", value: "35+" },
    { label: "Design Awards", value: "12" },
  ];

  return (
    <section id="expertise" className="relative min-h-screen overflow-hidden bg-background py-32">
      <SmokeBackground smokeColor="#d4af37" className="opacity-20" />
      
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-xs font-medium uppercase tracking-widest text-gold">
              Our Expertise
            </div>
            <h2 className="font-serif text-5xl text-white md:text-7xl leading-tight">
              Crafting The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold italic font-light">Digital Future.</span>
            </h2>
            <p className="mt-8 max-w-xl font-sans text-xl text-white/50 font-light leading-relaxed">
              KloutKrew is a premier design and development collective. We don't just build websites; we engineer immersive digital experiences that blend technical precision with absolute artistic vision.
            </p>

            <div className="mt-16 grid grid-cols-2 gap-x-12 gap-y-10">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                >
                  <div className="text-4xl font-serif font-light text-gold">{stat.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30 font-accent">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y: yParallax }}
            className="relative flex justify-center"
          >
            <div className="relative aspect-[4/5] w-full max-w-md rounded-3xl overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent z-10 opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
               <img 
                 src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop" 
                 alt="Innovative Technology" 
                 className="h-full w-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-1000 scale-110 group-hover:scale-100"
               />
               
               {/* Floating elements */}
               <motion.div 
                 animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -right-6 top-1/4 rounded-2xl bg-black/40 border border-white/10 p-6 text-xs font-accent font-bold tracking-widest text-gold z-20"
               >
                 REACT 19 + NEXT
               </motion.div>
               <motion.div 
                 animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                 transition={{ duration: 7, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                 className="absolute -left-10 bottom-1/4 rounded-2xl bg-black/40 border border-white/10 p-6 text-xs font-accent font-bold tracking-widest text-white/80 z-20"
               >
                 WEBGL SHADERS
               </motion.div>

               <div className="absolute inset-0 border-[20px] border-background/20 pointer-events-none z-30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
