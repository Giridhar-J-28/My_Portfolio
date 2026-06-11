import { FolderGit2, Code } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const projectsData = [
  {
    title: 'Safekeep',
    category: 'AI & ML',
    tags: ['Python', 'React', 'Node.js', 'OCR', 'NLP'],
    description: 'A digital document repository where users can upload PDFs or images such as bills or government notices. The system extracts text, identifies document type, translates it, and generates a concise summary. (Ongoing)',
    github: 'https://github.com/Giridhar-J-28',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(99,102,241,0.2) 100%)',
  },
  {
    title: 'Codewhiz',
    category: 'Python',
    tags: ['Python', 'Pygame', 'Quiz Engine', 'Education'],
    description: 'A Python-based educational tool designed for beginners to learn programming through interactive challenges and fill-in-the-blank exercises. Gamifies learning to make programming concepts easier and engaging.',
    github: 'https://github.com/Giridhar-J-28',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(20,184,166,0.2) 100%)',
  },
  {
    title: 'Recommendation System',
    category: 'AI & ML',
    tags: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'NLP'],
    description: 'A machine learning-based recommendation engine that suggests movies using content-based filtering. Includes data preprocessing, feature extraction, and similarity modeling to generate personalized recommendations from real-world datasets.',
    github: 'https://github.com/Giridhar-J-28/Movie-Recommendation-System-',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(236,72,153,0.2) 100%)',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Code size={16} style={{ color: 'var(--accent-1)' }} />
            My Creations
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Projects grid */}
        <div className="projects-grid">
          {projectsData.map(({ title, category, tags, description, github, gradient }) => (
            <div key={title} className="project-card">
              {/* Cover graphic */}
              <div className="project-cover" style={{ background: gradient }}>
                <div className="project-cover-overlay">
                  <a href={github} target="_blank" rel="noopener noreferrer" className="project-link-btn github" aria-label="GitHub">
                    <GithubIcon size={20} />
                  </a>
                </div>
                <div className="project-icon-wrap">
                  <FolderGit2 size={32} style={{ color: 'var(--accent-1)' }} />
                </div>
              </div>

              {/* Info */}
              <div className="project-body">
                <div className="project-category">{category}</div>
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{description}</p>

                <div className="project-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
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
