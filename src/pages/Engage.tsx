import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  ChatBubbleLeftIcon,
  PlusIcon,
  HandThumbUpIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

interface Submission {
  id: number;
  type: 'image' | 'text';
  content: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
}

const Engage: React.FC = () => {
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const submissions: Submission[] = [
    {
      id: 1,
      type: 'text',
      content: '马克思的思想让我明白了社会发展的规律，他不仅是一位伟大的思想家，更是人类进步的引路人。',
      author: '青年学者',
      date: '2024-01-20',
      likes: 42,
      comments: 5
    },
    {
      id: 2,
      type: 'image',
      content: 'https://via.placeholder.com/400x300/DC143C/FFFFFF?text=Marx+Art',
      author: '艺术爱好者',
      date: '2024-01-19',
      likes: 38,
      comments: 3
    },
    {
      id: 3,
      type: 'text',
      content: '读《资本论》让我对现代经济有了全新的认识，马克思的分析方法在今天依然具有重要意义。',
      author: '经济学学生',
      date: '2024-01-18',
      likes: 56,
      comments: 8
    },
    {
      id: 4,
      type: 'image',
      content: 'https://via.placeholder.com/400x300/8B0000/FFFFFF?text=Marx+Quote',
      author: '设计师',
      date: '2024-01-17',
      likes: 45,
      comments: 6
    }
  ];

  const quizQuestions = [
    {
      question: '马克思出生于哪一年？',
      options: ['1818年', '1820年', '1825年', '1830年'],
      correct: 0
    },
    {
      question: '《共产党宣言》发表于哪一年？',
      options: ['1845年', '1848年', '1850年', '1855年'],
      correct: 1
    },
    {
      question: '马克思的主要合作者是谁？',
      options: ['黑格尔', '费尔巴哈', '恩格斯', '列宁'],
      correct: 2
    }
  ];

  const toggleLike = (id: number) => {
    setLikedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">互动空间</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            分享您心中的马克思，与志同道合的朋友一起探讨交流
          </p>
        </motion.div>

        {/* Submit Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowSubmitForm(!showSubmitForm)}
            className="inline-flex items-center gap-2 bg-marx-red text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
          >
            <PlusIcon className="h-5 w-5" />
            发布我的作品
          </button>
        </div>

        {/* Submission Form (simplified) */}
        {showSubmitForm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-12 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-4">分享您的想法</h3>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-marx-red"
              rows={4}
              placeholder="写下您对马克思的理解和感悟..."
            />
            <div className="mt-4 flex gap-4">
              <button className="bg-marx-red text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
                提交
              </button>
              <button 
                onClick={() => setShowSubmitForm(false)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors"
              >
                取消
              </button>
            </div>
          </motion.div>
        )}

        {/* Submissions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {submissions.map((submission, index) => (
            <motion.div
              key={submission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {submission.type === 'image' ? (
                <img 
                  src={submission.content} 
                  alt="User submission"
                  className="w-full h-64 object-cover"
                />
              ) : (
                <div className="p-6 h-64 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <p className="text-gray-700 text-center italic">{submission.content}</p>
                </div>
              )}
              
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{submission.author}</span>
                  <span className="text-xs text-gray-500">{submission.date}</span>
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => toggleLike(submission.id)}
                    className="flex items-center gap-1 text-gray-600 hover:text-marx-red transition-colors"
                  >
                    {likedItems.includes(submission.id) ? (
                      <HeartIconSolid className="h-5 w-5 text-marx-red" />
                    ) : (
                      <HeartIcon className="h-5 w-5" />
                    )}
                    <span className="text-sm">{submission.likes}</span>
                  </button>
                  
                  <button className="flex items-center gap-1 text-gray-600 hover:text-marx-red transition-colors">
                    <ChatBubbleLeftIcon className="h-5 w-5" />
                    <span className="text-sm">{submission.comments}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quiz Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">马克思知识小测验</h2>
          <div className="space-y-6">
            {quizQuestions.map((q, index) => (
              <div key={index} className="border-b pb-6 last:border-0">
                <h3 className="font-semibold mb-3">{index + 1}. {q.question}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {q.options.map((option, optIndex) => (
                    <button
                      key={optIndex}
                      className="text-left p-3 rounded-lg border border-gray-300 hover:border-marx-red hover:bg-red-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button className="bg-marx-red text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors">
              提交答案
            </button>
          </div>
        </motion.section>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-marx-red to-red-700 rounded-lg p-6 text-white text-center">
            <HandThumbUpIcon className="h-12 w-12 mx-auto mb-3" />
            <h3 className="text-3xl font-bold">1,234</h3>
            <p>参与人数</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg p-6 text-white text-center">
            <HeartIcon className="h-12 w-12 mx-auto mb-3" />
            <h3 className="text-3xl font-bold">5,678</h3>
            <p>总点赞数</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg p-6 text-white text-center">
            <ChatBubbleLeftIcon className="h-12 w-12 mx-auto mb-3" />
            <h3 className="text-3xl font-bold">890</h3>
            <p>讨论数量</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Engage; 