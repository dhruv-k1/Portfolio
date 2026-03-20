import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const skillGroups = [
  {
    category: 'AI & LLM',
    color: '#4f8ef7',
    skills: [
      { name: 'LangGraph / LangChain', level: 92 },
      { name: 'Google Gemini 2.0', level: 90 },
      { name: 'GPT-4o / OpenAI API', level: 88 },
      { name: 'RAG Pipelines', level: 87 },
      { name: 'Multi-Agent Systems', level: 90 },
    ],
  },
  {
    category: 'Machine Learning',
    color: '#7c5cfc',
    skills: [
      { name: 'Scikit-learn', level: 88 },
      { name: 'NLP (TF-IDF, Word2Vec, VADER)', level: 85 },
      { name: 'CatBoost / XGBoost', level: 82 },
      { name: 'SASRec (Sequential Rec.)', level: 78 },
      { name: 'Feature Engineering', level: 86 },
    ],
  },
  {
    category: 'Data & Tools',
    color: '#00d4ff',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'Pandas / NumPy', level: 90 },
      { name: 'PostgreSQL / Pathway', level: 78 },
      { name: 'Beautiful Soup / Web Scraping', level: 82 },
      { name: 'Whisper / ElevenLabs', level: 76 },
    ],
  },
]

const tags = [
  'Python', 'LangGraph', 'LangChain', 'GPT-4o', 'Gemini 2.0',
  'RAG', 'Multi-Agent AI', 'Scikit-learn', 'CatBoost', 'SASRec',
  'Word2Vec', 'TF-IDF', 'VADER', 'Pandas', 'NumPy',
  'PostgreSQL', 'Pathway', 'Whisper (STT)', 'ElevenLabs', 'Tavily',
  'Beautiful Soup', 'yfinance', 'OCR', 'JSON', 'Git',
]

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '6rem 1.5rem',
        background: 'rgba(10,22,40,0.5)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem' }}>
            <div style={{ width: 32, height: 2, background: 'linear-gradient(90deg, #4f8ef7, #7c5cfc)' }} />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.15em', color: '#4f8ef7', fontWeight: 600 }}>SKILLS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#e8f0fe', marginBottom: '0.6rem' }}>
            Technical Expertise
          </h2>
          <p style={{ color: '#8ba3c7', marginBottom: '3rem', fontSize: '0.97rem' }}>
            Specialized in Generative AI, multi-agent orchestration, and applied ML.
          </p>
        </motion.div>

        {/* Skill bars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.15, duration: 0.6 }}
              style={{
                padding: '1.8rem',
                borderRadius: '14px',
                background: 'rgba(13,31,60,0.7)',
                border: '1px solid rgba(26,52,96,0.8)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: group.color, boxShadow: `0 0 10px ${group.color}` }} />
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e8f0fe', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {group.category}
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.83rem', color: '#8ba3c7' }}>{skill.name}</span>
                      <span style={{ fontSize: '0.8rem', color: group.color, fontWeight: 600 }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: 5, borderRadius: 999, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: gi * 0.15 + si * 0.08 + 0.3, duration: 0.9, ease: 'easeOut' }}
                        style={{
                          height: '100%',
                          borderRadius: 999,
                          background: `linear-gradient(90deg, ${group.color}, ${group.color}aa)`,
                          boxShadow: `0 0 8px ${group.color}66`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.03, duration: 0.35 }}
              whileHover={{ scale: 1.08, borderColor: '#4f8ef7', color: '#4f8ef7' }}
              style={{
                padding: '0.3rem 0.85rem',
                borderRadius: '999px',
                border: '1px solid rgba(79,142,247,0.2)',
                fontSize: '0.78rem',
                color: '#8ba3c7',
                background: 'rgba(79,142,247,0.06)',
                cursor: 'default',
                transition: 'all 0.2s',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
