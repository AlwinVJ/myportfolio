import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'AI/ML Intern',
      company: 'ChefInTech',
      location: 'Kochi, Kerala, India',
      period: '2022 - 2024',
      type: 'Full-time',
      achievements: [
        'Fine tuned models for generating diet plans according to user input',
        'Managed Data collection and Analysis',
        'Collaborated with cross-functional teams on product features'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch','FastAPI', 'AWS', 'Docker',],
    },
    {
      title: 'Flutter Developer',
      company: 'ChefInTech',
      location: 'Kochi, Kerala, India',
      period: '2022 - 2024',
      type: 'Full-time',
      achievements: [
        'Worked closely with UI/UX designers to draft interactive and responsive mobile appliction design',
        'Developed mobile application through flutter framework',
        'Assisted in the integration of third-part APIs and services to enhance application functionality',
      ],
      technologies: ['Dart', 'Flutter', 'Firebase',],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey in artificial intelligence, machine learning and FullStack Development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className="bg-gray-700 rounded-xl p-8 border border-gray-600 hover:border-primary-500 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase className="text-primary-400 mr-3" size={24} />
                      <h3 className="text-2xl font-bold text-white">
                        {exp.title}
                      </h3>
                    </div>
                    <h4 className="text-xl text-primary-300 font-semibold mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mb-4">
                      <div className="flex items-center mr-6 mb-2 sm:mb-0">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center mr-6 mb-2 sm:mb-0">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <span className="bg-accent-600 text-white px-3 py-1 rounded-full text-sm">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-3">
                    Key Responsibilities:
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                        className="flex items-start text-gray-300"
                      >
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">
                    Technologies Used:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (idx * 0.05) }}
                        className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-primary-600 hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;