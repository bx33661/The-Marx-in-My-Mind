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
      title: '关于我们',
      description: '认识我们的创作团队',
      link: '/about-us',
      color: 'from-purple-500 to-purple-700'
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
      <section className="relative bg-gradient-to-br from-marx-dark via-marx-gray to-marx-dark dark:from-black dark:via-gray-900 dark:to-black min-h-[600px] sm:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 dark:opacity-60"></div>
        
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
              <StarIcon className="h-12 w-12 sm:h-16 sm:w-16 text-marx-gold mx-auto" />
            </motion.div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-black mb-4 sm:mb-6 tracking-tight">
              <span className="font-chinese-title">思想之光</span>，
              <span className="text-marx-red font-chinese-elegant">时代之魂</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto font-chinese leading-relaxed px-4">
              弘扬马克思主义思想，展示马克思形象艺术，推动思想教育与大众传播
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            >
              <Link
                to="/gallery"
                className="inline-block bg-marx-red hover:bg-red-700 text-white font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wider w-full sm:w-auto"
              >
                开启探索之旅
              </Link>
              <Link
                to="/about"
                className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-marx-dark text-white font-semibold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
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
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <achievement.icon className="h-8 w-8 sm:h-12 sm:w-12 text-marx-red mx-auto mb-2 sm:mb-4" />
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-800 dark:text-gray-100">{achievement.number}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium tracking-wide text-sm sm:text-base">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section with Enhanced Design */}
      <section className="py-12 sm:py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <SparklesIcon className="h-10 w-10 sm:h-12 sm:w-12 text-marx-red mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-chinese-title font-bold text-gray-800 dark:text-gray-100 mb-4">欢迎来到马克思网站</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-chinese leading-relaxed px-4">
              我们是海南大学的学生，<br className="sm:hidden" />
              我们热爱马克思，<br className="sm:hidden" />
              我们希望用我们的方式，<br className="sm:hidden" />
              来展示我们心中的马克思。<br className="sm:hidden" />
              如果可以，<br className="sm:hidden" />
              我们希望您也可以加入我们，<br className="sm:hidden" />
              一起来展示我们心中的马克思。
            </p>
          </motion.div>

          {/* Feature Cards with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {feature.link ? (
                  <Link to={feature.link}>
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                      <div className={`h-3 bg-gradient-to-r ${feature.color}`}></div>
                      <div className="p-6 sm:p-8">
                        <div className="relative">
                          <feature.icon className="h-12 w-12 sm:h-16 sm:w-16 text-marx-red mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                          <motion.div
                            className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-marx-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.2 }}
                          />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-chinese-title font-semibold mb-3">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 font-chinese text-sm sm:text-base">{feature.description}</p>
                        <span className="text-marx-red font-semibold tracking-wide group-hover:underline text-sm sm:text-base">
                          探索更多 →
                        </span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-not-allowed opacity-75">
                    <div className={`h-3 bg-gradient-to-r ${feature.color}`}></div>
                    <div className="p-6 sm:p-8">
                      <div className="relative">
                        <feature.icon className="h-12 w-12 sm:h-16 sm:w-16 text-marx-red mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
                        <motion.div
                          className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-marx-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.2 }}
                        />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-chinese-title font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 font-chinese text-sm sm:text-base">{feature.description}</p>
                      <span className="text-gray-400 font-semibold tracking-wide text-sm sm:text-base">
                        即将开放
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Timeline Preview Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-marx-dark to-marx-gray dark:from-black dark:to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-chinese-title font-bold mb-4">马克思的一生</h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto font-chinese px-4">
              从特里尔到伦敦，从青年哲学家到革命导师的传奇人生
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
                <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-marx-gold mb-2">{item.year}</h3>
                <p className="text-base sm:text-lg font-chinese">{item.event}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/about"
              className="inline-block bg-white text-marx-dark px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors tracking-wide text-sm sm:text-base"
            >
              查看完整生平
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Quote Section */}
      <section className="py-12 sm:py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="text-[200px] sm:text-[300px] font-serif font-bold text-marx-red">"</div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-xl sm:text-2xl font-display text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 tracking-widest uppercase">今日金句</h3>
            <blockquote className="text-2xl sm:text-4xl font-chinese-elegant font-bold mb-6 text-gray-800 dark:text-gray-100 leading-relaxed px-4">
              "哲学家们只是用不同的方式<span className="font-chinese-title">解释世界</span>，<br className="hidden sm:block" />
              <span className="text-marx-red">而问题在于<span className="font-chinese-title">改变世界</span>。</span>"
            </blockquote>
            <cite className="text-base sm:text-lg font-chinese text-gray-600 dark:text-gray-400">—— 卡尔·马克思</cite>
            
            <div className="mt-6 sm:mt-8">
              <Link
                to="/quotes"
                className="inline-flex items-center gap-2 text-marx-red hover:text-red-700 font-semibold tracking-wide text-sm sm:text-base"
              >
                <ChatBubbleBottomCenterTextIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                探索更多名言
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-marx-red to-red-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-chinese-title font-bold mb-4">订阅我们的通讯</h2>
            <p className="text-base sm:text-lg font-chinese mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              获取最新的马克思主义研究成果、活动信息和思想解读
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 px-4">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="flex-1 px-4 sm:px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30 font-sans text-sm sm:text-base"
              />
              <button className="bg-white text-marx-red px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors tracking-wide uppercase text-sm sm:text-base">
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