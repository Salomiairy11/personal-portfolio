import '../styles/About.css'
import me from '../assets/me.jpeg'
import cert from '../assets/certificate.jpeg'
import { useState } from 'react'

const About = () => {
  const [open, setOpen] = useState(false)

  const technicalSkills = [
    {
      title: 'Python',
      details: 'Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn',
    },
    {
      title: 'SQL',
      details: 'MySQL, SQL Server, PostgreSQL',
    },
    {
      title: 'U.S. healthcare processes',
      details:
        'ACA, Medicaid, Medicare, Marketplace coverage, enrollment trends, tax credits',
    },
    {
      title: 'Microsoft Power BI',
      details: 'DAX, data modeling, interactive visualizations',
    },
    {
      title: 'Excel',
      details: 'VLookup, Conditional Formatting, Pivot Tables',
    },
    {
      title: 'GitHub',
      details: 'Git, version control, collaborative workflows',
    },
  ]


  const softSkills = [
    'Communication',
    'Problem Solving',
    'Positive Learning Attitude',
    'Teamwork',
    'Adaptability',
  ]


  const certificates = [
    {
      title: 'Data Science & Machine Learning Using Python',
      company: 'Evolve IT',
      description:
        'Completed a 75-hour training on Data Science & Machine Learning using Python, covering data analysis with Pandas and NumPy, data visualization with Matplotlib and Seaborn, and building predictive models using Scikit-learn.',
    },
  ]

  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-content">
          <div className="about-intro">
            <div className="about-photo">
              <img src={me} alt="Salomi Airy" />
            </div>
            <div className="about-text">
              <h3>Hello! I'm Salomi Airy</h3>
              <p>
                I’m an aspiring data analyst who, over the past year, has
                worked on projects that range from building Power BI dashboards
                and SQL pipelines to creating Python-based data analysis
                dashboards. I specialize in working with data end-to-end — from
                cleaning and transforming raw datasets to building dashboards
                and delivering insights that support decision-making.
              </p>
              <p>
                My work often involves combining statistical analysis with
                visualization, so that complex data can be communicated in a
                clear and actionable way. I’m passionate about turning numbers
                into stories that drive impact, and I’m eager to bring that same
                mindset to solving business problems as a Data Analyst.I believe
                in continuous learning and staying up-to-date with the latest
                industry trends.
              </p>
            </div>
          </div>

          <section className="skills-section">
            <div className="container">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <h4 className="skill-title">{skill.title}</h4>
                    {skill.details && (
                      <p className="skill-details">{skill.details}</p>
                    )}
                  </div>
                ))}
              </div>

              <h3 style={{ marginTop: '3rem' }}>Soft Skills</h3>
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <span key={index} className="soft-skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <div className="certificate-section">
            <h3>Certificates</h3>
            <div className="certificate-list">
              {certificates.map((exp, index) => (
                <div key={index} className="certificate-item card">
                  <h4 className="experience-title">{exp.title}</h4>
                  <div className="experience-organization">{exp.company}</div>
                  <p className="experience-description">{exp.description}</p>
                  <a
                    href="#"
                    className="btn-primary experience-link"
                    style={{ color: 'white' }}
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(true)
                    }}
                  >
                    View Certificate
                  </a>
                  {open && (
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
                          onClick={() => setOpen(false)}
                          style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'transparent',
                            border: 'none',
                            fontSize: '20px',
                            cursor: 'pointer',
                          }}
                        >
                          ✖
                        </button>

                        <img
                          src={cert}
                          alt="Certificate"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '90vh',
                            objectFit: 'contain',
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3>Education</h3>
            <div className="education-item card">
              <h4>
                Bachelor of Science in Computer Science and Information
                Technology (BSc. CSIT)
              </h4>
              <div className="experience-organization">
                Kathford International College Of Engineering And Management (Batch 2078)
              </div>
              <p className="experience-description">Balkumari, Lalitpur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
