import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../components/Section'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin, FiPhone, FiUser, FiMessageSquare, FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

// ─────────────────────────────────────────────────────────────
// EmailJS Configuration
// Replace these with your actual EmailJS credentials
// See the setup guide artifact for instructions
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_8pfrmha'      // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_s1u4vqi'    // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'AAXkTpLOp2ZzROGWW'       // e.g. 'AbCdEfGhIjKlMnOp'

// ─────────────────────────────────────────────────────────────
// Notification Component
// ─────────────────────────────────────────────────────────────
const Notification = ({ type, message, onClose }) => {
  const config = {
    success: {
      icon: FiCheckCircle,
      bg: 'bg-emerald-50 dark:bg-emerald-900/30',
      border: 'border-emerald-200 dark:border-emerald-700',
      text: 'text-emerald-800 dark:text-emerald-200',
      iconColor: 'text-emerald-500',
      progressBar: 'bg-emerald-500',
    },
    error: {
      icon: FiAlertCircle,
      bg: 'bg-red-50 dark:bg-red-900/30',
      border: 'border-red-200 dark:border-red-700',
      text: 'text-red-800 dark:text-red-200',
      iconColor: 'text-red-500',
      progressBar: 'bg-red-500',
    },
  }

  const c = config[type]
  const Icon = c.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`relative overflow-hidden p-4 rounded-xl border ${c.bg} ${c.border} shadow-lg`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`${c.iconColor} flex-shrink-0 mt-0.5`} size={20} />
        <p className={`${c.text} text-sm font-medium flex-1`}>{message}</p>
        <button
          onClick={onClose}
          className={`${c.text} opacity-60 hover:opacity-100 transition-opacity flex-shrink-0`}
        >
          <FiX size={16} />
        </button>
      </div>
      {/* Auto-dismiss progress bar */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 6, ease: 'linear' }}
        className={`absolute bottom-0 left-0 right-0 h-0.5 ${c.progressBar} origin-left`}
      />
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// Loading Spinner
// ─────────────────────────────────────────────────────────────
const LoadingSpinner = () => (
  <div className="flex items-center gap-2">
    <motion.div
      className="flex gap-1"
      initial="start"
      animate="end"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 bg-white rounded-full"
          animate={{
            y: [0, -6, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
    <span>Sending...</span>
  </div>
)

// ─────────────────────────────────────────────────────────────
// Form Input Component with floating label effect
// ─────────────────────────────────────────────────────────────
const FormInput = ({ id, name, type = 'text', value, onChange, label, icon: Icon, error, placeholder, required = true }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <label
        htmlFor={id}
        className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
          isFocused
            ? 'text-primary-500 dark:text-primary-400'
            : 'text-gray-700 dark:text-gray-300'
        }`}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative group">
        {Icon && (
          <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
            isFocused
              ? 'text-primary-500 dark:text-primary-400'
              : 'text-gray-400 dark:text-gray-500'
          }`}>
            <Icon size={16} />
          </div>
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          placeholder={placeholder}
          className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3.5 rounded-xl border-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 outline-none ${
            error
              ? 'border-red-400 dark:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-800'
              : 'border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/50'
          } hover:border-gray-300 dark:hover:border-gray-600`}
        />
        {/* Focus glow effect */}
        <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${
          isFocused ? 'opacity-100' : 'opacity-0'
        }`} style={{
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.03), rgba(147, 51, 234, 0.03))',
        }} />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -5, height: 0 }}
            className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1"
          >
            <FiAlertCircle size={12} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// Main Contact Component
