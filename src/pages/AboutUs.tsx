import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, SparklesIcon, CodeBracketIcon, PaintBrushIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const AboutUs: React.FC = () => {
  const creators = [
    {
      name: 'bpple',
      role: '海南大学网络空间安全学院',
      avatar: '👨‍💻',
      description: '在校学生，尝试创造，热爱生活，热爱理想',
      contribution: '网站开发与技术实现,内容策划与理论研究',
      icon: <BookOpenIcon className="h-6 w-6" />,
      color: 'from-marx-red to-red-600'
    },
    {
      name: 'unjoker',
      role: '海南大学网络空间安全学院',
      avatar: '👩‍💻',
      description: '在校学生，喜欢研究创意，热爱不一样的事情',
      contribution: '网站开发与技术实现,活动策划与组织',
      icon: <CodeBracketIcon className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'iam0range',
      role: '海南大学网络空间安全学院',
      avatar: '👨‍🎨',
      description: '在校学生，用技术创造有意义的作品，用文字传播心中所爱',
      contribution: '视觉设计与交互体验,活动策划与组织',
      icon: <PaintBrushIcon className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 sm:py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <HeartIcon className="h-12 w-12 sm:h-16 sm:w-16 text-marx-red" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-chinese-title font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">关于项目</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 font-chinese">
          The-Marx-in-My-Mind，我们旨在通过WEB网站的方式去表达和宣传我们心中的马克思！🙂
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <div className="bg-gradient-to-r from-marx-red to-red-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-white opacity-10 rounded-full -mr-24 -mt-24 sm:-mr-48 sm:-mt-48"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-chinese-title font-bold mb-4 sm:mb-6">项目初衷</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 max-w-3xl mx-auto font-chinese">
                本项目是为了完成大二下学期《马克思主义基本原理》课程的实践任务，我们希望通过这个项目，让马克思主义不再是书本上的文字，而是活生生的思想。我们相信，经典理论在新时代依然有着强大的生命力。
              </p>
              <div className="flex justify-center items-center gap-2">
                <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-lg sm:text-xl font-chinese-elegant font-medium">感谢老师，让我们有机会去用心学习和了解马克思</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Creators Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-chinese-title font-bold text-center mb-8 sm:mb-12 text-gray-800 dark:text-gray-100">创作团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {creators.map((creator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-br ${creator.color} rounded-t-2xl p-6 sm:p-8 text-white text-center`}>
                  <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">{creator.avatar}</div>
                  <h3 className="text-xl sm:text-2xl font-chinese-title font-bold mb-1">{creator.name}</h3>
                  <p className="text-sm sm:text-base opacity-90 font-chinese">{creator.role}</p>
                </div>
                
                {/* Card Body */}
                <div className="p-6 sm:p-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed font-chinese">
                    {creator.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                    <div className="text-marx-red">{creator.icon}</div>
                    <span className="text-sm sm:text-base font-chinese font-medium">{creator.contribution}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Bottom Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 transition-colors duration-300">
            <h2 className="text-2xl sm:text-3xl font-chinese-title font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-100">一起前行</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-chinese">
              我们相信，每一个了解马克思主义的人，都是在为建设更美好的世界贡献力量。
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="mailto:contact@marx-website.com"
                className="bg-marx-red text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-red-700 transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <HeartIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                联系我们
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUs; 