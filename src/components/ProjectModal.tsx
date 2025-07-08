import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Play, Calendar, MapPin } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  category: string;
  date: string;
  status: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {
  const additionalProjects: Project[] = [
    {
      title: 'Sentiment Analysis API',
      description: 'RESTful API for real-time sentiment analysis of social media posts using BERT transformers. Processes 10,000+ requests daily with 94% accuracy.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'FastAPI', 'BERT', 'Docker', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'NLP',
      date: '2023',
      status: 'Production'
    },
    {
      title: 'Stock Price Predictor',
      description: 'LSTM-based neural network for predicting stock prices with technical indicators. Achieved 87% directional accuracy on S&P 500 data.',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Plotly', 'Alpha Vantage API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Finance',
      date: '2023',
      status: 'Completed'
    },
    {
      title: 'Image Classification Mobile App',
      description: 'React Native app with TensorFlow Lite for real-time image classification. Supports 1000+ object categories with offline capability.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'TensorFlow Lite', 'Expo', 'TypeScript'],
      github: 'https://github.com',
      category: 'Mobile',
      date: '2023',
      status: 'Beta'
    },
    {
      title: 'Fraud Detection System',
      description: 'Machine learning system for detecting fraudulent transactions using ensemble methods. Reduced false positives by 45% while maintaining 99.2% accuracy.',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Apache Kafka', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Security',
      date: '2022',
      status: 'Production'
    },
    {
      title: 'Voice Assistant Chatbot',
      description: 'Multi-modal AI assistant combining speech recognition, NLP, and text-to-speech. Supports voice commands and natural conversation flow.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Whisper', 'GPT-3.5', 'gTTS', 'Streamlit'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'AI Assistant',
      date: '2022',
      status: 'Prototype'
    },
    {
      title: 'Recommendation Engine',
      description: 'Collaborative filtering recommendation system for e-commerce platform. Increased user engagement by 32% and conversion rates by 18%.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Apache Spark', 'MLlib', 'Cassandra', 'Airflow'],
      github: 'https://github.com',
      category: 'E-commerce',
      date: '2022',
      status: 'Production'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'production': return 'bg-green-600';
      case 'beta': return 'bg-yellow-600';
      case 'prototype': return 'bg-gray-600';
      case 'completed': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div>
                <h2 className="text-3xl font-bold text-white">More Projects</h2>
                <p className="text-gray-400 mt-1">Additional AI/ML projects and experiments</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
              >
                <X className="text-gray-400 hover:text-white" size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-primary-500 transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                      <div className="absolute top-3 left-3 flex space-x-2">
                        <span className="bg-gray-700/90 text-white px-2 py-1 rounded text-xs font-medium">
                          {project.category}
                        </span>
                        <span className={`${getStatusColor(project.status)} text-white px-2 py-1 rounded text-xs font-medium`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span className="bg-gray-700/90 text-white px-2 py-1 rounded text-xs flex items-center">
                          <Calendar size={12} className="mr-1" />
                          {project.date}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex space-x-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-colors duration-200 text-sm flex-1 justify-center"
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </motion.a>
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-1 bg-gray-600 hover:bg-gray-500 text-white px-3 py-2 rounded-lg transition-colors duration-200 text-sm flex-1 justify-center"
                          >
                            <Play size={14} />
                            <span>Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;