// ─────────────────────────────────────────────────────────────
const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState(null)
  const [charCount, setCharCount] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === 'message') {
      setCharCount(value.length)
    }

    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  // ── Validation ──────────────────────────────────────────
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ── Submit Handler (EmailJS) ────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setNotification({
        type: 'error',
        message: 'Please fix the errors above before submitting.',
      })
      setTimeout(() => setNotification(null), 6000)
      return
    }

    setIsSubmitting(true)
    setNotification(null)

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_name: 'Begonet',
        reply_to: formData.email.trim(),
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      // Success
      setNotification({
        type: 'success',
        message: '🎉 Message sent successfully! I\'ll get back to you soon.',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
      setCharCount(0)
      setErrors({})
    } catch (error) {
      console.error('EmailJS Error:', error)
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.',
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setNotification(null), 6000)
    }
  }

  // ── Contact Info Data ───────────────────────────────────
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'begonetdebebe@gmail.com',
      href: 'mailto:begonetdebebe@gmail.com',
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+251 937334739',
      href: 'tel:+251937334739',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Available for Remote Work',
      href: null,
      gradient: 'from-violet-500 to-purple-600',
    },
  ]

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/bego-net',
      hoverBg: 'hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/begonet-d-b69b6536a',
      hoverBg: 'hover:bg-blue-600 hover:text-white',
    },
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:begonetdebebe@gmail.com',
      hoverBg: 'hover:bg-primary-500 hover:text-white',
    },
  ]

  return (
    <Section id="contact" title="Contact" subtitle="Let's work together">
      <div className="max-w-6xl mx-auto">
        {/* Notification Toast */}
        <div className="fixed top-24 right-4 z-50 w-full max-w-sm">
          <AnimatePresence>
            {notification && (
              <Notification
                type={notification.type}
                message={notification.message}
                onClose={() => setNotification(null)}
              />
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* ─── Left Column: Contact Info (2/5) ─── */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Get in <span className="gradient-text">Touch</span>
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              I'm always open to new projects, collaborations, or just a friendly chat.
              Drop me a message and I'll get back to you as soon as possible.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} shadow-lg`}>
                    <info.icon className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium mb-0.5">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-900 dark:text-white font-medium hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 dark:text-white font-medium text-sm">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold mb-4">
                Connect with me
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-100 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 shadow-sm transition-all duration-300 ${social.hoverBg}`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              className="hidden lg:block mt-10 p-5 rounded-2xl bg-gradient-to-br from-primary-500/5 to-purple-500/5 dark:from-primary-500/10 dark:to-purple-500/10 border border-primary-100/50 dark:border-primary-800/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Available for opportunities
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Currently open to freelance projects, full-time roles, and exciting collaborations.
                Response time: usually within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* ─── Right Column: Contact Form (3/5) ─── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="relative p-6 md:p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/50 shadow-xl"
            >
              {/* Subtle gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5 pointer-events-none" />

              <div className="relative space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormInput
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    label="Full Name"
                    icon={FiUser}
                    error={errors.name}
                    placeholder="John Doe"
                  />
                  <FormInput
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    label="Email Address"
                    icon={FiMail}
                    error={errors.email}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <FormInput
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  label="Subject"
                  icon={FiMessageSquare}
                  error={errors.subject}
                  placeholder="What's this about?"
                />

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <span className={`text-xs transition-colors ${
                      charCount > 1000
                        ? 'text-red-400'
                        : charCount > 800
                        ? 'text-amber-400'
                        : 'text-gray-400 dark:text-gray-500'
                    }`}>
                      {charCount}/1000
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={1000}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 outline-none resize-none ${
                      errors.message
                        ? 'border-red-400 dark:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-800'
                        : 'border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/50'
                    } hover:border-gray-300 dark:hover:border-gray-600`}
                    placeholder="Tell me about your project, idea, or just say hello..."
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -5, height: 0 }}
                        className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1"
                      >
                        <FiAlertCircle size={12} />
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.01, y: -1 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                    isSubmitting
                      ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:shadow-primary-500/25 hover:shadow-xl active:shadow-md'
                  }`}
                >
                  {isSubmitting ? (
                    <LoadingSpinner />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend size={16} />
                    </>
                  )}
                </motion.button>

                {/* Privacy note */}
                <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                  Your information is secure and will never be shared with third parties.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
