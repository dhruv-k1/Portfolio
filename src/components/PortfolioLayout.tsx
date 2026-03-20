'use client'

import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Hackathons from './Hackathons'
import Contact from './Contact'
import ParticleBackground from './ParticleBackground'

export default function PortfolioLayout() {
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
