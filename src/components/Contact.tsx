import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dhruvkhandelwal011@gmail.com',
    href: 'mailto:dhruvkhandelwal011@gmail.com',
    color: '#4f8ef7',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'dhruv-khandelwal1',
    href: 'https://www.linkedin.com/in/dhruv-khandelwal1/',
    color: '#0a66c2',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'dhruv-k1',
    href: 'https://github.com/dhruv-k1',
    color: '#7c5cfc',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-7340303840',
    href: 'tel:+917340303840',
    color: '#00d4ff',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'IIT Roorkee, Uttarakhand, India',
    href: null,
    color: '#4a6fa5',
  },
]

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '6rem 1.5rem 8rem',
      }}
    >
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem', justifyContent: 'center' }}>
            <div style={{ width: 32, height: 2, background: 'linear-gradient(90deg, #4f8ef7, #7c5cfc)' }} />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.15em', color: '#4f8ef7', fontWeight: 600 }}>CONTACT</span>
            <div style={{ width: 32, height: 2, background: 'linear-gradient(90deg, #7c5cfc, #4f8ef7)' }} />
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#e8f0fe', marginBottom: '1rem' }}>
            Let's Build Something
            <span style={{ background: 'linear-gradient(135deg, #4f8ef7, #7c5cfc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Together</span>
          </h2>
          <p style={{ color: '#8ba3c7', lineHeight: 1.8, marginBottom: '3rem', fontSize: '0.97rem' }}>
            I'm actively looking for AI/ML engineering roles, research opportunities, and interesting projects.
            Whether it's a full-time role or a collaboration — let's talk.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '3rem' }}>
          {contactItems.map((item, i) => {
            const Icon = item.icon
            const inner = (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                whileHover={item.href ? { x: 6, borderColor: `${item.color}55` } : {}}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.4rem', borderRadius: '10px',
                  background: 'rgba(13,31,60,0.7)',
                  border: '1px solid rgba(26,52,96,0.8)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.25s',
                  cursor: item.href ? 'pointer' : 'default',
                  textAlign: 'left',
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: '9px', flexShrink: 0,
                  background: `${item.color}16`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={17} color={item.color} />
                </div>
                <div>
                  <div style={{ fontSize: '0.73rem', color: '#4a6fa5', fontWeight: 500, marginBottom: '0.1rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.9rem', color: '#c8d8f0', fontWeight: 500 }}>{item.value}</div>
                </div>
              </motion.div>
            )

            return item.href ? (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {inner}
              </a>
            ) : inner
          })}
        </div>

        {/* CTA */}
        <motion.a
          href="mailto:dhruvkhandelwal011@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(79,142,247,0.4)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-block',
            padding: '0.9rem 2.5rem',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #4f8ef7, #7c5cfc)',
            color: 'white',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.02em',
            boxShadow: '0 4px 24px rgba(79,142,247,0.25)',
          }}
        >
          Say Hello 👋
        </motion.a>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ marginTop: '4rem', fontSize: '0.78rem', color: '#2a4a78' }}
        >
          Designed & built by Dhruv Khandelwal • IIT Roorkee 2026
        </motion.p>
      </div>
    </section>
  )
}
