import { useState } from 'react';
import { User, Terminal, GraduationCap, CheckCircle } from 'lucide-react';

const tabs = [
  {
    id: 'story',
    label: 'My Focus',
    icon: <Terminal size={15} />,
  },
  {
    id: 'education',
    label: 'Education',
    icon: <GraduationCap size={15} />,
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={16} style={{ color: 'var(--accent-1)' }} />
            About Me
          </div>
          <h2 className="section-title">
            My Journey &amp; <span className="gradient-text">Core Purpose</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left — bio + stats */}
          <div className="about-text fade-up">
            <h3>Who is Giridhar?</h3>
            <p>
              I am an IT engineer specializing in AI/ML and data-driven applications with a strong foundation in web development and database management. My passion lies in building intelligent systems that solve real-world problems and make a tangible impact.
            </p>
            <p>
              From developing machine learning models to crafting full-stack applications, I enjoy working across the entire technology stack. I'm driven by continuous learning and thrive in collaborative environments where innovation meets execution.
            </p>

            <div className="about-stats">
              {[
                { number: '2', label: 'Years Experience' },
                { number: '3', label: 'Projects Completed' },
                { number: '100%', label: 'Commitment Rate' },
              ].map(({ number, label }) => (
                <div key={label} className="stat-card">
                  <span className="stat-number">{number}</span>
                  <span className="stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — interactive tabs */}
          <div className="fade-up delay-2">
            <div className="tab-panel">
              {/* Tab buttons */}
              <div className="tab-buttons">
                {tabs.map(({ id, label, icon }) => (
                  <button
                    key={id}
                    className={`tab-btn ${activeTab === id ? 'active' : ''}`}
                    onClick={() => setActiveTab(id)}
                  >
                    {icon}
                    {label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="tab-content">
                {activeTab === 'story' && (
                  <>
                    <div className="tab-content-title">Building Intelligent Data-Driven Systems</div>
                    <p>
                      I specialize in developing AI/ML-powered applications and full-stack web solutions. My focus is on creating systems that leverage data intelligently, from machine learning models to intuitive user interfaces.
                    </p>
                    <div className="checklist">
                      {[
                        'Machine learning models & data pipelines',
                        'Full-stack web applications with React & Node',
                        'Database design & management (SQL & NoSQL)',
                        'Building tools that simplify complex problems',
                      ].map((item) => (
                        <div key={item} className="checklist-item">
                          <CheckCircle size={14} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {activeTab === 'education' && (
                  <>
                    <div className="tab-content-title">Academic Background</div>
                    <div className="timeline-list">
                      <div className="timeline-item">
                        <div className="timeline-period">2022 – Ongoing</div>
                        <div className="timeline-degree">B.E in Information Technology</div>
                        <div className="timeline-school">St. Francis Institute of Technology</div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-period">2020 – 2022</div>
                        <div className="timeline-degree">HSC (79.6%)</div>
                        <div className="timeline-school">Don Bosco Junior College</div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-period">2012 – 2020</div>
                        <div className="timeline-degree">SSC (55.6%)</div>
                        <div className="timeline-school">Cosmopolitan High School</div>
                      </div>
                    </div>
                  </>
                )}


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
