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
          1. Processed and analyzed user-agent interaction data using Pandas and NumPy, applied exploratory data analysis and statistical methods to detect query trends and performance bottlenecks, and visualized results with Matplotlib/Seaborn — insights from this analysis drove fine-tuning that improved response accuracy by ~15% and enhanced user satisfaction.
          2. Scraped, cleaned, and structured dynamic website content using Python (BeautifulSoup), ensuring well-organized and contextually relevant data for a custom LangChain + Gemini-powered conversational agent.
          3. Developed backend workflows with FastAPI to integrate the chat assistant with social media platforms.
          4. Collaborated in Agile sprints, participated in code reviews, and maintained detailed documentation of experiments, architecture, and workflows to support reproducibility and team knowledge sharing.`,
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
                  style={{ whiteSpace: 'pre-line' }}
                >
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
