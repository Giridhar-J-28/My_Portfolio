import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : 'top'}`}>
      <div className="container">
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo" onClick={(e) => handleNav(e, 'home')}>
            <svg width="24" height="24" viewBox="0 0 32 32" style={{ marginRight: 6, flexShrink: 0 }}>
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#7430e8"/>
                  <stop offset="100%" stop-color="#0fa0bd"/>
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="7" fill="url(#logoGrad)"/>
              <text x="16" y="22" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-weight="bold" font-size="14">GJ</text>
            </svg>
            <span className="gradient-text">Giridhar</span><span>_</span><span>J</span>
          </a>

          <nav>
            <ul className="navbar-links">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleNav(e, id)}
                    className={activeSection === id ? 'active' : ''}
                  >
                    {label}
                    {activeSection === id && <span className="nav-active-bar" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar-right">
            <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleNav(e, id)}
            className={activeSection === id ? 'active' : ''}
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
