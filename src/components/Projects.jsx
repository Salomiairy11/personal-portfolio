import '../styles/Projects.css'
import bank from '../assets/Bank.PNG'
import vendor from '../assets/vendor.PNG'
import cus from '../assets/sentiment.png'

import { useState } from 'react'

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'LoanDash - Bank Loan Analysis Dashboard',
      description:
        'This project is an interactive Bank Loan Analysis Dashboard using Power BI and SQL to help financial institutions monitor loan performance and borrower details. It features three dashboards—Summary, Overview, and Details—offering insights into key metrics, lending trends, and borrower profiles with dynamic filters. ',
      image: bank,
      technologies: ['Power BI', 'SQL Server'],
      videoId: 'O8_WBd7GqFI',
      github: 'https://github.com/Salomiairy11/LoanDash/tree/main',
    },
    {
      id: 2,
      title: 'VendorLite - Vendor Performance Analysis',
      description:
        'This project is an end-to-end vendor analytics solution built using SQL Server and Python. It consolidates purchase, sales, and freight data, cleans and transforms over 100K records, and applies statistical techniques to uncover insights which are presented in a Power BI dashboard to support better decision-making',
      image: vendor,
      technologies: ['Python', 'SQL Server', 'Power BI'],
      videoId: '3bTQlEEDZL0',
      github: 'https://github.com/Salomiairy11/VendorLite',
    },
    {
      id: 3,
      title: 'SentiView - Customer Sentiment Analysis',
      description:
        'This project is a Customer Feedback Analysis Dashboard built with Streamlit. It lets users upload review data (CSV), automatically cleans text, classifies sentiment, and extracts key themes via K-Means clustering. The dashboard includes interactive visualizations to help uncover actionable insights',
      image: cus,
      technologies: ['Python', 'Streamlit', 'Scikit-Learn'],
      videoId: 'R83dXU4h0As',
      github: 'https://github.com/Salomiairy11/SentiView',
    },
  ]

  const openProject = projects.find((p) => p.id === openProjectId)

  return (
    <section className="projects-section section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-image">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href="#"
                    className="btn-primary"
                    style={{ color: 'white' }}
                    onClick={(e) => {
                      e.preventDefault()
                      setOpenProjectId(project.id)
                    }}
                  >
                    Video Demo
                  </a>
                  <a
                    href={project.github}
                    className="btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {openProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: 'relative',
              background: '#fff',
              padding: '10px',
              borderRadius: '10px',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button
              onClick={() => setOpenProjectId(null)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'white',
                color: 'black',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
              }}
            >
              ✖
            </button>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${openProject.videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
              Demo Video
            </iframe>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
