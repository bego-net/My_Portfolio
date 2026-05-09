import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import Button from '../components/Button'
import Section from '../components/Section'
import profile from '../assets/profile.png'

// Import all sections
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Services from './Services'
import Resume from './Resume'
import Contact from './Contact'
import Footer from '../components/Footer'
import Background from '../components/Background'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80 // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col relative">
      <Background />
      {/* Hero Section */}
      <Section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-5xl mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 150, damping: 15 }}
              className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 p-1 rounded-full bg-gradient-to-tr from-primary-500 via-purple-500 to-indigo-600 shadow-2xl"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-inner">
                <img src={profile} alt="Profile" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
              </div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-2 bottom-4 bg-emerald-500 text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-white dark:border-gray-950 flex items-center gap-1.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                AVAILABLE FOR HIRE
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-primary-500 dark:text-primary-400 font-mono tracking-widest text-sm md:text-base font-semibold uppercase">
              // Software Engineer Portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Crafting <span className="gradient-text">Digital</span> <br />
              <span className="relative inline-block mt-2">
                Experiences
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-2 bg-primary-500/20 rounded-full"
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-10 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I'm <span className="font-bold text-gray-900 dark:text-white">Begonet Debebe</span>, a Backend Specialist & ML Engineer 
            focused on building high-performance, intelligent systems that scale.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Button onClick={() => scrollToSection('projects')} variant="primary" className="h-14 px-8 text-lg rounded-2xl shadow-primary-500/20 shadow-xl">
              <span>Explore My Work</span>
              <FiArrowRight className="text-lg" />
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="outline" className="h-14 px-8 text-lg rounded-2xl glass border-gray-200 dark:border-gray-700">
              <span>Let's Talk</span>
              <FiArrowRight className="text-lg" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex items-center justify-center gap-6"
          >
            {['Github', 'LinkedIn', 'Twitter'].map((social, i) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-gray-400 hover:text-primary-500 transition-colors text-sm font-medium tracking-widest uppercase flex items-center gap-2"
              >
                <span className="w-8 h-[1px] bg-gray-300 dark:bg-gray-800" />
                {social}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full flex items-start justify-center p-1.5 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <motion.div
              className="w-1 h-2 bg-primary-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </Section>

      {/* About Section Group */}
      <div id="about">
        <About />
        <Skills />
        <Resume />
      </div>

      {/* Projects Section Group */}
      <div id="projects">
        <Services />
        <Projects />
      </div>

      <Contact />
      <Footer />

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-primary-500 text-white shadow-2xl shadow-primary-500/25 hover:bg-primary-600 transition-colors"
            aria-label="Scroll to top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
