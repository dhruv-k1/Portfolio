import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Trophy, Github, FileText, Zap, Mic } from 'lucide-react'
import RecommendColorful from './illustrations/RecommendColorful'
import RAGColorful from './illustrations/RAGColorful'

const hackathons = [
  {
    Illustration: RecommendColorful,
    icon: Trophy,
    badge: '🥇 1st Place Nationwide',
    badgeColor: '#f5c518',
    title: 'Next-Item Recommendation System',
    event: 'Unravel 2025 — World Wide Technology (WWT)',
    period: 'Aug 2025',
    color: '#f5c518',
    description:
      'Architected a two-stage recommendation engine (SASRec + CatBoost) processing 1.4M+ customer orders to generate real-time next-item predictions for 500K+ customers — achieving recall@3 ≈ 0.36.',
    highlights: [
      'SASRec transformer trained for 5 epochs for sequential pattern learning',
      '11-feature CatBoost YetiRank model [300 iters] from co-occurrence, popularity & frequency signals',
      'Blended candidate generation from 150-item pool with reproducible batch inference pipeline',
    ],
    tags: ['SASRec', 'CatBoost', 'Transformer', 'Recommender Systems', 'Python', 'Ranking'],
    github: 'https://github.com/dhruv-k1/WWT_Unravel',
    report: 'https://shorturl.at/DSJi6',
  },
  {
    Illustration: RAGColorful,
    icon: Mic,
    badge: 'IIT Roorkee Tech Fest',
    badgeColor: '#4f8ef7',
    title: 'Real-Time Sports Chatbot using RAG',
    event: "General Championship Tech'25, IIT Roorkee",
    period: 'Apr 2025',
    color: '#00d4ff',
    description:
      'Built an intelligent, real-time, multi-modal cricket Q&A system using LangGraph with dynamic routing across Whisper (STT), PostgreSQL, OpenAI-embedded Pathway vector store, live match JSON, and Tavily web search.',
    highlights: [
      'GPT-4o for query classification, retrieval fusion & hallucination detection',
      'Text/voice input with real-time TTS via ElevenLabs for intuitive UX',
      'Self-asking learning loop generating 100+ factual Q&A pairs/day with >90% accuracy',
    ],
    tags: ['LangGraph', 'RAG', 'GPT-4o', 'Whisper', 'ElevenLabs', 'Pathway', 'Tavily', 'PostgreSQL'],
    github: 'https://github.com/meghanath852/LeagueLens',
    report: 'https://shorturl.at/4pMw5',
  },
]

export default function Hackathons() {
  const { ref, inView } = useInView()

  return (
    <section
      id="hackathons"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem', background: 'rgba(10,22,40,0.5)' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem' }}>
            <div style={{ width: 32, height: 2, background: 'linear-gradient(90deg, #4f8ef7, #7c5cfc)' }} />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.15em', color: '#4f8ef7', fontWeight: 600 }}>HACKATHONS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#e8f0fe', marginBottom: '0.5rem' }}>
            Competition Projects
          </h2>
          <p style={{ color: '#8ba3c7', marginBottom: '3rem', fontSize: '0.97rem' }}>
            High-stakes builds under pressure — including a nationwide #1 finish.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {hackathons.map((hack, i) => {
            const Icon = hack.icon
            const Illustration = hack.Illustration
            return (
              <motion.div
                key={hack.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.65 }}
                whileHover={{ borderColor: `${hack.color}44` }}
                style={{
                  borderRadius: '18px',
                  background: 'rgba(13,31,60,0.7)',
                  border: '1px solid rgba(26,52,96,0.8)',
                  backdropFilter: 'blur(10px)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
              >
                {/* Illustration banner */}
                <div style={{
                  padding: '1.5rem 2rem',
                  background: `linear-gradient(135deg, rgba(13,31,60,0.98) 0%, ${hack.color}0a 100%)`,
                  borderBottom: `1px solid ${hack.color}18`,
                }}>
                  <Illustration />
                </div>

                {/* Details section */}
                <div style={{ padding: '1.8rem 2rem' }}>
                  {/* Top row */}
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1.2rem',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: '12px',
                        background: `${hack.color}18`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <Icon size={22} color={hack.color} />
                      </div>
                      <div>
                        <div style={{
                          display: 'inline-flex', alignItems: 'center',
                          padding: '0.15rem 0.7rem', borderRadius: '999px',
                          background: `${hack.badgeColor}18`,
                          border: `1px solid ${hack.badgeColor}44`,
                          fontSize: '0.73rem', color: hack.badgeColor, fontWeight: 700, marginBottom: '0.25rem',
                        }}>
                          {hack.badge}
                        </div>
                        <h3 style={{
                          fontSize: '1.12rem', fontWeight: 700, color: '#e8f0fe',
                          fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.3,
                        }}>
                          {hack.title}
                        </h3>
                        <div style={{ fontSize: '0.83rem', color: hack.color, fontWeight: 500, marginTop: '0.1rem' }}>
                          {hack.event}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.8rem', color: '#4a6fa5' }}>{hack.period}</span>
                      <motion.a
                        href={hack.github} target="_blank" rel="noreferrer"
                        whileHover={{ scale: 1.08, borderColor: '#4f8ef7', color: '#4f8ef7' }}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '0.35rem',
                          padding: '0.3rem 0.75rem', borderRadius: '6px',
                          border: '1px solid rgba(79,142,247,0.25)',
                          color: '#8ba3c7', fontSize: '0.78rem', fontWeight: 500, transition: 'all 0.2s',
                        }}
                      >
                        <Github size={13} /> GitHub
                      </motion.a>
                      <motion.a
                        href={hack.report} target="_blank" rel="noreferrer"
                        whileHover={{ scale: 1.08, borderColor: '#7c5cfc', color: '#7c5cfc' }}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '0.35rem',
                          padding: '0.3rem 0.75rem', borderRadius: '6px',
                          border: '1px solid rgba(124,92,252,0.25)',
                          color: '#8ba3c7', fontSize: '0.78rem', fontWeight: 500, transition: 'all 0.2s',
                        }}
                      >
                        <FileText size={13} /> Report
                      </motion.a>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: '#8ba3c7', lineHeight: 1.75, marginBottom: '1.2rem' }}>
                    {hack.description}
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                    gap: '0.6rem', marginBottom: '1.2rem',
                  }}>
                    {hack.highlights.map((h, hi) => (
                      <div key={hi} style={{
                        display: 'flex', gap: '0.5rem', alignItems: 'flex-start',
                        padding: '0.7rem', borderRadius: '8px',
                        background: `${hack.color}08`, border: `1px solid ${hack.color}18`,
                      }}>
                        <Zap size={13} color={hack.color} style={{ flexShrink: 0, marginTop: 3 }} />
                        <span style={{ fontSize: '0.82rem', color: '#7a9ac5', lineHeight: 1.5 }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {hack.tags.map((tag) => (
                      <span key={tag} style={{
                        padding: '0.18rem 0.65rem', borderRadius: '999px',
                        background: `${hack.color}10`, border: `1px solid ${hack.color}28`,
                        fontSize: '0.72rem', color: hack.color, fontWeight: 500,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
