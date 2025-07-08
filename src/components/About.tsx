import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Database, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Developing intelligent algorithms that learn from data',
    },
    {
      icon: Code,
      title: 'Deep Learning',
      description: 'Building neural networks for complex pattern recognition',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Extracting insights from large-scale datasets',
    },
    {
      icon: Zap,
      title: 'AI Solutions',
      description: 'Creating innovative AI-powered applications',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate AI/ML Engineer with expertise in developing intelligent systems 
            that solve real-world problems. With a strong foundation in mathematics, statistics, 
            and computer science, I specialize in creating scalable machine learning solutions 
            that drive business value and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-xl border border-gray-600 hover:border-primary-500 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4"
              >
                <feature.icon className="text-white" size={24} />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;