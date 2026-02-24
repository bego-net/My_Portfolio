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
    {
      step: 6,
      title: "Model Deployment",
      description:
        "Deploying models for production and monitoring performance.",
    },
  ]

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technical stack and ML expertise"
    >
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= TECH SKILLS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6 transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {skill.icon && (
                          <skill.icon
                            className="text-gray-700 dark:text-gray-300"
                            size={20}
                          />
                        )}
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= ML CONCEPTS ================= */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
            Machine Learning Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mlConcepts.map((concept, index) => {
              const Icon = concept.icon
              return (
                <motion.div
                  key={concept.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <Icon
                        className="text-primary-600 dark:text-primary-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {concept.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {concept.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
         
         {/* ================= BACKEND EXPERTISE ================= */}
<div>
  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
    Backend Expertise
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {backendConcepts.map((concept, index) => {
      const Icon = concept.icon
      return (
        <motion.div
          key={concept.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
              <Icon
                className="text-primary-600 dark:text-primary-400"
                size={24}
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {concept.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {concept.description}
              </p>
            </div>
          </div>
        </motion.div>
      )
    })}
  </div>
</div>
        {/* ================= ALGORITHMS ================= */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Algorithms & Techniques
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {algorithms.map((algorithm) => (
              <div
                key={algorithm}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span>{algorithm}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DATASETS ================= */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Datasets Handled
          </h3>

          <div className="space-y-3">
            {datasets.map((dataset) => (
              <div
                key={dataset}
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
              >
                <FiDatabase className="text-primary-500" size={18} />
                <span>{dataset}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= WORKFLOW ================= */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Machine Learning Workflow
          </h3>

          <div className="space-y-4">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="flex items-start space-x-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  )
}

export default Skills