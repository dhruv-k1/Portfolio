import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      if (isOpen) setIsOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  const handleLinkClick = () => setIsOpen(false)

  // Hamburger bar variants
  const bar1 = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 7 },
  }
  const bar2 = {
    closed: { opacity: 1, scaleX: 1 },
    open: { opacity: 0, scaleX: 0 },
  }
  const bar3 = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -7 },
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled || isOpen ? 'rgba(5, 10, 24, 0.96)' : 'transparent',
          backdropFilter: scrolled || isOpen ? 'blur(20px)' : 'none',
          borderBottom: scrolled || isOpen ? '1px solid rgba(79,142,247,0.12)' : 'none',
          transition: 'background 0.3s ease, border 0.3s ease',
        }}
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.04 }}
          style={{
            fontSize: '1.25rem',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            background: 'linear-gradient(135deg, #4f8ef7, #7c5cfc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px',
            zIndex: 101,
          }}
        >
          DK
        </motion.a>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ color: '#4f8ef7' }}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#8ba3c7',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:dhruvkhandelwal011@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(79,142,247,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #4f8ef7, #7c5cfc)',
                color: 'white',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
              }}
            >
              Hire Me
            </motion.a>
          </div>
        )}

        {/* Hamburger button (mobile) */}
        {isMobile && (
          <motion.button
            onClick={() => setIsOpen((prev) => !prev)}
            animate={isOpen ? 'open' : 'closed'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              zIndex: 101,
            }}
            aria-label="Toggle menu"
          >
            <motion.span
              variants={bar1}
              transition={{ duration: 0.3 }}
              style={{ display: 'block', width: 24, height: 2, borderRadius: 2, background: '#e8f0fe', transformOrigin: 'center' }}
            />
            <motion.span
              variants={bar2}
              transition={{ duration: 0.2 }}
              style={{ display: 'block', width: 24, height: 2, borderRadius: 2, background: '#e8f0fe', transformOrigin: 'center' }}
            />
            <motion.span
              variants={bar3}
              transition={{ duration: 0.3 }}
              style={{ display: 'block', width: 24, height: 2, borderRadius: 2, background: '#e8f0fe', transformOrigin: 'center' }}
            />
          </motion.button>
        )}
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: 64,
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(5, 10, 24, 0.98)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(79,142,247,0.15)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.25 }}
                whileHover={{ x: 6, color: '#4f8ef7' }}
                style={{
                  padding: '0.85rem 0.5rem',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  color: '#8ba3c7',
                  borderBottom: '1px solid rgba(79,142,247,0.08)',
                  transition: 'color 0.2s',
                  display: 'block',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:dhruvkhandelwal011@gmail.com"
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.25 }}
              whileHover={{ scale: 1.02 }}
              style={{
                marginTop: '1rem',
                padding: '0.75rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #4f8ef7, #7c5cfc)',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.95rem',
                textAlign: 'center',
              }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
