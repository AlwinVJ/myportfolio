import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'BS in Data Science and its applications',
      institution: 'Indian Institute of Technolgy, IIT(M)',
      location: 'Chennai, TamilNadu, India',
      period: '2023 - Pursuing ',
      gpa: '7.9',
      highlights: [
        'Specialized in Deep Learning and Neural Networks',
        'Research in Computer Vision and NLP',
        'Teaching Assistant for Machine Learning Course',
      ],
    },
    {
      degree: 'Diploma in Mobile Application Development',
      institution: 'National Council for Technology and Training',
      location: 'New Delhi, India',
      period: '2021 - 2022',
      gpa: 'A+',
      highlights: [
        'Cross Platorm application development using Flutter Framework',
        'Focus on Algorithms and Data Structures',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey in Artificial Intelligence and Computer Science
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="text-primary-400 mr-3" size={24} />
                      <h3 className="text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                    </div>
                    <h4 className="text-xl text-primary-300 font-semibold mb-2">
                      {edu.institution}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mb-4">
                      <div className="flex items-center mr-6 mb-2 sm:mb-0">
                        <MapPin size={16} className="mr-2" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {edu.period}
                      </div>
                    </div>
                    <div className="text-accent-300 font-semibold mb-4">
                      CGPA/Grade: {edu.gpa}
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">
                    Key Highlights:
                  </h5>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                        className="flex items-center text-gray-300"
                      >
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;