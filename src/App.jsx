import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

export default function App() {
  useEffect(() => {
    // Cursor effect
    const updateCursorPosition = (e) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', updateCursorPosition);

    // Scroll reveal effect
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
          setTimeout(() => {
            entry.target.classList.remove('reveal', 'visible');
          }, 800);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const hiddenElements = document.querySelectorAll('.section-header, .project-card, .skill-card, .exp-item, .about-text, .stat-card, .tab-panel');
    hiddenElements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] overflow-hidden">
      <div className="cursor-glow" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
      </main>

      <footer className="footer" style={{ padding: '1.5rem 2rem', maxWidth: 1200, margin: '0 auto', width: '100%', justifyContent: 'center' }}>
        <p style={{ margin: 0 }}>Giridhar Jambunathan</p>
      </footer>
    </div>
  );
}
