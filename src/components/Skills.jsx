import { Code2, Server, Wrench, Shield } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 size={24} style={{ color: 'var(--accent-1)' }} />,
    description: 'Proficient in multiple programming languages for diverse application development.',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Java', level: 78 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'TypeScript', level: 75 },
    ],
  },
  {
    title: 'Web Development',
    icon: <Server size={24} style={{ color: 'var(--accent-2)' }} />,
    description: 'Building responsive full-stack applications with modern frameworks and libraries.',
    skills: [
      { name: 'React.js', level: 82 },
      { name: 'Node.js & Express', level: 80 },
      { name: 'HTML5 & CSS3', level: 85 },
      { name: 'REST APIs', level: 78 },
    ],
  },
  {
    title: 'Databases',
    icon: <Wrench size={24} style={{ color: 'var(--accent-1)' }} />,
    description: 'Managing and querying relational and NoSQL databases efficiently.',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'SQLite', level: 72 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: <Shield size={24} style={{ color: 'var(--accent-2)' }} />,
    description: 'Developing intelligent systems using modern ML frameworks and libraries.',
    skills: [
      { name: 'TensorFlow', level: 75 },
      { name: 'PyTorch', level: 72 },
      { name: 'scikit-learn', level: 78 },
      { name: 'NumPy & Pandas', level: 85 },
      { name: 'NLP', level: 70 },
      { name: 'Matplotlib', level: 80 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={24} style={{ color: 'var(--accent-1)' }} />,
    description: 'Leveraging industry-standard tools for development, deployment, and collaboration.',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Pygame', level: 68 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Shield size={16} style={{ color: 'var(--accent-2)' }} />
            My Capabilities
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skillset</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map(({ title, icon, description, skills }) => (
            <div key={title} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-icon-box">{icon}</div>
                <h3 className="skill-card-title">{title}</h3>
              </div>
              <p className="skill-card-desc">{description}</p>

              <div className="skill-list">
                {skills.map(({ name, level }) => {
                  const label = level >= 85 ? 'Advanced' : level >= 75 ? 'Proficient' : level >= 65 ? 'Intermediate' : 'Familiar';
                  const dotColor = level >= 85 ? 'var(--accent-1)' : level >= 75 ? 'var(--accent-2)' : level >= 65 ? '#f59e0b' : 'var(--text-muted)';
                  return (
                    <div key={name} className="skill-list-item">
                      <span className="skill-dot" style={{ background: dotColor }} />
                      <span className="skill-name">{name}</span>
                      <span className="skill-badge" style={{ background: dotColor }}>{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
