import { motion } from "framer-motion"
import Section from "../components/Section"
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
      title="Resume"
      subtitle="Software Engineering, Backend & Machine Learning Experience"
    >
      <div className="max-w-5xl mx-auto space-y-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Begonet Debebe
          </h2>

          <p className="text-primary-500 font-semibold mt-2">
            Software Engineer | Backend Developer | Machine Learning Enthusiast
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <FiMail className="text-primary-500" />
              begonetdebebe@gmail.com
            </div>

            <div className="flex items-center gap-2">
              <FiPhone className="text-primary-500" />
              +251937334739
            </div>

            <div className="flex items-center gap-2">
              <FiMapPin className="text-primary-500" />
              Adama, Ethiopia
            </div>

            <a
              href="https://github.com/bego-net"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary-500"
            >
              <FiGithub /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/begonet-debebe-798220303"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary-500"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* PROFILE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Profile
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Dedicated Computer Science and Engineering student with strong
            foundations in backend development, full-stack web applications,
            and machine learning. Experienced in building scalable REST APIs,
            database-driven systems, and intelligent applications using
            Node.js,Laravel, Express, React, MySQL, and MongoDB.
            Passionate about designing efficient systems, solving real-world
            problems, and continuously improving through hands-on projects
            and internships.
          </p>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-sm">

            <div>
              <p className="font-semibold text-primary-500 mb-2">
                Programming Languages
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Python, JavaScript, Java, C++, PHP
              </p>
            </div>

            <div>
              <p className="font-semibold text-primary-500 mb-2">
                Backend & Frameworks
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Node.js, PHP, Laravel, Express.js, Java Servlets, REST APIs
              </p>
            </div>

            <div>
              <p className="font-semibold text-primary-500 mb-2">
                Frontend
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                React.js, HTML, CSS, Tailwind CSS
              </p>
            </div>

            <div>
              <p className="font-semibold text-primary-500 mb-2">
                Databases
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                MySQL, MongoDB , PostgreSQL
              </p>
            </div>

            <div>
              <p className="font-semibold text-primary-500 mb-2">
                Machine Learning
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Supervised Learning, Classification, Regression,
                Model Evaluation, Data Cleaning
              </p>
            </div>

            <div>
              <p className="font-semibold text-primary-500 mb-2">
                Tools
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Git, GitHub, Jupyter Notebook, Google Colab,
                VS Code, MySQL Workbench
              </p>
            </div>

          </div>
        </motion.div>

        {/* EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <FiBriefcase className="text-primary-500" size={22} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Experience
            </h3>
          </div>

          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              Backend Developer Intern – Hawi Software Solution
            </p>
            <p className="text-primary-500 text-sm">
              07/2025 – 09/2025
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
              Worked on backend system development API implementation,
              database design, and server-side logic. Collaborated with
              frontend developers to integrate RESTful services and improve
              application performance and scalability.
            </p>
          </div>
        </motion.div>

        {/* PROJECTS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Key Projects
          </h3>

          <div className="space-y-6">

   <div>
  <p className="font-semibold text-gray-900 dark:text-white">
    Hawi Software Solutions – Backend API (Laravel, MySQL)
  </p>
  <p className="text-gray-600 dark:text-gray-300 text-sm">
    Developed the official website backend using Laravel and MySQL.
    Designed and implemented RESTful APIs, structured relational database
    schemas, and secure authentication mechanisms. Managed server-side
    business logic, optimized database queries, and deployed the application
    on Apache server to ensure scalable and reliable performance.
  </p>
</div>

<div>
  <p className="font-semibold text-gray-900 dark:text-white">
    Lost & Found System – Full Stack (React, Node.js, MongoDB)
  </p>
  <p className="text-gray-600 dark:text-gray-300 text-sm">
    Developed a full-stack Lost & Found web application using the MERN stack.
    Implemented secure user authentication, real-time chat functionality,
    AI-assisted item matching, and advanced search and filtering features.
    Designed RESTful APIs, structured database schemas, and built a responsive
    user interface for efficient item reporting and recovery management.
  </p>
</div>

<div>
  <p className="font-semibold text-gray-900 dark:text-white">
    YB Charity Team – Full Stack Web Platform (React, Node.js, MongoDB)
  </p>
  <p className="text-gray-600 dark:text-gray-300 text-sm">
    Built a full-stack charity management platform using the MERN stack.
    Implemented user authentication, donation management, event posting,
    and admin dashboard features. Developed RESTful APIs, designed
    MongoDB schemas, and created a responsive frontend interface for
    seamless user interaction and content management.
  </p>
</div>

            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                Java Servlet Web Application
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Built a dynamic web application using Java Servlets,
                JSP, and MySQL with session management and MVC architecture.
                Deployed on Apache Tomcat.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                Text-Based Search Engine (Vector Space Model)
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Implemented TF-IDF and cosine similarity algorithms to
                rank documents based on relevance.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                Urban Air Pollution Analysis – Zindi Challenge
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Performed data cleaning, preprocessing, and exploratory
                data analysis for machine learning modeling.
              </p>
            </div>

          </div>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <FiBookOpen className="text-primary-500" size={22} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Education
            </h3>
          </div>

          <p className="font-semibold text-gray-900 dark:text-white">
            BSc in Computer Science & Engineering
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Adama Science and Technology University
          </p>
          <p className="text-primary-500 text-sm mt-1">
            2022 – 2027 | Adama, Ethiopia
          </p>
        </motion.div>

        {/* ACHIEVEMENTS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <FiAward className="text-primary-500" size={22} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Achievements
            </h3>
          </div>

          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <li>• Participated in Codeforces contests and solved problems on LeetCode</li>
            <li>• Competed in Zindi machine learning challenges</li>
            <li>• Completed certified courses in Machine Learning & AI</li>
          </ul>
        </motion.div>

        {/* DOWNLOAD BUTTON */}
        <div className="text-center pt-10">
          <a
            href="/Begonet-Debebe-CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300"
          >
            <FiDownload />
            Download Full CV
          </a>
        </div>

      </div>
    </Section>
  )
}

export default Resume