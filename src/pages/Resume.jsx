import { motion } from "framer-motion"
import Section from "../components/Section"
import Button from '../components/Button'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiDownload
} from "react-icons/fi"

const Resume = () => {
  return (
    <Section
      title="Experience"
      subtitle="History"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Experience Timeline */}
        <div className="lg:col-span-8 space-y-12">
          <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-200 dark:before:bg-gray-800">
            {/* Hawi Internship */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mb-12 before:absolute before:-left-[33px] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-primary-500 before:ring-4 before:ring-primary-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Backend Developer Intern</h3>
                <span className="text-xs font-bold text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  07/2025 – 09/2025
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-bold mb-4">Hawi Software Solution</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Worked on backend system development, API implementation, database design, and server-side logic. 
                Collaborated with frontend developers to integrate RESTful services and improve application performance and scalability.
              </p>
            </motion.div>

            {/* ASTU Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative before:absolute before:-left-[33px] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-purple-500 before:ring-4 before:ring-purple-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">BSc in Computer Science & Engineering</h3>
                <span className="text-xs font-bold text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  2022 – 2027
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-bold mb-4">Adama Science and Technology University</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Focused on software engineering principles, algorithm design, and artificial intelligence. 
                Consistently maintaining a high academic standing with a strong focus on practical engineering.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-8">
          {/* Professional Info */}
          <div className="glass p-8 rounded-3xl space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Quick Info</h4>
            <div className="space-y-4">
              {[
                { icon: FiMail, label: 'Email', value: 'begonetdebebe@gmail.com' },
                { icon: FiPhone, label: 'Phone', value: '+251 937 334 739' },
                { icon: FiMapPin, label: 'Location', value: 'Adama, Ethiopia' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                    <item.icon size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{item.label}</p>
                    <p className="text-xs font-medium text-gray-900 dark:text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <a 
                href="/Begonet-Debebe-CV.pdf" 
                download="Begonet-Debebe-CV.pdf"
                className="block"
              >
                <Button variant="primary" className="w-full h-12 rounded-xl text-sm font-bold shadow-lg shadow-primary-500/20">
                  <FiDownload className="mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Social Presence */}
          <div className="flex gap-3">
            {[
              { Icon: FiGithub, href: 'https://github.com/bego-net' },
              { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/begonet-d-b69b6536a' },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-12 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 hover:text-primary-500 hover:border-primary-500 transition-all"
              >
                <social.Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Resume