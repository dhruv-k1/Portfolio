import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'
import './App.css'
import './index.css'

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Hackathons />
        <Contact />
      </main>
    </div>
  )
}

export default App
