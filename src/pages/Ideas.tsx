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
        '经济基础决定上层建筑，上层建筑反作用于经济基础。',
        '人民群众是历史的创造者，是推动社会发展的根本力量。'
      ],
      keyPoints: [
        '物质生产是社会发展的基础',
        '生产力决定生产关系',
        '经济基础决定上层建筑',
        '社会存在决定社会意识',
        '人民群众是历史的创造者'
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
        '剩余价值的生产是资本主义生产的直接目的和决定性动机。',
        '资本积累导致财富在一极积累，贫困在另一极积累，这是资本主义的基本矛盾。'
      ],
      keyPoints: [
        '劳动力成为商品',
        '剩余价值的产生',
        '绝对剩余价值和相对剩余价值',
        '资本积累的规律',
        '资本有机构成的提高'
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
        '无产阶级通过革命推翻资产阶级统治，建立无产阶级专政，是历史发展的必然。',
        '阶级的消灭必须以生产力的高度发展为前提。'
      ],
      keyPoints: [
        '阶级的产生和本质',
        '阶级斗争的历史作用',
        '无产阶级的历史使命',
        '无产阶级革命的必然性',
        '阶级消灭的条件'
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
        '认识来源于实践，并在实践中得到检验和发展。',
        '真理是客观的，但人的认识是一个从相对真理到绝对真理的过程。'
      ],
      keyPoints: [
        '物质和意识的关系',
        '辩证法的基本规律',
        '认识论的基本原理',
        '真理的相对性和绝对性',
        '实践是检验真理的唯一标准'
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
        '共产主义是人类社会发展的最高阶段，是一个没有阶级、没有剥削、各尽所能、按需分配的社会。',
        '社会主义建设必须根据各国的具体条件，走符合本国实际的道路。'
      ],
      keyPoints: [
        '社会主义的必然性',
        '无产阶级专政',
        '计划经济的优越性',
        '共产主义社会的特征',
        '社会主义的多样性'
      ],
      furtherReading: '《哥达纲领批判》'
    },
    {
      id: 6,
      title: '异化劳动理论',
      brief: '资本主义条件下人的异化',
      content: [
        '在资本主义制度下，工人的劳动不是自愿的，而是被迫的，劳动对工人来说是外在的东西。',
        '工人在劳动中不是肯定自己，而是否定自己；不是感到幸福，而是感到不幸。',
        '异化表现在四个方面：人与劳动产品的异化、人与劳动活动的异化、人与类本质的异化、人与人的异化。',
        '只有消灭私有制，才能消除异化，实现人的解放。'
      ],
      keyPoints: [
        '异化劳动的概念',
        '异化的四个方面',
        '异化的根源是私有制',
        '人的本质的复归',
        '共产主义是异化的扬弃'
      ],
      furtherReading: '《1844年经济学哲学手稿》'
    },
    {
      id: 7,
      title: '实践观',
      brief: '马克思主义哲学的核心',
      content: [
        '实践是人类有目的地改造客观世界的物质活动，是人类社会存在和发展的基础。',
        '实践是认识的来源、动力、目的和检验标准。',
        '人在实践中不仅改造客观世界，也改造主观世界。',
        '社会生活在本质上是实践的，全部社会生活的本质是实践。'
      ],
      keyPoints: [
        '实践的本质和特征',
        '实践与认识的关系',
        '实践的社会历史性',
        '实践是人与世界关系的基础',
        '实践的形式多样性'
      ],
      furtherReading: '《关于费尔巴哈的提纲》'
    },
    {
      id: 8,
      title: '人的全面发展理论',
      brief: '共产主义社会的人的理想状态',
      content: [
        '资本主义的分工造成了人的片面发展，人被束缚在特定的活动领域。',
        '共产主义社会将消除旧式分工，使每个人都能够自由全面地发展。',
        '人的全面发展包括劳动能力的全面发展、社会关系的全面发展和个性的自由发展。',
        '教育与生产劳动相结合是实现人的全面发展的重要途径。'
      ],
      keyPoints: [
        '旧式分工的弊端',
        '人的全面发展的内涵',
        '自由时间的重要性',
        '教育的作用',
        '个性解放与社会发展的统一'
      ],
      furtherReading: '《德意志意识形态》'
    },
    {
      id: 9,
      title: '两个必然理论',
      brief: '资本主义必然灭亡，社会主义必然胜利',
      content: [
        '资本主义的基本矛盾是生产社会化与资本主义私人占有之间的矛盾。',
        '这一矛盾导致周期性经济危机，表明资本主义生产关系已经成为生产力发展的桎梏。',
        '无产阶级的发展壮大和觉醒，为社会主义革命准备了掘墓人。',
        '两个必然是历史发展的总趋势，但实现过程是长期的、曲折的。'
      ],
      keyPoints: [
        '资本主义基本矛盾',
        '经济危机的必然性',
        '无产阶级的成长',
        '历史发展的客观规律',
        '必然性与长期性的统一'
      ],
      furtherReading: '《共产党宣言》'
    },
    {
      id: 10,
      title: '国家学说',
      brief: '国家的本质和消亡',
      content: [
        '国家是阶级矛盾不可调和的产物，是一个阶级压迫另一个阶级的工具。',
        '资产阶级国家本质上是资产阶级专政，维护资本主义剥削制度。',
        '无产阶级革命要打碎旧的国家机器，建立无产阶级专政。',
        '随着阶级的消灭，国家将逐渐消亡，被社会管理机构所取代。'
      ],
      keyPoints: [
        '国家的阶级本质',
        '国家的职能',
        '无产阶级专政的必要性',
        '国家消亡的条件',
        '从国家到自由人联合体'
      ],
      furtherReading: '《国家与革命》'
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 sm:py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-5xl font-chinese-title font-bold text-gray-800 dark:text-gray-100 mb-4">思想长廊</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-chinese px-4">
            深入了解马克思主义的核心思想，用现代语言诠释永恒的真理
          </p>
        </motion.div>

        {/* Ideas Sections */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {ideas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div
                className="p-4 sm:p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => toggleExpand(idea.id)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-chinese-title font-bold text-gray-800 dark:text-gray-100 mb-2">{idea.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-chinese">{idea.brief}</p>
                  </div>
                  <div className="ml-4">
                    {expandedSection === idea.id ? (
                      <ChevronUpIcon className="h-5 w-5 sm:h-6 sm:w-6 text-marx-red" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 dark:text-gray-500" />
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
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="border-t dark:border-gray-700 pt-4 sm:pt-6">
                    <h4 className="font-chinese-title font-semibold text-base sm:text-lg mb-4 text-marx-red">核心内容</h4>
                    <div className="space-y-3 mb-6">
                      {idea.content.map((paragraph, i) => (
                        <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed font-chinese text-sm sm:text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <h4 className="font-chinese-title font-semibold text-base sm:text-lg mb-4 text-marx-red">要点总结</h4>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                      {idea.keyPoints.map((point, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300 font-chinese text-sm sm:text-base">{point}</li>
                      ))}
                    </ul>

                    {idea.furtherReading && (
                      <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-lg flex items-center">
                        <BookOpenIcon className="h-4 w-4 sm:h-5 sm:w-5 text-marx-red mr-3 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-chinese">
                          延伸阅读：<span className="font-medium font-chinese-title">{idea.furtherReading}</span>
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
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-marx-red to-red-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-chinese-title font-bold mb-4">继续探索</h2>
            <p className="mb-6 font-chinese text-sm sm:text-base px-4">
              马克思主义是发展的理论，需要我们在实践中不断学习和深化理解。
              让我们共同努力，用马克思主义的立场、观点和方法分析和解决当代问题。
            </p>
            <a
              href="/quotes"
              className="inline-block bg-white text-marx-red px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors font-chinese text-sm sm:text-base"
            >
              探索名言金句
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Ideas; 