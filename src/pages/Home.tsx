import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  SparklesIcon, 
  BookOpenIcon, 
  ChatBubbleBottomCenterTextIcon,
  LightBulbIcon,
  UsersIcon,
  PhotoIcon,
  StarIcon,
  AcademicCapIcon,
  GlobeAltIcon
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

  const achievements = [
    { icon: BookOpenIcon, number: '50+', label: '著作' },
    { icon: GlobeAltIcon, number: '150+', label: '国家传播' },
    { icon: AcademicCapIcon, number: '200+', label: '年影响力' },
    { icon: UsersIcon, number: '10亿+', label: '追随者' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative bg-gradient-to-br from-marx-dark via-marx-gray to-marx-dark min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-marx-red opacity-10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-marx-gold opacity-10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <StarIcon className="h-16 w-16 text-marx-gold mx-auto" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 tracking-tight">
              <span className="font-chinese">思想之光</span>，
              <span className="text-marx-red font-display">时代之魂</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-elegant leading-relaxed">
              弘扬马克思主义思想，展示马克思形象艺术，推动思想教育与大众传播
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/gallery"
                className="inline-block bg-marx-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wider"
              >
                开启探索之旅
              </Link>
              <Link
                to="/about"
                className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-marx-dark text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300"
              >
                了解马克思
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 fill-current text-gray-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,50 C150,90 350,10 600,50 C850,90 1050,10 1300,50 C1450,90 1440,50 1440,50 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <achievement.icon className="h-12 w-12 text-marx-red mx-auto mb-4" />
                <h3 className="text-3xl font-display font-bold text-gray-800">{achievement.number}</h3>
                <p className="text-gray-600 font-medium tracking-wide">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section with Enhanced Design */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SparklesIcon className="h-12 w-12 text-marx-red mx-auto mb-4" />
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">欢迎来到马克思网站</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-elegant leading-relaxed">
              这里是一个现代化的平台，旨在以创新的方式呈现马克思主义思想，
              让更多年轻人了解、理解并传承这一伟大的思想遗产。
            </p>
          </motion.div>

          {/* Feature Cards with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Link to={feature.link}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                    <div className={`h-3 bg-gradient-to-r ${feature.color}`}></div>
                    <div className="p-8">
                      <div className="relative">
                        <feature.icon className="h-16 w-16 text-marx-red mb-6 group-hover:scale-110 transition-transform duration-300" />
                        <motion.div
                          className="absolute -top-2 -right-2 w-8 h-8 bg-marx-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.2 }}
                        />
                      </div>
                      <h3 className="text-2xl font-serif font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-600 mb-4 font-elegant">{feature.description}</p>
                      <span className="text-marx-red font-semibold tracking-wide group-hover:underline">
                        探索更多 →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Timeline Preview Section */}
      <section className="py-20 bg-gradient-to-r from-marx-dark to-marx-gray text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">马克思的一生</h2>
            <p className="text-lg max-w-2xl mx-auto font-elegant">
              从特里尔到伦敦，从青年哲学家到革命导师的传奇人生
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: '1818', event: '诞生于德国特里尔', icon: '👶' },
              { year: '1848', event: '发表《共产党宣言》', icon: '📜' },
              { year: '1867', event: '出版《资本论》第一卷', icon: '📚' }
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-display font-bold text-marx-gold mb-2">{item.year}</h3>
                <p className="text-lg font-elegant">{item.event}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-block bg-white text-marx-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors tracking-wide"
            >
              查看完整生平
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Quote Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="text-[300px] font-serif font-bold text-marx-red">"</div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-display text-gray-600 mb-8 tracking-widest uppercase">今日金句</h3>
            <blockquote className="text-4xl font-serif font-bold mb-6 text-gray-800 leading-relaxed">
              "哲学家们只是用不同的方式<span className="font-chinese">解释世界</span>，<br />
              <span className="text-marx-red">而问题在于<span className="font-chinese">改变世界</span>。</span>"
            </blockquote>
            <cite className="text-lg font-elegant text-gray-600">—— 卡尔·马克思</cite>
            
            <div className="mt-8">
              <Link
                to="/quotes"
                className="inline-flex items-center gap-2 text-marx-red hover:text-red-700 font-semibold tracking-wide"
              >
                <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
                探索更多名言
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-marx-red to-red-700 rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">订阅我们的通讯</h2>
            <p className="text-lg font-elegant mb-8 max-w-2xl mx-auto">
              获取最新的马克思主义研究成果、活动信息和思想解读
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30 font-sans"
              />
              <button className="bg-white text-marx-red px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors tracking-wide uppercase">
                订阅
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 