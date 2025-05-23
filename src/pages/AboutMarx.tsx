import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, BookOpenIcon, UserGroupIcon, AcademicCapIcon, HeartIcon, MapPinIcon, PencilIcon, GlobeAltIcon, FireIcon } from '@heroicons/react/24/outline';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const AboutMarx: React.FC = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      year: '1818',
      title: '诞生',
      description: '5月5日，卡尔·马克思出生于普鲁士莱茵省特里尔城一个律师家庭',
      icon: CalendarIcon
    },
    {
      year: '1835',
      title: '大学生涯开始',
      description: '进入波恩大学学习法律，后转学到柏林大学',
      icon: AcademicCapIcon
    },
    {
      year: '1841',
      title: '获得博士学位',
      description: '完成博士论文《德谟克利特的自然哲学和伊壁鸠鲁的自然哲学的差别》',
      icon: AcademicCapIcon
    },
    {
      year: '1842',
      title: '担任报纸主编',
      description: '成为《莱茵报》主编，开始革命民主主义活动',
      icon: PencilIcon
    },
    {
      year: '1843',
      title: '结婚',
      description: '6月与燕妮·冯·威斯特华伦结婚，并移居巴黎',
      icon: HeartIcon
    },
    {
      year: '1844',
      title: '初遇恩格斯',
      description: '在巴黎与恩格斯相遇，开始了伟大的友谊与合作，完成《1844年经济学哲学手稿》',
      icon: UserGroupIcon
    },
    {
      year: '1845',
      title: '流亡布鲁塞尔',
      description: '被法国政府驱逐，移居布鲁塞尔，与恩格斯合著《德意志意识形态》',
      icon: MapPinIcon
    },
    {
      year: '1847',
      title: '加入共产主义者同盟',
      description: '参加共产主义者同盟，为其起草纲领',
      icon: FireIcon
    },
    {
      year: '1848',
      title: '《共产党宣言》',
      description: '2月与恩格斯共同发表《共产党宣言》，标志着马克思主义的诞生',
      icon: BookOpenIcon
    },
    {
      year: '1849',
      title: '定居伦敦',
      description: '被普鲁士政府驱逐，开始在伦敦的流亡生活，此后一直居住于此',
      icon: MapPinIcon
    },
    {
      year: '1859',
      title: '《政治经济学批判》',
      description: '出版《政治经济学批判》，奠定了《资本论》的基础',
      icon: BookOpenIcon
    },
    {
      year: '1864',
      title: '创立第一国际',
      description: '参与创立国际工人协会（第一国际），成为其实际领导者',
      icon: GlobeAltIcon
    },
    {
      year: '1867',
      title: '《资本论》第一卷',
      description: '9月出版《资本论》第一卷，揭示资本主义生产方式的内在规律',
      icon: BookOpenIcon
    },
    {
      year: '1871',
      title: '《法兰西内战》',
      description: '撰写《法兰西内战》，总结巴黎公社的经验教训',
      icon: PencilIcon
    },
    {
      year: '1875',
      title: '《哥达纲领批判》',
      description: '撰写《哥达纲领批判》，阐明科学社会主义基本原理',
      icon: BookOpenIcon
    },
    {
      year: '1881',
      title: '妻子逝世',
      description: '12月2日，妻子燕妮逝世，马克思深受打击',
      icon: HeartIcon
    },
    {
      year: '1883',
      title: '逝世',
      description: '3月14日在伦敦逝世，安葬于海格特公墓',
      icon: CalendarIcon
    }
  ];

  const contributions = [
    {
      title: '唯物史观',
      description: '创立了历史唯物主义，揭示了人类社会发展的一般规律',
      details: '第一次科学地说明了生产力与生产关系、经济基础与上层建筑的辩证关系'
    },
    {
      title: '剩余价值理论',
      description: '揭示了资本主义剥削的秘密，阐明了无产阶级的历史使命',
      details: '深刻分析了资本主义生产方式的内在矛盾和发展规律'
    },
    {
      title: '科学社会主义',
      description: '将社会主义从空想变为科学，指明了人类社会发展的方向',
      details: '论证了社会主义代替资本主义的历史必然性'
    },
    {
      title: '无产阶级革命理论',
      description: '创立了无产阶级革命和无产阶级专政学说',
      details: '为无产阶级的解放斗争提供了科学的理论武器'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-marx-dark to-marx-gray dark:from-black dark:to-gray-900 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-5xl font-chinese-title font-bold mb-6">卡尔·马克思</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto font-chinese px-4">
              全世界无产阶级和劳动人民的伟大导师，马克思主义的创始人，
              伟大的政治家、哲学家、经济学家、革命理论家
            </p>
            <p className="text-base sm:text-lg mt-4 font-chinese-elegant">
              1818年5月5日 — 1883年3月14日
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-chinese-title font-bold text-center mb-8 sm:mb-12 dark:text-gray-100"
          >
            生平大事记
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full bg-marx-red hidden sm:block"></div>

            {/* Timeline Events */}
            <div className="space-y-6 sm:space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } flex-col sm:justify-center`}
                >
                  <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} pl-16 sm:pl-0`}>
                    <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className={`flex items-center mb-3 sm:mb-4 ${index % 2 === 0 ? 'sm:justify-end' : ''}`}>
                        <event.icon className="h-6 w-6 sm:h-8 sm:w-8 text-marx-red mr-2 sm:mr-3" />
                        <h3 className="text-xl sm:text-2xl font-chinese-title font-bold text-marx-red">{event.year}</h3>
                      </div>
                      <h4 className="text-lg sm:text-xl font-chinese-title font-semibold mb-2 dark:text-gray-100">{event.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-chinese text-sm sm:text-base">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-6 sm:relative sm:left-auto w-8 h-8 sm:w-10 sm:h-10 bg-marx-red rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 my-4 sm:mx-8"></div>
                  <div className="hidden sm:block w-full sm:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contributions Section */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-chinese-title font-bold text-center mb-8 sm:mb-12 dark:text-gray-100"
          >
            主要理论贡献
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {contributions.map((contribution, index) => (
              <motion.div
                key={contribution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg sm:text-xl font-chinese-title font-bold mb-3 sm:mb-4 text-marx-red">{contribution.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 font-chinese mb-2 text-sm sm:text-base">{contribution.description}</p>
                <p className="text-gray-500 dark:text-gray-400 font-chinese text-xs sm:text-sm">{contribution.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 sm:py-16 bg-marx-dark dark:bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <blockquote className="text-xl sm:text-2xl font-chinese-elegant italic mb-6 px-4">
              "在科学上没有平坦的大道，只有不畏劳苦沿着陡峭山路攀登的人，才有希望达到光辉的顶点。"
            </blockquote>
            <cite className="text-base sm:text-lg font-chinese">—— 卡尔·马克思</cite>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-chinese-title font-bold mb-6 dark:text-gray-100">永恒的遗产</h2>
            <p className="text-gray-600 dark:text-gray-300 font-chinese text-sm sm:text-base leading-relaxed px-4">
              马克思的思想跨越时空，至今仍然是我们认识世界、改造世界的强大思想武器。
              他的理论不仅深刻影响了20世纪的历史进程，而且在21世纪继续指导着人类的前进方向。
              马克思主义作为科学的世界观和方法论，将永远激励着人们为建设一个更加公正、
              更加美好的世界而不懈奋斗。
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutMarx; 