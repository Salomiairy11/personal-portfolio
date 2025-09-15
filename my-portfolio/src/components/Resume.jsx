import '../styles/Resume.css'
import resume from '../assets/resume.pdf'
import { useState } from 'react'

const Resume = () => {
  const [open, setOpen] = useState(false)
  return (
    <section className="resume-section section">
      <div className="container">
        <a href={resume} className="btn-primary download-btn" download>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
          Download Resume
        </a>
        <a
          href="#"
          className="btn-primary preview-link"
          onClick={(e) => {
            e.preventDefault()
            setOpen(true)
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
          Preview Resume
        </a>
        
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
                          color:'white'
                        }}
                      >
                        ✖
                      </button>
                      <iframe
                        src={resume}
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

export default Resume
