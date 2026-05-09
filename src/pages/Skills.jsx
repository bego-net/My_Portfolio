import { motion } from "framer-motion"
import Section from "../components/Section"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
} from "react-icons/si"

import { FiDatabase, FiTrendingUp, FiCode } from "react-icons/fi"
import { FaBrain } from "react-icons/fa"

const Skills = () => {
  /* ================================
        TECHNICAL SKILL CATEGORIES
  ================================= */

  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        { name: "HTML", icon: SiHtml5, level: 90 },
        { name: "CSS", icon: SiCss3, level: 90 },
        { name: "JavaScript", icon: SiJavascript, level: 85 },
        { name: "React", icon: SiReact, level: 85 },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Laravel", icon: SiLaravel, level: 80 },
        { name: "Node.js", icon: SiNodedotjs, level: 85 },
        { name: "Express", icon: SiExpress, level: 80 },
        { name: "REST APIs", icon: null, level: 80 },
      ],
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MySQL", icon: SiMysql, level: 85 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
        { name: "MongoDB", icon: SiMongodb, level: 85 },
      ],
    },
    {
      title: "Machine Learning Tools",
      icon: "🤖",
      skills: [
        { name: "Python", icon: SiPython, level: 90 },
        { name: "NumPy", icon: SiNumpy, level: 85 },
        { name: "Pandas", icon: SiPandas, level: 85 },
        { name: "Scikit-learn", icon: null, level: 80 },
        { name: "TensorFlow", icon: SiTensorflow, level: 75 },
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: [
        { name: "Git", icon: SiGit, level: 90 },
        { name: "GitHub", icon: SiGithub, level: 90 },
        { name: "Docker", icon: SiDocker, level: 75 },
        { name: "Postman", icon: SiPostman, level: 85 },
      ],
    },
  ]

  /* ================================
        MACHINE LEARNING CONTENT
  ================================= */

  const mlConcepts = [
    {
      title: "Supervised Learning",
      description:
        "Experience with classification and regression algorithms including logistic regression, decision trees, random forests, and support vector machines.",
      icon: FaBrain,
    },
    {
      title: "Unsupervised Learning",
      description:
        "Knowledge of clustering algorithms (K-means, hierarchical clustering) and dimensionality reduction techniques (PCA, t-SNE).",
      icon: FiDatabase,
    },
    {
      title: "Deep Learning",
      description:
        "Working with neural networks, convolutional neural networks (CNNs), and recurrent neural networks (RNNs) using TensorFlow and Keras.",
      icon: FiTrendingUp,
    },
    {
      title: "Model Evaluation",
      description:
        "Proficient in cross-validation, hyperparameter tuning, and using metrics like accuracy, precision, recall, F1-score, and ROC curves.",
      icon: FiCode,
    },
  ]

  /* ================================
      BACKEND EXPERTISE CONTENT
  ================================= */

  const backendConcepts = [
    {
      title: "API Development",
      description:
        "Building RESTful APIs using Node.js, Express, and Laravel with proper routing, middleware, and controller structure.",
      icon: FiCode,
    },
    {
      title: "Authentication & Authorization",
      description:
        "Implementing secure authentication systems using JWT, session-based authentication, and role-based access control.",
      icon: FaBrain,
    },
    {
      title: "Database Design & Optimization",
      description:
        "Designing relational and NoSQL databases, writing optimized queries, indexing, and managing migrations.",
      icon: FiDatabase,
    },
    {
      title: "Server Deployment & DevOps",
      description:
        "Deploying backend applications using Docker, configuring servers, environment variables, and production builds.",
      icon: FiTrendingUp,
    },
  ]

  const algorithms = [
    "Linear & Logistic Regression",
    "Decision Trees & Random Forests",
    "Support Vector Machines (SVM)",
    "K-Nearest Neighbors (KNN)",
    "Naive Bayes",
    "Neural Networks",
    "Convolutional Neural Networks (CNN)",
    "Recurrent Neural Networks (RNN)",
    "K-Means Clustering",
    "Principal Component Analysis (PCA)",
  ]

  const datasets = [
    "Structured data (CSV, Excel)",
    "Image datasets (CIFAR-10, custom collections)",
    "Text data (NLP preprocessing)",
    "Time series data",
    "Large-scale datasets with data cleaning and preprocessing",
  ]

  const workflow = [
    {
      step: 1,
      title: "Problem Definition",
      description:
        "Understanding the business problem and defining clear objectives for the ML solution.",
    },
    {
      step: 2,
      title: "Data Collection & Exploration",
      description:
        "Gathering relevant datasets and performing exploratory data analysis (EDA).",
    },
    {
      step: 3,
      title: "Data Preprocessing",
      description:
        "Cleaning data, handling missing values, feature engineering, and normalization.",
    },
    {
      step: 4,
      title: "Model Selection & Training",
      description:
        "Choosing appropriate algorithms and training models with validation.",
    },
    {
      step: 5,
      title: "Model Evaluation",
      description:
        "Assessing performance using metrics and cross-validation.",
    },
  ]

  return (
    <Section
      title="Tech Stack"
      subtitle="Skills & Expertise"
    >
      <div className="space-y-16">
        {/* Top Level Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories?.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-2xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills?.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && <skill.icon className="text-primary-500" size={16} />}
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-500 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (skillIndex * 0.1) }}
                        className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ML Expertise */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary-500 rounded-full" />
              Machine Learning
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mlConcepts?.map((concept, i) => (
                <motion.div
                  key={concept.title}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-2xl glass-card"
                >
                  <concept.icon className="text-primary-500 mb-3" size={20} />
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{concept.title}</h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2">{concept.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Expertise */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-8 h-[2px] bg-purple-500 rounded-full" />
              Backend Architecture
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {backendConcepts?.map((concept, i) => (
                <motion.div
                  key={concept.title}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-2xl glass-card"
                >
                  <concept.icon className="text-purple-500 mb-3" size={20} />
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{concept.title}</h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2">{concept.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Skills