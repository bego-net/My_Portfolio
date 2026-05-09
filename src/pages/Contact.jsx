import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../components/Section'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin, FiPhone, FiCheckCircle, FiAlertCircle, FiX, FiArrowRight } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import Button from '../components/Button'

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_8pfrmha'
const EMAILJS_TEMPLATE_ID = 'template_s1u4vqi'
const EMAILJS_PUBLIC_KEY = 'AAXkTpLOp2ZzROGWW'

const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setNotification({ type: 'success', message: 'Message sent successfully!' })
      e.target.reset()
    })
    .catch(() => {
      setNotification({ type: 'error', message: 'Something went wrong. Please try again.' })
    })
    .finally(() => {
      setLoading(false)
      setTimeout(() => setNotification(null), 5000)
    })
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'begonetdebebe@gmail.com',
      href: 'mailto:begonetdebebe@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+251 937 334 739',
      href: 'tel:+251937334739',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Adama, Ethiopia',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/bego-net', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/begonet-d-b69b6536a', label: 'LinkedIn' },
    { icon: FiArrowRight, href: 'https://x.com/BegonetDebebe', label: 'X' },
  ]

  return (
    <Section id="contact" title="Get In Touch" subtitle="Contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Side: Contact Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Have a project in mind? <br />
              <span className="text-primary-500">Let's build it together.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <info.icon size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Presence */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 hover:text-primary-500 hover:border-primary-500 transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-bold text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
        >
          <AnimatePresence>
            {notification && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`absolute top-0 left-0 right-0 p-4 text-center text-sm font-bold text-white ${
                  notification.type === 'success' ? 'bg-emerald-500' : 'bg-rose-500'
                }`}
              >
                {notification.message}
              </motion.div>
            )}
          </AnimatePresence>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                  className="w-full h-14 px-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none text-gray-900 dark:text-white font-medium"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  required
                  className="w-full h-14 px-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none text-gray-900 dark:text-white font-medium"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="How can I help you?"
                required
                className="w-full h-14 px-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none text-gray-900 dark:text-white font-medium"
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
                rows="5"
                className="w-full p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none text-gray-900 dark:text-white font-medium resize-none"
              ></textarea>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className={`w-full h-16 rounded-2xl font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-3 transition-all ${
                loading 
                ? 'bg-gray-200 dark:bg-gray-800 text-gray-400' 
                : 'bg-primary-500 text-white shadow-xl shadow-primary-500/30 hover:bg-primary-600 hover:shadow-primary-500/40'
              }`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <FiSend className="text-lg" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </Section>
  )
}

export default Contact
