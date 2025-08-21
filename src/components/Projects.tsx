import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play, Plus } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'AI-Powered Resume Analyzing System',
      description: 'An AI‑powered resume analyzer and applicant tracking system that allows users to upload resumes, track applicants, and generate feedback with AI assistance',
      image: 'https://d1civoyjepycei.cloudfront.net/static/img/meta/meta-analytics.115b05c7850e.png',
      technologies: ['Javascript', 'React', 'Puter', 'OpenAI',],
      github: 'https://github.com/AlwinVJ/ai-resume-analyzer.git',
      // demo: 'https://demo.com',
      featured: true,
    },
    {
      title: 'AI Powered ChatBot',
      description: 'AI-powered virtual assistant designed to understand user queries and provide relevant, conversational responses across a wide range of topics.',
      image: 'https://static.vecteezy.com/system/resources/previews/022/429/751/non_2x/neural-network-natural-language-processing-algorithm-chat-bot-modern-banner-ai-chatbot-technology-and-artificial-general-intelligence-concept-for-seamless-digital-communication-vector.jpg',
      technologies: ['Python', 'Streamlit', 'OpenAI'],
      github: 'https://github.com/AlwinVJ/aichatbot',
      demo: 'https://aichatassistant.streamlit.app/',
      featured: true,
    },
    {
      title: 'Computer Vision Object Detection',
      description: 'Real-time object detection system for autonomous vehicles. Processes video streams at 60 FPS with high precision.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'YOLO', 'OpenCV', 'CUDA', 'ROS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Machine learning platform for business forecasting. Provides actionable insights through interactive visualizations.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Scikit-learn', 'Plotly', 'Streamlit', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative AI/ML solutions that solve real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-primary-500 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <Play size={16} />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gray-600 hover:bg-gray-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Plus size={20} />
            <span>View More Projects</span>
          </motion.button>
          <p className="text-gray-400 mt-3 text-sm">
            Explore additional AI/ML projects and experiments
          </p>
        </motion.div>

        {/* Project Modal */}
        <ProjectModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default Projects;