import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SentimentColorful from './illustrations/SentimentColorful'
import StockColorful from './illustrations/StockColorful'

const projects = [
  {
    Illustration: SentimentColorful,
    title: 'ML Model Comparison for Sentiment Analysis',
    period: 'Nov 2024',
    description:
      'Comprehensive sentiment analysis on 50,000 IMDB movie reviews comparing Logistic Regression, Naïve Bayes, and Random Forest. Implemented VADER for label generation on unlabeled data, achieving 87.5% accuracy with LR and a top accuracy of 89.8% with Random Forest.',
    highlights: [
      'VADER sentiment analysis for auto-labeling unlabeled datasets',
      'TF-IDF vectorization + lexicon-based polarity scores (feature engineering)',
      '89.8% accuracy achieved with Random Forest on 50K reviews',
    ],
    tags: ['Python', 'Scikit-learn', 'VADER', 'TF-IDF', 'NLP', 'Random Forest'],
    color: '#4f8ef7',
  },
  {
    Illustration: StockColorful,
    title: 'Stock Sentiment Analysis using Machine Learning',
    period: 'Jun 2024',
    description:
      'End-to-end stock price trend prediction using scraped financial news for Apple Inc. Merged 1000+ days of news headlines with historical stock data (850+ rows) and applied NLP preprocessing + ML classifiers to predict directional price movements.',
    highlights: [
      'Web scraped 1000+ days of Apple financial news via BeautifulSoup + yfinance',
      'Word2Vec embeddings capturing semantic/syntactic word relationships',
      'Random Forest achieved best accuracy of 52% on stock trend prediction',
    ],
    tags: ['Python', 'BeautifulSoup', 'yfinance', 'Word2Vec', 'SVC', 'AdaBoost', 'NLP'],
    color: '#7c5cfc',
  },
]

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem' }}>
            <div style={{ width: 32, height: 2, background: 'linear-gradient(90deg, #4f8ef7, #7c5cfc)' }} />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.15em', color: '#4f8ef7', fontWeight: 600 }}>PROJECTS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#e8f0fe', marginBottom: '0.5rem' }}>
            Featured Projects
          </h2>
          <p style={{ color: '#8ba3c7', marginBottom: '3rem', fontSize: '0.97rem' }}>
            ML systems built with rigorous experimentation and production-quality engineering.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((proj, i) => {
            const Illustration = proj.Illustration
            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ borderColor: `${proj.color}44` }}
                style={{
                  borderRadius: '16px',
                  background: 'rgba(13,31,60,0.7)',
                  border: '1px solid rgba(26,52,96,0.8)',
                  backdropFilter: 'blur(10px)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                }}
              >
                {/* Illustration panel */}
                <div style={{
                  padding: '1.5rem',
                  background: `linear-gradient(135deg, rgba(13,31,60,0.95) 0%, ${proj.color}08 100%)`,
                  borderRight: `1px solid ${proj.color}18`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 240,
                }}>
                  <Illustration />
                </div>

                {/* Text panel */}
                <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      padding: '0.2rem 0.65rem', borderRadius: '999px',
                      background: `${proj.color}18`, border: `1px solid ${proj.color}33`,
                      fontSize: '0.72rem', color: proj.color, fontWeight: 600,
                    }}>
                      ML Project
                    </span>
                    <span style={{ fontSize: '0.77rem', color: '#4a6fa5', fontWeight: 500 }}>{proj.period}</span>
                  </div>

                  <h3 style={{
                    fontSize: '1.08rem', fontWeight: 700, color: '#e8f0fe',
                    fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.3,
                  }}>
                    {proj.title}
                  </h3>

                  <p style={{ fontSize: '0.87rem', color: '#8ba3c7', lineHeight: 1.7 }}>
                    {proj.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {proj.highlights.map((h, hi) => (
                      <div key={hi} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <span style={{ color: proj.color, fontSize: '0.75rem', marginTop: '0.35rem', flexShrink: 0 }}>▸</span>
                        <span style={{ fontSize: '0.82rem', color: '#6a8fc8', lineHeight: 1.5 }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                    {proj.tags.map((tag) => (
                      <span key={tag} style={{
                        padding: '0.18rem 0.65rem', borderRadius: '999px',
                        background: `${proj.color}10`, border: `1px solid ${proj.color}2a`,
                        fontSize: '0.72rem', color: proj.color, fontWeight: 500,
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
