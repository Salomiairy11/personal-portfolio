'use client'
import './styles/App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/personal-portfolio" element={<Homepage />} />
            <Route path="/personal-portfolio/projects" element={<Projects />} />
            <Route path="/personal-portfolio/about" element={<About />} />
            <Route
              path="/personal-portfolio/experience"
              element={<Experience />}
            />
            <Route path="/personal-portfolio/resume" element={<Resume />} />
            <Route path="/personal-portfolio/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
