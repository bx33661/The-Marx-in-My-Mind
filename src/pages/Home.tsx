import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  SparklesIcon, 
  BookOpenIcon, 
  ChatBubbleBottomCenterTextIcon,
  LightBulbIcon,
  UsersIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  const features = [
    {
      icon: PhotoIcon,
      title: '马克思画廊',
      description: '展示不同风格的马克思形象画像',
      link: '/gallery',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: BookOpenIcon,
      title: '马克思其人',
      description: '了解伟大思想家的生平与贡献',
      link: '/about',
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: '名言金句',
      description: '精选马克思经典语录与智慧',
      link: '/quotes',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: LightBulbIcon,
      title: '思想长廊',
      description: '深入了解马克思主义核心思想',
      link: '/ideas',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: UsersIcon,
      title: '互动空间',
      description: '分享您心中的马克思',
      link: '/engage',
      color: 'from-blue-500 to-blue-700'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-marx-dark via-marx-gray to-marx-dark min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              思想之光，<span className="text-marx-red">时代之魂</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              弘扬马克思主义思想，展示马克思形象艺术，推动思想教育与大众传播
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link
                to="/gallery"
                className="inline-block bg-marx-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                开启探索之旅
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 fill-current text-gray-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,50 C150,90 350,10 600,50 C850,90 1050,10 1300,50 C1450,90 1440,50 1440,50 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <SparklesIcon className="h-12 w-12 text-marx-red mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">欢迎来到马克思网站</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              这里是一个现代化的平台，旨在以创新的方式呈现马克思主义思想，
              让更多年轻人了解、理解并传承这一伟大的思想遗产。
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={feature.link}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                    <div className="p-6">
                      <feature.icon className="h-12 w-12 text-marx-red mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-marx-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-light mb-6">今日金句</h3>
            <blockquote className="text-3xl font-bold mb-4 max-w-4xl mx-auto">
              "哲学家们只是用不同的方式解释世界，而问题在于改变世界。"
            </blockquote>
            <cite className="text-lg text-gray-300">—— 卡尔·马克思</cite>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 