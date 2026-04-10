import { useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './globals.css';

import { GradientNav, Hero } from './components/Portfolio/Hero';
import { BrandsMarquee } from './components/Portfolio/BrandsMarquee';
import { ContactModal } from './components/Portfolio/ContactModal';
import { Footer } from './components/Portfolio/Footer';

// Lazy load sections below the fold for faster initial paint
const About = lazy(() => import('./components/Portfolio/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./components/Portfolio/Services').then(m => ({ default: m.Services })));
const Process = lazy(() => import('./components/Portfolio/Process').then(m => ({ default: m.Process })));
const ProjectsGrid = lazy(() => import('./components/Portfolio/ProjectsGrid').then(m => ({ default: m.ProjectsGrid })));
const Testimonials = lazy(() => import('./components/Portfolio/Testimonials').then(m => ({ default: m.Testimonials })));

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
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
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <About />
        <Services />
        <Process />
        <ProjectsGrid />
        <Testimonials />
      </Suspense>
      <ContactModal />
      <Footer />
    </main>
  );
}

export default App;
