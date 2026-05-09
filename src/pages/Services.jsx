import { motion } from 'framer-motion'
import Section from '../components/Section'
import { FiCode, FiServer, FiLayout, FiActivity, FiLayers, FiShield, FiArrowRight } from 'react-icons/fi'

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
    <Section title="Expertise" subtitle="Services">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-1 rounded-3xl bg-gradient-to-br from-transparent to-transparent hover:from-primary-500/20 hover:to-purple-500/20 transition-all duration-500"
          >
            <div className="relative h-full glass p-8 rounded-[22px] overflow-hidden">
              {/* Icon with animated background */}
              <div className="relative z-10 mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg shadow-black/5 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <service.icon size={28} />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-bold text-primary-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span>Learn Project Details</span>
                  <FiArrowRight />
                </div>
              </div>

              {/* Decorative background element */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default Services
