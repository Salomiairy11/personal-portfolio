import '../styles/Experience.css'
import { useState } from 'react'
import contract from '../assets/employmentContract.pdf'

const Experience = () => {
  const experience = [
    {
      id: 1,
      title: 'AI Intern',
      organization: 'LQ Digital',
      date: 'June 2025 - August 2025',
      description: `For my role as an AI Intern, I conducted the following tasks:
          1. Analyzed user-agent interactions to extract insights from questions, reviews, and feedback, improving agent performance.
          2. Scraped, cleaned, and structured dynamic website content to provide high-quality context for a custom AI conversational agent.
          3. Built and integrated a LangChain & Gemini-based chat assistant with session memory for improved user interactions.
          4. Developed FastAPI endpoints and backend workflows, connecting the agent to social media platforms and storing data in PostgreSQL.
          5. Collaborated in Agile sprints, conducted code reviews, and documented experiments, architecture, and workflows for reproducibility.`,
    },
  ]

  const [open, setOpen] = useState(false)

  return (
    <section className="experience-section section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-grid">
          {experience.map((cert) => (
            <div key={cert.id} className="experience-card card">
              <div className="experience-content">
                <h3 className="experience-title">{cert.title}</h3>
                <div className="experience-organization">
                  {cert.organization}
                </div>
                <div className="experience-date">{cert.date}</div>
                <p
                  className="experience-description"
                  style={{ whiteSpace: 'pre-line' }}>
                  {experience[0].description}
                </p>
                <a
                  href="#"
                  className="btn-primary experience-link"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(true)
                  }}
                >
                  View Employment
                </a>
              </div>
            </div>
          ))}
        </div>
        {open && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '95vw',
                height: '95vh',
                background: '#fff',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpen(false)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '28px',
                  cursor: 'pointer',
                  zIndex: 10,
                  color: 'white',
                }}
              >
                ✖
              </button>
              <iframe
                src={contract}
                title="Employment Contract"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience
