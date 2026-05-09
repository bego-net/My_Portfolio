import { motion } from 'framer-motion'
import Section from '../components/Section'
import { FiCode, FiDatabase, FiCpu, FiTarget } from 'react-icons/fi'

const About = () => {
  const interests = [
    {
      icon: FiCode,
      title: 'Backend Development',
      description: 'Building robust APIs and server-side applications with Laravel and Node.js',
    },
    {
      icon: FiDatabase,
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing queries for performance',
    },
    {
      icon: FiCpu,
      title: 'Machine Learning',
      description: 'Developing intelligent systems and predictive models using Python and TensorFlow',
    },
    {
      icon: FiTarget,
      title: 'System Architecture',
      description: 'Designing scalable and maintainable software architectures',
    },
  ]

  return (
    <Section title="About Me" subtitle="Biography">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Column - Main Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              I am a passionate <span className="text-primary-500 font-bold">Full-Stack Developer</span> specializing in backend architecture and machine learning.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With over 3 years of academic and project experience, I thrive on building scalable web applications and intelligent systems.
              My journey in tech is driven by a deep curiosity for how complex systems work and a commitment to writing clean, maintainable code.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently focused on mastering cloud-native architectures and advancing my expertise in deep learning models for production environments.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            {[
              { label: 'Experience', value: '3+ Years' },
              { label: 'Projects', value: '10+' },
              { label: 'Clients', value: '2+' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl glass-card">
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Interests Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 grid grid-cols-1 gap-4"
        >
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Core Focus Areas</h3>
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              whileHover={{ x: 10 }}
              className="p-5 rounded-2xl glass-card flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500">
                <interest.icon size={22} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">{interest.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{interest.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export default About

