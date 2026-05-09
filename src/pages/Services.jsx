import { motion } from 'framer-motion'
import Section from '../components/Section'
import { FiCode, FiServer, FiLayout, FiActivity, FiLayers, FiShield } from 'react-icons/fi'

const Services = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications with modern technologies like React, Node.js, and Laravel.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiServer,
      title: 'Backend Architecture',
      description: 'Designing scalable and robust server-side systems, RESTful APIs, and database structures.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: FiLayout,
      title: 'UI/UX Implementation',
      description: 'Converting designs into responsive, pixel-perfect, and interactive user interfaces using Tailwind CSS.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: FiActivity,
      title: 'Machine Learning Solutions',
      description: 'Developing intelligent features, predictive models, and data-driven insights using Python.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: FiLayers,
      title: 'API Integration',
      description: 'Connecting third-party services and payment gateways to enhance application functionality.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: FiShield,
      title: 'System Security',
      description: 'Implementing secure authentication, data protection, and best security practices for web apps.',
      color: 'from-sky-500 to-blue-600',
    },
  ]

  return (
    <Section title="Services" subtitle="What I offer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              {/* Background Gradient Glow */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                <service.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="mt-6 flex items-center text-primary-500 font-semibold text-sm cursor-pointer group/link">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Services
