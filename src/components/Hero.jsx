import { useState, useEffect } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';

const roles = ['AI/ML Engineer', 'Problem Solver', 'Data-Driven Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    const speed = isDeleting ? 45 : 100;
    let timer;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((p) => isDeleting ? p.slice(0, -1) : fullText.slice(0, p.length + 1));
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      {/* Decorative orbs */}
      <div className="orb" style={{ width: 340, height: 340, background: 'var(--accent-1)', opacity: 0.07, top: '10%', left: '-5%' }} />
      <div className="orb" style={{ width: 280, height: 280, background: 'var(--accent-2)', opacity: 0.07, bottom: '15%', right: '-3%' }} />

      <div className="container">
        <div className="hero-grid">
          {/* ── Left column ── */}
          <div className="fade-up">
<h1 className="hero-h1">
              Hi, I'm <span className="gradient-text">Giridhar Jambunathan</span>
            </h1>

            <p className="hero-subtitle">
              I'm a &nbsp;<span className="typewriter">{currentText}<span className="cursor-blink" /></span>
            </p>

            <p className="hero-description">
              Aspiring AI/ML Engineer with expertise in machine learning, data analytics, and software development, focused on designing scalable intelligent applications and innovative AI solutions.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </a>
            </div>

            <div className="hero-socials">
              <span className="hero-socials-label">Follow Me:</span>
              <div className="social-icons">
                {[
                  { icon: <GithubIcon size={18} />, url: 'https://github.com/Giridhar-J-28', label: 'GitHub' },
                  { icon: <InstagramIcon size={18} />, url: 'https://instagram.com/_.giridhar', label: 'Instagram' },
                  { icon: <LinkedinIcon size={18} />, url: 'https://www.linkedin.com/in/giridhar-jambunathan-2176b637b/', label: 'LinkedIn' },
                  { icon: <Mail size={18} />, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=giridharjambunathan28@gmail.com', label: 'Email' },
                ].map(({ icon, url, label }) => (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label={label}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column (hero card) ── */}
          <div className="fade-up delay-2">
            <div className="hero-card">
              <div className="hero-card-glow-1" />
              <div className="hero-card-glow-2" />

              <div className="hero-card-top">
                <div className="hero-avatar">GJ</div>
                <div className="hero-status-badge">Active Codebase</div>
              </div>

              <div className="hero-code-block">
                <div className="code-topbar">
                  <span className="code-dot code-dot-red" />
                  <span className="code-dot code-dot-yellow" />
                  <span className="code-dot code-dot-green" />
                  <span className="code-filename">portfolio.jsx</span>
                </div>
                <div><span className="code-keyword">const </span><span className="code-var">giridhar</span><span className="code-line"> = &#123;</span></div>
                <div className="code-indent"><span className="code-line">skills: [</span><span className="code-string">'Python'</span><span className="code-line">, </span><span className="code-string">'React'</span><span className="code-line">, </span><span className="code-string">'ML'</span><span className="code-line">],</span></div>
                <div className="code-indent"><span className="code-line">focus: </span><span className="code-string">'AI/ML Solutions'</span><span className="code-line">,</span></div>
                <div className="code-indent"><span className="code-line">passionate: </span><span className="code-bool">true</span></div>
                <div><span className="code-line">&#125;;</span></div>
              </div>

              <div className="hero-card-bottom">
                <div>
                  <div className="hero-card-name">Giridhar J.</div>
                  <div className="hero-card-role">AI/ML & Developer</div>
                </div>
                <div className="hero-online">
                  <span className="online-pulse" />
                  <span className="online-dot" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
