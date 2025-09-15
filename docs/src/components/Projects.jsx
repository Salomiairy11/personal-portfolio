import '../styles/Projects.css'
import bank from '../assets/Bank.PNG'
import vendor from '../assets/vendor.PNG'
import cus from '../assets/sentiment.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Bank Loan Analysis Dashboard',
      description:
        'This project is an interactive Bank Loan Analysis Dashboard using Power BI and SQL to help financial institutions monitor loan performance and borrower details. It features three dashboards—Summary, Overview, and Details—offering insights into key metrics, lending trends, and borrower profiles with dynamic filters. ',
      image: bank,
      technologies: ['Power BI', 'SQL Server'],
      liveDemo: 'https://example.com',
      github:
        'https://github.com/Salomiairy11/Bank-Loan-Analysis-Power-BI-Dashboard',
    },
    {
      id: 2,
      title: 'Vendor Performance Analysis',
      description:
        'This project is an end-to-end vendor analytics solution built using SQL Server and Python. It consolidates purchase, sales, and freight data, cleans and transforms over 100K records, and applies statistical techniques to uncover insights which are presented in a Power BI dashboard to support better decision-making',
      image: vendor,
      technologies: ['Python', 'SQL Server', 'Power BI'],
      liveDemo: 'https://example.com',
      github:
        'https://github.com/Salomiairy11/Vendor-Performance-Analysis-Using-Python-and-SQL-SERVER',
    },
    {
      id: 3,
      title: 'Customer Sentiment Analysis',
      description:
        'This project is a Customer Feedback Analysis Dashboard built with Streamlit. It lets users upload review data (CSV), automatically cleans text, classifies sentiment, and extracts key themes via K-Means clustering. The dashboard includes interactive visualizations to help uncover actionable insights',
      image: cus,
      technologies: ['Python', 'Streamlit', 'Scikit-Learn'],
      liveDemo:
        'https://drive.google.com/drive/folders/1b-YdaEjGPt88JypdbLXC4z-AcfV5i2bF?usp=sharing',
      github:
        'https://github.com/Salomiairy11/Customer-Sentiment-and-Topic-Analysis-Dashboard',
    },
  ]

  return (
    <section className="projects-section section">
      <div className="container">
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
                    href={project.liveDemo}
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo Video
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
    </section>
  )
}

export default Projects
