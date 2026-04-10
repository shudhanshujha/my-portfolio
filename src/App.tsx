import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './globals.css';

import { GradientNav, Hero } from './components/Portfolio/Hero';
import { BrandsMarquee } from './components/Portfolio/BrandsMarquee';
import { Testimonials } from './components/Portfolio/Testimonials';
import { ProjectsGrid } from './components/Portfolio/ProjectsGrid';
import { About } from './components/Portfolio/About';
import { Process } from './components/Portfolio/Process';
import { Services } from './components/Portfolio/Services';
import { ContactModal } from './components/Portfolio/ContactModal';
import { Footer } from './components/Portfolio/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main className="relative bg-background font-sans text-white">
      <GradientNav />
      <Hero />
      <BrandsMarquee />
      <About />
      <Services />
      <Process />
      <ProjectsGrid />
      <Testimonials />
      <ContactModal />
      <Footer />
    </main>
  );
}

export default App;
