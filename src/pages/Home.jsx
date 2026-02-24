import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import Button from '../components/Button'
import Section from '../components/Section'
import profile from '../assets/profile.png'

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

  return (
    <Section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-xl"
          >
            <img src={profile} alt="Profile" className="w-full h-full object-cover rounded-full" />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Hi, I'm <span className="gradient-text">Begonet Debebe</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2"
        >
          Backend Developer||  Machine Learning Engineer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8"
        >
          Laravel, Node.js & python Expert
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate software engineer with strong backend expertise, experience in full-stack web development, and applied machine learning projects. Skilled in building scalable systems, APIs, and intelligent applications.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button to="/projects" variant="primary">
            <span>View Projects</span>
            <FiArrowRight />
          </Button>
          <Button to="/contact" variant="outline">
            <span>Contact Me</span>
            <FiArrowRight />
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, repeat: Infinity, repeatType: 'reverse', duration: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 mx-auto border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default Home

