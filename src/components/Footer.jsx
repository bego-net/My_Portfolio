import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/bego-net', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/begonet-d-b69b6536a', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:begonetdebebe@gmail.com', label: 'Email' },
    { icon: FiTwitter, href: 'https://x.com/BegonetDebebe', label: 'Twitter' },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Begonet Debebe. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

