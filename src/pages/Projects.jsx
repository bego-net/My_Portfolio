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
    <Section title="Featured Work" subtitle="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group glass-card rounded-[2rem] overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            {/* Project Image Placeholder / Visual */}
            <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <FiCode size={40} className="text-gray-400 opacity-20" />
              </div>
              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-[10px] font-bold uppercase tracking-widest text-primary-500 border border-primary-500/20 bg-white/80 dark:bg-black/50">
                {project.category}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 h-11 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  <FiGithub size={16} />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 h-11 rounded-xl bg-primary-500 hover:bg-primary-600 flex items-center justify-center gap-2 text-xs font-bold text-white shadow-lg shadow-primary-500/20 transition-all"
                >
                  <FiExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default Projects