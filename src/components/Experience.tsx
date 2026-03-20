import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Briefcase, BarChart2 } from 'lucide-react'

const experiences = [
  {
    icon: Briefcase,
    role: 'Generative AI Intern',
    company: 'Delhivery Ltd',
    period: 'May 2025 – Jul 2025',
    type: 'Full-time Internship',
    color: '#4f8ef7',
    bullets: [
      'Designed & implemented an Automated Bill Validation System using a multi-agent Generative AI framework, addressing manual processing of 300+ bills monthly impacting ₹10+ Lacs/month in validation costs.',
      'Architected a LangGraph-orchestrated workflow with 5 specialized Google Gemini 2.0 Flash agents enabling intelligent document classification, OCR-powered extraction, and structured JSON output from diverse bill formats.',
      'Achieved approval precision of 0.9 and rejection precision of 0.7, processing 10 bills/day on average — transforming a manual, error-prone process into a scalable automated solution.',
    ],
    tags: ['LangGraph', 'Gemini 2.0', 'Multi-Agent AI', 'OCR', 'Python'],
  },
  {
    icon: BarChart2,
    role: 'Data Analyst Intern',
    company: 'Sparsha Trust, KPMG India',
    period: 'Jan 2024 – Feb 2024',
    type: 'Internship',
    color: '#7c5cfc',
    bullets: [
      'Analyzed Toyota\'s road safety hackathon dataset of 20,000+ students across 50+ schools in Bangalore.',
      'Cleaned and standardized data using advanced Excel functions for accurate and consistent in-depth analysis.',
      'Used Python (NumPy, Pandas) to perform statistical analyses assessing student performance across 6 classes and measuring pre/post-study intervention impact, achieving a 32% improvement in measurable outcomes.',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Excel', 'Data Analysis'],
  },
]

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '6rem 1.5rem',
        background: 'rgba(10,22,40,0.5)',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem' }}>
            <div style={{ width: 32, height: 2, background: 'linear-gradient(90deg, #4f8ef7, #7c5cfc)' }} />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.15em', color: '#4f8ef7', fontWeight: 600 }}>EXPERIENCE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#e8f0fe', marginBottom: '3rem' }}>
            Work Experience
          </h2>
        </motion.div>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: 2,
            background: 'linear-gradient(180deg, #4f8ef7, #7c5cfc, transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experiences.map((exp, i) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  style={{ position: 'relative' }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute',
                    left: '-2.4rem',
                    top: '1.5rem',
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: exp.color,
                    boxShadow: `0 0 12px ${exp.color}`,
                    border: '2px solid #050a18',
                  }} />

                  <motion.div
                    whileHover={{ borderColor: `${exp.color}55`, scale: 1.01 }}
                    style={{
                      padding: '1.8rem',
                      borderRadius: '14px',
                      background: 'rgba(13,31,60,0.7)',
                      border: '1px solid rgba(26,52,96,0.8)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.25s',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                        <div style={{
                          width: 36, height: 36, borderRadius: '8px',
                          background: `rgba(${exp.color === '#4f8ef7' ? '79,142,247' : '124,92,252'},0.12)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <Icon size={17} color={exp.color} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e8f0fe', fontFamily: "'Space Grotesk', sans-serif" }}>
                            {exp.role}
                          </h3>
                          <span style={{ fontSize: '0.85rem', color: exp.color, fontWeight: 600 }}>{exp.company}</span>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.82rem', color: '#8ba3c7', fontWeight: 500 }}>{exp.period}</div>
                        <div style={{
                          fontSize: '0.72rem', color: '#4a6fa5',
                          padding: '0.15rem 0.6rem', borderRadius: '999px',
                          border: '1px solid rgba(79,142,247,0.2)',
                          display: 'inline-block', marginTop: '0.25rem',
                        }}>
                          {exp.type}
                        </div>
                      </div>
                    </div>

                    <ul style={{ margin: '1.2rem 0 1.2rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} style={{ fontSize: '0.88rem', color: '#8ba3c7', lineHeight: 1.7, position: 'relative' }}>
                          <span style={{
                            position: 'absolute', left: '-1rem', top: '0.55rem',
                            width: 5, height: 5, borderRadius: '50%',
                            background: exp.color, opacity: 0.8,
                          }} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {exp.tags.map((tag) => (
                        <span key={tag} style={{
                          padding: '0.2rem 0.7rem',
                          borderRadius: '999px',
                          background: `rgba(${exp.color === '#4f8ef7' ? '79,142,247' : '124,92,252'},0.1)`,
                          border: `1px solid ${exp.color}33`,
                          fontSize: '0.73rem',
                          color: exp.color,
                          fontWeight: 500,
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
