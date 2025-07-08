import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Skill icon component that supports both images and fallback initials
  const SkillIcon = ({ name, logoPath }: { name: string; logoPath?: string }) => {
    const getInitials = (skillName: string) => {
      return skillName
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    };

    const getColorFromName = (skillName: string) => {
      const colors = [
        'bg-gray-600', 'bg-gray-500', 'bg-gray-700', 'bg-slate-600',
        'bg-slate-500', 'bg-zinc-600', 'bg-zinc-500', 'bg-stone-600'
      ];
      let hash = 0;
      for (let i = 0; i < skillName.length; i++) {
        hash = skillName.charCodeAt(i) + ((hash << 5) - hash);
      }
      return colors[Math.abs(hash) % colors.length];
    };

    const [imageError, setImageError] = React.useState(false);

    if (logoPath && !imageError) {
      return (
        <div className="w-12 h-12 rounded-lg flex items-center justify-center p-1">
          <img
            src={logoPath}
            alt={`${name} logo`}
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
          />
        </div>
      );
    }

    // Fallback to initials if no image or image fails to load
    return (
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm ${getColorFromName(name)} text-white`}>
        {getInitials(name)}
      </div>
    );
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', logoPath: 'logos/python.png' },
        { name: 'R', logoPath: 'logos/r.png' },
        { name: 'C', logoPath: 'logos/c.png'},
        { name: 'JavaScript', logoPath: 'logos/javascript.png' },
        { name: 'Java', logoPath: 'logos/java.png' },
        { name: 'SQL', logoPath: 'logos/sql.png' },
      ],
    },
    {
      title: 'ML/AI Frameworks',
      skills: [
        { name: 'TensorFlow', logoPath: 'logos/tensorflow.png' },
        { name: 'PyTorch', logoPath: 'logos/pytorch.png' },
        { name: 'Scikit-learn', logoPath: 'logos/sklearn.png' },
        { name: 'Keras', logoPath: 'logos/keras.png' },
        { name: 'Hugging Face', logoPath: 'logos/huggingface.png' },
        { name: 'OpenCV', logoPath: 'logos/opencv.png' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', logoPath: 'logos/aws.png' },
        { name: 'Google Cloud', logoPath: 'logos/gcp.png' },
        { name: 'Docker', logoPath: 'logos/docker.png' },
        { name: 'Kubernetes', logoPath: 'logos/kubernetes.png' },
        { name: 'MLflow', logoPath: 'logos/mlflow.png' },
        { name: 'Apache Airflow', logoPath: 'logos/airflow.png' },
      ],
    },
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'Pandas', logoPath: 'logos/pandas.png' },
        { name: 'NumPy', logoPath: 'logos/numpy.png' },
        { name: 'Apache Spark', logoPath: 'logos/spark.png' },
        { name: 'Tableau', logoPath: 'logos/tableau.png' },
        { name: 'Power BI', logoPath: 'logos/powerbi.png' },
        { name: 'Jupyter', logoPath: 'logos/jupyter.png' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise in AI/ML technologies and tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gray-900 rounded-xl p-8 border border-gray-600"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.1),
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-600 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-500 hover:border-primary-500"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <SkillIcon name={skill.name} logoPath={skill.logoPath} />
                      <span className="text-white font-medium text-sm">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Deep Learning', 'Computer Vision', 'Natural Language Processing',
              'Reinforcement Learning', 'MLOps', 'Data Engineering',
              'Statistical Analysis', 'A/B Testing', 'Model Deployment',
              'Big Data', 'Time Series Analysis', 'Recommendation Systems','LLMs'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-600 text-white px-4 py-2 rounded-full font-medium hover:bg-gray-500 transition-all duration-200 shadow-lg border border-gray-500"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;