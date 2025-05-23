import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon, BookOpenIcon } from '@heroicons/react/24/outline';

interface IdeaSection {
  id: number;
  title: string;
  brief: string;
  content: string[];
  keyPoints: string[];
  furtherReading?: string;
}

const Ideas: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const ideas: IdeaSection[] = [
    {
      id: 1,
      title: '历史唯物主义',
      brief: '揭示人类社会发展的一般规律',
      content: [
        '历史唯物主义认为，社会存在决定社会意识，物质生产是社会生活的基础。',
        '生产力和生产关系的矛盾运动推动着社会的发展，这是人类社会发展的根本动力。',
        '经济基础决定上层建筑，上层建筑反作用于经济基础。'
      ],
      keyPoints: [
        '物质生产是社会发展的基础',
        '生产力决定生产关系',
        '经济基础决定上层建筑',
        '社会存在决定社会意识'
      ],
      furtherReading: '《德意志意识形态》'
    },
    {
      id: 2,
      title: '剩余价值理论',
      brief: '揭示资本主义剥削的秘密',
      content: [
        '剩余价值是由雇佣工人创造的、被资本家无偿占有的那部分价值。',
        '工人的劳动分为必要劳动和剩余劳动，必要劳动创造的价值用于维持工人的生存，剩余劳动创造的价值被资本家占有。',
        '剩余价值的生产是资本主义生产的直接目的和决定性动机。'
      ],
      keyPoints: [
        '劳动力成为商品',
        '剩余价值的产生',
        '绝对剩余价值和相对剩余价值',
        '资本积累的规律'
      ],
      furtherReading: '《资本论》'
    },
    {
      id: 3,
      title: '阶级斗争学说',
      brief: '社会发展的直接动力',
      content: [
        '阶级斗争是阶级社会发展的直接动力，推动着社会形态的更替。',
        '在资本主义社会，基本的阶级对立是资产阶级和无产阶级之间的对立。',
        '无产阶级通过革命推翻资产阶级统治，建立无产阶级专政，是历史发展的必然。'
      ],
      keyPoints: [
        '阶级的产生和本质',
        '阶级斗争的历史作用',
        '无产阶级的历史使命',
        '无产阶级革命的必然性'
      ],
      furtherReading: '《共产党宣言》'
    },
    {
      id: 4,
      title: '辩证唯物主义',
      brief: '科学的世界观和方法论',
      content: [
        '世界是物质的，物质是第一性的，意识是第二性的。',
        '物质世界是按照辩证法的规律运动发展的，对立统一、质量互变、否定之否定是辩证法的基本规律。',
        '认识来源于实践，并在实践中得到检验和发展。'
      ],
      keyPoints: [
        '物质和意识的关系',
        '辩证法的基本规律',
        '认识论的基本原理',
        '真理的相对性和绝对性'
      ],
      furtherReading: '《反杜林论》'
    },
    {
      id: 5,
      title: '科学社会主义',
      brief: '人类社会发展的必然趋势',
      content: [
        '社会主义是资本主义发展的必然产物，是人类社会发展的必然阶段。',
        '通过无产阶级革命，建立生产资料公有制，消灭剥削，实现人的全面发展。',
        '共产主义是人类社会发展的最高阶段，是一个没有阶级、没有剥削、各尽所能、按需分配的社会。'
      ],
      keyPoints: [
        '社会主义的必然性',
        '无产阶级专政',
        '计划经济的优越性',
        '共产主义社会的特征'
      ],
      furtherReading: '《哥达纲领批判》'
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">思想长廊</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            深入了解马克思主义的核心思想，用现代语言诠释永恒的真理
          </p>
        </motion.div>

        {/* Ideas Sections */}
        <div className="max-w-4xl mx-auto space-y-6">
          {ideas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleExpand(idea.id)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{idea.title}</h3>
                    <p className="text-gray-600">{idea.brief}</p>
                  </div>
                  <div className="ml-4">
                    {expandedSection === idea.id ? (
                      <ChevronUpIcon className="h-6 w-6 text-marx-red" />
                    ) : (
                      <ChevronDownIcon className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              <motion.div
                initial={false}
                animate={{ height: expandedSection === idea.id ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-lg mb-4 text-marx-red">核心内容</h4>
                    <div className="space-y-3 mb-6">
                      {idea.content.map((paragraph, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <h4 className="font-semibold text-lg mb-4 text-marx-red">要点总结</h4>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                      {idea.keyPoints.map((point, i) => (
                        <li key={i} className="text-gray-700">{point}</li>
                      ))}
                    </ul>

                    {idea.furtherReading && (
                      <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                        <BookOpenIcon className="h-5 w-5 text-marx-red mr-3" />
                        <span className="text-sm text-gray-600">
                          延伸阅读：<span className="font-medium">{idea.furtherReading}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-marx-red to-red-700 rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">继续探索</h2>
            <p className="mb-6">
              马克思主义是发展的理论，需要我们在实践中不断学习和深化理解。
              让我们共同努力，用马克思主义的立场、观点和方法分析和解决当代问题。
            </p>
            <a
              href="/engage"
              className="inline-block bg-white text-marx-red px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              参与讨论
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Ideas; 