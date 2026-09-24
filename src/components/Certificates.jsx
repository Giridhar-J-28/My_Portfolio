import { useState, useEffect } from 'react';
import { Award, X, ExternalLink } from 'lucide-react';

const certificatesData = [
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford University',
    platform: 'Coursera',
    date: '2025',
    skills: ['Machine Learning', 'Regression', 'Classification', 'Python', 'scikit-learn'],
    description:
      "Completed the foundational course in Andrew Ng's Machine Learning Specialization, covering supervised learning, linear & logistic regression, gradient descent, and regularization techniques.",
    pdfUrl: '/Supervised Machine Learning Certificate.pdf',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(6,182,212,0.18) 100%)',
  },
];

function CertModal({ cert, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div
        className="cert-modal-wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated glow border */}
        <div className="cert-modal-glow-ring" aria-hidden="true" />

        <div className="cert-modal">
          {/* Header */}
          <div className="cert-modal-header">
            <div className="cert-modal-header-info">
              <div className="cert-modal-icon">
                <Award size={22} />
              </div>
              <div>
                <div className="cert-modal-platform">{cert.platform}</div>
                <h3 className="cert-modal-title">{cert.title}</h3>
                <div className="cert-modal-issuer">{cert.issuer}</div>
              </div>
            </div>
            <button
              className="cert-modal-close"
              onClick={onClose}
              aria-label="Close certificate viewer"
            >
              <X size={18} />
            </button>
          </div>

          {/* PDF Embed */}
          <div className="cert-modal-pdf-wrap">
            <iframe
              src={cert.pdfUrl + '#toolbar=0&navpanes=0&view=FitH'}
              title={cert.title}
              className="cert-modal-pdf"
            />
          </div>

          {/* Footer */}
          <div className="cert-modal-footer">
            <div className="cert-modal-skills">
              {cert.skills.map((skill) => (
                <span key={skill} className="cert-skill-tag">{skill}</span>
              ))}
            </div>
            <a
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary cert-modal-open-btn"
            >
              <ExternalLink size={14} />
              Open in New Tab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <>
      <section id="certificates" className="section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-badge">
              <Award size={16} style={{ color: 'var(--accent-1)' }} />
              Achievements
            </div>
            <h2 className="section-title">
              My <span className="gradient-text">Certificates</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Certificates Grid */}
          <div className="certs-grid">
            {certificatesData.map((cert) => {
              const { title, issuer, platform, date, skills, description, gradient } = cert;
              return (
                <div key={title} className="cert-card">
                  {/* Card top banner */}
                  <div className="cert-card-banner" style={{ background: gradient }}>
                    <div className="cert-card-icon-wrap">
                      <Award size={36} style={{ color: 'var(--accent-1)' }} />
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="cert-card-body">
                    <h3 className="cert-card-title">{title}</h3>
                    <p className="cert-card-issuer">{issuer}</p>
                    <p className="cert-card-desc">{description}</p>

                    {/* Skills tags */}
                    <div className="cert-card-skills">
                      {skills.map((skill) => (
                        <span key={skill} className="cert-skill-tag">{skill}</span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="cert-card-actions">
                      <button
                        className="btn-primary cert-view-btn"
                        onClick={() => setActiveCert(cert)}
                      >
                        <Award size={15} />
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeCert && (
        <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </>
  );
}
