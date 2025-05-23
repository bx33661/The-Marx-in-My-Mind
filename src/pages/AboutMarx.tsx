import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, BookOpenIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

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
      year: '1835-1841',
      title: '求学时期',
      description: '先后在波恩大学和柏林大学学习法律、历史和哲学',
      icon: AcademicCapIcon
    },
    {
      year: '1844',
      title: '初遇恩格斯',
      description: '在巴黎与恩格斯相遇，开始了伟大的友谊与合作',
      icon: UserGroupIcon
    },
    {
      year: '1848',
      title: '《共产党宣言》',
      description: '与恩格斯共同发表《共产党宣言》，标志着马克思主义的诞生',
      icon: BookOpenIcon
    },
    {
      year: '1867',
      title: '《资本论》第一卷',
      description: '出版《资本论》第一卷，揭示资本主义生产方式的内在规律',
      icon: BookOpenIcon
    },
    {
      year: '1883',
      title: '逝世',
      description: '3月14日在伦敦逝世，长眠于海格特公墓',
      icon: CalendarIcon
    }
  ];

  const contributions = [
    {
      title: '唯物史观',
      description: '创立了历史唯物主义，揭示了人类社会发展的一般规律'
    },
    {
      title: '剩余价值理论',
      description: '揭示了资本主义剥削的秘密，阐明了无产阶级的历史使命'
    },
    {
      title: '科学社会主义',
      description: '将社会主义从空想变为科学，指明了人类社会发展的方向'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-marx-dark to-marx-gray text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">卡尔·马克思</h1>
            <p className="text-xl max-w-3xl mx-auto">
              全世界无产阶级和劳动人民的伟大导师，马克思主义的创始人，
              伟大的政治家、哲学家、经济学家、革命理论家
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            生平大事记
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-marx-red hidden lg:block"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:justify-center`}
                >
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-4">
                        <event.icon className="h-8 w-8 text-marx-red mr-3" />
                        <h3 className="text-2xl font-bold text-marx-red">{event.year}</h3>
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-marx-red rounded-full border-4 border-white shadow-lg z-10 my-4 lg:my-0 lg:mx-8"></div>
                  <div className="w-full lg:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contributions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            主要理论贡献
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contributions.map((contribution, index) => (
              <motion.div
                key={contribution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-marx-red">{contribution.title}</h3>
                <p className="text-gray-600">{contribution.description}</p>
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
            className="text-center max-w-4xl mx-auto"
          >
            <blockquote className="text-2xl italic mb-6">
              "在科学上没有平坦的大道，只有不畏劳苦沿着陡峭山路攀登的人，才有希望达到光辉的顶点。"
            </blockquote>
            <cite className="text-lg">—— 卡尔·马克思</cite>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutMarx; 