import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import profile from '../assets/profile.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      const sectionIds = navLinks.map((l) => l.id)
      const offsets = sectionIds.map((id) => {
        const el = document.getElementById(id)
        return el ? el.offsetTop - 100 : 0
      })

      const currentPosition = window.scrollY
      let currentSection = 'hero'

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (currentPosition >= offsets[i]) {
          currentSection = sectionIds[i]
          break
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className={`relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled ? 'glass shadow-2xl border-white/20' : 'bg-transparent border-transparent'
        }`}>
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/20 transform group-hover:rotate-12 transition-transform">
              <span className="text-xl font-black">B</span>
            </div>
            <span className="hidden sm:block font-bold text-gray-900 dark:text-white tracking-tight">DEBEBE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                  activeSection === link.id 
                  ? 'text-primary-500' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary-500/10 rounded-xl"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl glass-card text-gray-500 hover:text-primary-500 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2.5 rounded-xl glass-card text-gray-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-6 right-6 h-[2px] bg-primary-500 origin-left rounded-full"
            style={{ scaleX }}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm z-[-1]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full left-4 right-4 mt-4 p-6 glass rounded-3xl shadow-2xl md:hidden flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-6 py-4 rounded-2xl text-lg font-bold uppercase tracking-widest text-left transition-all ${
                    activeSection === link.id 
                    ? 'bg-primary-500 text-white shadow-xl shadow-primary-500/20' 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
