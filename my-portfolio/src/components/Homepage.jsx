import '../styles/Homepage.css'
import { useNavigate } from 'react-router-dom'
import me from '../assets/me.jpeg'
const Homepage = () => {
  const navigate = useNavigate()

  const handleViewWork = () => {
    navigate('/projects')
  }

  const handleGetInTouch = () => {
    navigate('/contact')
  }

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Salomi Airy</span>
              </h1>
              <p className="hero-subtitle">
                Data Analyst | Aspiring Data Scientist
              </p>
              <p className="hero-description">
                I build interactive dashboards, perform advanced analytics, and
                create end-to-end data solutions using Python, SQL, and PowerBI.
              </p>
              <div className="hero-buttons">
                <button onClick={handleViewWork} className="btn-primary">
                  View My Work
                </button>
                <button onClick={handleGetInTouch} className="btn-secondary">
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src={me}
                alt="John Doe"
                className="profile-photo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage