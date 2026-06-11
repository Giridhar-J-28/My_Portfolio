import { Briefcase, Calendar } from 'lucide-react';

const experienceData = [
  {
    role: 'Marketing Joint Head',
    company: 'Indian Society of Technical Education (ISTE)',
    location: 'Mumbai, India',
    period: 'July 2024 – March 2025',
    description:
      'Led marketing and sponsorship initiatives for the college chapter, ensuring successful execution of technical and cultural events.',
    bullets: [
      'Collected funds and resources for organizing college events successfully.',
      'Coordinated with team members and sponsors to ensure seamless event planning and execution.',
    ],
  },
  {
    role: 'Logistics Executive',
    company: 'Information Technology Student Association (ITSA)',
    location: 'Mumbai, India',
    period: 'July 2023 – March 2024',
    description:
      'Managed logistical operations for student events, ensuring smooth execution and preparation.',
    bullets: [
      'Ensured smooth execution of ongoing college events.',
      'Managed preparations and logistics before and during events.',
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={16} style={{ color: 'var(--accent-1)' }} />
            My Timeline
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          {experienceData.map(({ role, company, location, period, description, bullets }) => (
            <div key={role} className="exp-item">
              {/* Dot node */}
              <div className="exp-dot">
                <span className="exp-dot-inner" />
              </div>

              {/* Card */}
              <div className="exp-card">
                <div className="exp-header">
                  <div className="exp-period">
                    <Calendar size={12} />
                    {period}
                  </div>
                  <div className="exp-role">{role}</div>
                  <div className="exp-company">
                    {company}&nbsp;&bull;&nbsp;<span style={{ fontWeight: 400, fontSize: '0.78rem' }}>{location}</span>
                  </div>
                </div>

                <p className="exp-desc">{description}</p>

                <div className="exp-bullets">
                  {bullets.map((b) => (
                    <div key={b} className="exp-bullet">
                      <span className="exp-bullet-arrow">›</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
