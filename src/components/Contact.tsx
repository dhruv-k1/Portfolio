'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'dhruv-khandelwal1',
    href: 'https://www.linkedin.com/in/dhruv-khandelwal1/',
    color: '#0a66c2',
    bg: 'rgba(10,102,194,0.12)',
    border: 'rgba(10,102,194,0.35)',
  },
  {
    icon: Github,
    label: 'GitHub',
    handle: 'dhruv-k1',
    href: 'https://github.com/dhruv-k1',
    color: '#e8f0fe',
    bg: 'rgba(232,240,254,0.08)',
    border: 'rgba(232,240,254,0.2)',
  },
  {
    icon: Mail,
    label: 'Gmail',
    handle: 'dhruvkhandelwal011@gmail.com',
    href: 'mailto:dhruvkhandelwal011@gmail.com',
    color: '#ea4335',
    bg: 'rgba(234,67,53,0.1)',
    border: 'rgba(234,67,53,0.3)',
  },
]

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:dhruvkhandelwal011@gmail.com?subject=${subject}&body=${body}`
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.8rem 1rem',
    borderRadius: '8px',
    border: '1px solid rgba(79,142,247,0.2)',
    background: 'rgba(5,10,24,0.6)',
    color: '#e8f0fe',
    fontSize: '0.9rem',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.2s',
  }

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem 8rem' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem' }}>
            <div style={{ width: 32, height: 2, background: 'linear-gradient(90deg, #4f8ef7, #7c5cfc)' }} />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.15em', color: '#4f8ef7', fontWeight: 600 }}>CONTACT</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#e8f0fe' }}>
            Let's Build Something{' '}
            <span style={{ background: 'linear-gradient(135deg, #4f8ef7, #7c5cfc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Together
            </span>
          </h2>
          <p style={{ color: '#8ba3c7', marginTop: '0.6rem', fontSize: '0.97rem', maxWidth: 500 }}>
            I'm actively looking for AI/ML engineering roles, research opportunities, and interesting projects.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}>

          {/* LEFT: Social links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              style={{ fontSize: '0.85rem', color: '#4a6fa5', marginBottom: '0.5rem', fontWeight: 500 }}
            >
              Find me on
            </motion.p>

            {socials.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
                  whileHover={{ x: 6, borderColor: s.border, scale: 1.01 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                    padding: '1.4rem 1.6rem',
                    borderRadius: '14px',
                    background: s.bg,
                    border: `1px solid ${s.border}`,
                    backdropFilter: 'blur(12px)',
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{
                    width: 52, height: 52, borderRadius: '12px',
                    background: s.bg,
                    border: `1px solid ${s.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={24} color={s.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#e8f0fe', fontFamily: "'Space Grotesk', sans-serif" }}>
                      {s.label}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#8ba3c7', marginTop: '0.15rem' }}>
                      {s.handle}
                    </div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: '#4a6fa5', fontSize: '1rem' }}>→</div>
                </motion.a>
              )
            })}

            {/* Footer note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              style={{ fontSize: '0.78rem', color: '#2a4a78', marginTop: '1rem', textAlign: 'center' }}
            >
              Designed & built by Dhruv Khandelwal · IIT Roorkee 2026
            </motion.p>
          </div>

          {/* RIGHT: Direct email form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              padding: '2rem',
              borderRadius: '16px',
              background: 'rgba(13,31,60,0.7)',
              border: '1px solid rgba(79,142,247,0.18)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#e8f0fe', marginBottom: '0.4rem', fontFamily: "'Space Grotesk', sans-serif" }}>
              Send a Message
            </h3>
            <p style={{ fontSize: '0.83rem', color: '#4a6fa5', marginBottom: '1.8rem' }}>
              I'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: '#4a6fa5', fontWeight: 600, letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  required
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'rgba(79,142,247,0.6)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(79,142,247,0.2)')}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#4a6fa5', fontWeight: 600, letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  required
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'rgba(79,142,247,0.6)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(79,142,247,0.2)')}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#4a6fa5', fontWeight: 600, letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                  MESSAGE
                </label>
                <textarea
                  placeholder="How can I help you?"
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(79,142,247,0.6)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(79,142,247,0.2)')}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 32px rgba(79,142,247,0.5)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '0.95rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #4f8ef7 0%, #7c5cfc 100%)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginTop: '0.5rem',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
