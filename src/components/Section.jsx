import { motion } from 'framer-motion'

const Section = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-24 md:py-32 relative ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-left mb-16 max-w-3xl"
          >
            {subtitle && (
              <p className="text-primary-500 dark:text-primary-400 font-mono text-sm uppercase tracking-[0.3em] mb-4">
                {subtitle}
              </p>
            )}
            {title && (
              <div className="relative inline-block">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                  {title}
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '60px' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-1.5 bg-primary-500 mt-4 rounded-full"
                />
              </div>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section

