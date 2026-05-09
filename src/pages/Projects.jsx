import { motion } from 'framer-motion'
import Section from '../components/Section'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'
import {
  SiLaravel,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: 'Lost & Found System',
      description:
        'A full-stack Lost & Found web application built with React, Node.js, and MongoDB. Features secure authentication, real-time user chat, AI-powered item description matching, advanced search and filtering, and role-based access control. Designed with a responsive Tailwind CSS interface and scalable backend architecture.',
  technologies: [
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'tailwind', icon: SiTailwindcss },
        { name: 'MongoDB', icon: SiMongodb },
      ],
      github: 'https://github.com/bego-net/lost-and-found-backend',
      demo: null,
      category: 'Full-Stack',
    },
    {
  title: 'Hawi Software Solutions – Official Website Backend',
  description:
    'A production-ready backend system developed for the official Hawi Software Solutions website using Laravel and MySQL. Implements RESTful APIs, secure authentication, admin content management, contact form handling, and dynamic data rendering. Deployed on Apache server with optimized database structure and scalable architecture.',
  technologies: [
    { name: 'Laravel', icon: SiLaravel },
    { name: 'MySQL', icon: SiMysql },
  ],
  github: 'https://github.com/bego-net/hawi_backend',
  demo: null,
  category: 'Backend',
},
    {
  title: 'YB Charity Team – Full-Stack Web Platform',
  description:
    'A full-stack web application developed for the YB Charity Team using the MERN stack (MongoDB, Express, React, Node.js). The platform includes secure authentication, donation management, member registration, event announcements, and admin dashboard for content management. Designed with a scalable backend architecture and responsive user interface.',
  technologies: [
    { name: 'React', icon: SiReact },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'MongoDB', icon: SiMongodb },
  ],
  github: 'https://github.com/bego-net/charity-backend',
  demo: null,
  category: 'Full-Stack',
},
    
    {
      title: 'Vector Space Model Search Engine',
      description:
        'A Python-based search engine implementing the Vector Space Model using TF-IDF weighting and cosine similarity for document ranking and information retrieval.',
      technologies: [
        { name: 'Python', icon: SiPython },
      ],
      github: 'https://github.com/bego-net/Search-Engine',
      demo: null,
      category: 'Machine Learning',
    },
    {
      title: 'Urban Area Pollution Analysis',
      description:
        'A machine learning project analyzing urban air pollution data using preprocessing, feature engineering, regression models, and performance evaluation.',
      technologies: [
        { name: 'Python', icon: SiPython },
      ],
      github: 'https://github.com/bego-net/Data-Science-Project',
      demo: null,
      category: 'Machine Learning',
    },
    {
      title: 'AI Artist Generator',
      description:
        'An AI-powered image generation project leveraging deep learning techniques. Includes dataset preparation, neural network experimentation, and model evaluation.',
      technologies: [
        { name: 'Python', icon: SiPython },
      ],
      github: 'https://github.com/bego-net/trp1-ai-artist',
      demo: null,
      category: 'Machine Learning',
    },
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Backend':
        'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
      'Full-Stack':
        'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      'Frontend':
        'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      'Machine Learning':
        'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
    }
    return (
      colors[category] ||
      'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
    )
  }

  return (
    <Section title="Projects" subtitle="Some of my recent work">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <FiCode className="text-primary-500" size={20} />
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(
                          project.category
                        )}`}
                      >
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center space-x-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-700 dark:text-gray-300"
                      >
                        {tech.icon && <tech.icon size={14} />}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiGithub size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Projects