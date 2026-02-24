import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({ children, to, href, variant = 'primary', className = '', onClick, ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 inline-flex items-center justify-center space-x-2'
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
  }

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  )

  if (to) {
    return <Link to={to}>{buttonContent}</Link>
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}

export default Button

