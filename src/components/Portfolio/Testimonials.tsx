import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Alexia Vance",
    role: "CMO, Horizon Luxury",
    text: "KloutKrew didn't just build a website; they engineered an experience. Our conversion rates doubled within the first month.",
  },
  {
    name: "Julian Wright",
    role: "Founder, Wright Architecture",
    text: "The sheer attention to detail and flawless animations make our digital presence as premium as the physical spaces we design.",
  },
  {
    name: "Sophia Chen",
    role: "Director, Elevate Global",
    text: "A masterclass in modern web development. They understand luxury, aesthetics, and performance like no other agency.",
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative w-full bg-surface py-32 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl text-white md:text-6xl">
            Client <span className="text-gold italic font-light">Acclaim</span>
          </h2>
          <p className="mt-4 font-sans text-white/50">Don't just take our word for it.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-2xl border border-white/5 bg-background p-8 transition-all hover:border-gold/30 hover:bg-white/[0.02]"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mb-8 font-sans text-lg font-light leading-relaxed text-white/80">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <div className="font-accent text-sm font-bold uppercase tracking-wider text-white">
                  {review.name}
                </div>
                <div className="mt-1 text-xs text-gold/80">
                  {review.role}
                </div>
              </div>
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-gold/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
