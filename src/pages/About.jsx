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
    <Section id="about" title="About Me" subtitle="Get to know me">
      <div className="max-w-4xl mx-auto">
        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Summary
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            I am a passionate Full-Stack Developer with a strong focus on backend development and machine learning. 
            My expertise lies in building scalable web applications using Laravel and Node.js, creating RESTful APIs, 
            and developing intelligent systems powered by machine learning algorithms.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            With a solid foundation in software engineering principles, I enjoy solving complex problems and 
            turning ideas into reality through clean, efficient code. I'm always eager to learn new technologies 
            and stay updated with the latest trends in software development and artificial intelligence.
          </p>
        </motion.div>

        {/* Career Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Career Goals
          </h3>
          <div className="space-y-3">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              • Continue advancing expertise in backend architecture and microservices design
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              • Develop production-ready machine learning models for real-world applications
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              • Contribute to open-source projects and share knowledge with the developer community
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              • Lead technical teams in building innovative software solutions
            </p>
          </div>
        </motion.div>

        {/* Technologies & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technologies & Interests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <interest.icon className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {interest.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default About

