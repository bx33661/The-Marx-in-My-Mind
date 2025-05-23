import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartIcon, ShareIcon, LanguageIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

interface Quote {
  id: number;
  text: string;
  textEn?: string;
  source: string;
  category: string;
  year?: string;
}

const Quotes: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showEnglish, setShowEnglish] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const quotes: Quote[] = [
    {
      id: 1,
      text: '哲学家们只是用不同的方式解释世界，而问题在于改变世界。',
      textEn: 'The philosophers have only interpreted the world, in various ways; the point is to change it.',
      source: '关于费尔巴哈的提纲',
      category: 'philosophy',
      year: '1845'
    },
    {
      id: 2,
      text: '全世界无产者，联合起来！',
      textEn: 'Workers of the world, unite!',
      source: '共产党宣言',
      category: 'revolution',
      year: '1848'
    },
    {
      id: 3,
      text: '在科学上没有平坦的大道，只有不畏劳苦沿着陡峭山路攀登的人，才有希望达到光辉的顶点。',
      textEn: 'There is no royal road to science, and only those who do not dread the fatiguing climb of its steep paths have a chance of gaining its luminous summits.',
      source: '资本论',
      category: 'science',
      year: '1867'
    },
    {
      id: 4,
      text: '人的本质不是单个人所固有的抽象物，在其现实性上，它是一切社会关系的总和。',
      textEn: 'The essence of man is no abstraction inherent in each single individual. In reality, it is the ensemble of social relations.',
      source: '关于费尔巴哈的提纲',
      category: 'philosophy',
      year: '1845'
    },
    {
      id: 5,
      text: '批判的武器当然不能代替武器的批判，物质力量只能用物质力量来摧毁。',
      textEn: 'The weapon of criticism cannot, of course, replace criticism of the weapon, material force must be overthrown by material force.',
      source: '黑格尔法哲学批判',
      category: 'revolution',
      year: '1844'
    },
    {
      id: 6,
      text: '社会的进步就是人类对私有财产的消灭。',
      textEn: 'The progress of society is the abolition of private property.',
      source: '1844年经济学哲学手稿',
      category: 'economics',
      year: '1844'
    },
    {
      id: 7,
      text: '资本来到世间，从头到脚，每个毛孔都滴着血和肮脏的东西。',
      textEn: 'Capital comes dripping from head to foot, from every pore, with blood and dirt.',
      source: '资本论',
      category: 'economics',
      year: '1867'
    },
    {
      id: 8,
      text: '宗教是人民的鸦片。',
      textEn: 'Religion is the opium of the people.',
      source: '黑格尔法哲学批判导言',
      category: 'philosophy',
      year: '1843'
    },
    {
      id: 9,
      text: '人的思维是否具有客观的真理性，这不是一个理论的问题，而是一个实践的问题。',
      textEn: 'The question whether objective truth can be attributed to human thinking is not a question of theory but is a practical question.',
      source: '关于费尔巴哈的提纲',
      category: 'philosophy',
      year: '1845'
    },
    {
      id: 10,
      text: '如果我们选择了最能为人类福利而劳动的职业，那么，重担就不能把我们压倒。',
      textEn: 'If we have chosen the position in life in which we can most of all work for mankind, no burdens can bow us down.',
      source: '青年在选择职业时的考虑',
      category: 'life',
      year: '1835'
    },
    {
      id: 11,
      text: '历史什么事情也没有做，创造一切的，是人。',
      textEn: 'History does nothing; it is man who does everything.',
      source: '神圣家族',
      category: 'history',
      year: '1845'
    },
    {
      id: 12,
      text: '一切节省，归根到底都归结为时间的节省。',
      textEn: 'All economy ultimately reduces itself to economy of time.',
      source: '政治经济学批判大纲',
      category: 'economics',
      year: '1857'
    }
  ];

  const categories = [
    { value: 'all', label: '全部', icon: '🌟' },
    { value: 'philosophy', label: '哲学', icon: '🤔' },
    { value: 'revolution', label: '革命', icon: '✊' },
    { value: 'science', label: '科学', icon: '🔬' },
    { value: 'economics', label: '经济', icon: '💰' },
    { value: 'life', label: '人生', icon: '🌱' },
    { value: 'history', label: '历史', icon: '📜' }
  ];

  const filteredQuotes = selectedCategory === 'all' 
    ? quotes 
    : quotes.filter(quote => quote.category === selectedCategory);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const shareQuote = (quote: Quote) => {
    if (navigator.share) {
      navigator.share({
        title: '马克思名言',
        text: `"${quote.text}" —— 卡尔·马克思《${quote.source}》`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`"${quote.text}" —— 卡尔·马克思《${quote.source}》`);
      alert('名言已复制到剪贴板！');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <SparklesIcon className="h-12 w-12 text-marx-gold" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">名言金句</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            精选马克思经典语录，每一句都蕴含着深刻的智慧与洞察
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-8 mb-8"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-marx-red">{quotes.length}</p>
            <p className="text-sm text-gray-600">条名言</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-marx-red">{favorites.length}</p>
            <p className="text-sm text-gray-600">已收藏</p>
          </div>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === cat.value
                    ? 'bg-marx-red text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </motion.button>
            ))}
          </div>
          <motion.button
            onClick={() => setShowEnglish(!showEnglish)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-md"
          >
            <LanguageIcon className="h-5 w-5" />
            {showEnglish ? '显示中文' : '显示英文'}
          </motion.button>
        </div>

        {/* Quotes Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredQuotes.map((quote, index) => (
              <motion.div
                key={quote.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="h-1 bg-gradient-to-r from-marx-red to-red-700 group-hover:h-2 transition-all duration-300"></div>
                  <div className="p-6 flex-grow flex flex-col">
                    <blockquote className="text-lg font-medium text-gray-800 mb-4 flex-grow relative">
                      <span className="absolute -top-2 -left-2 text-4xl text-marx-red opacity-20">"</span>
                      {showEnglish && quote.textEn ? quote.textEn : quote.text}
                      <span className="absolute -bottom-6 -right-2 text-4xl text-marx-red opacity-20">"</span>
                    </blockquote>
                    <div className="mt-auto">
                      <cite className="text-sm text-gray-600 block mb-2">
                        —— 《{quote.source}》{quote.year && ` (${quote.year})`}
                      </cite>
                      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <motion.button
                          onClick={() => toggleFavorite(quote.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center gap-2 text-gray-600 hover:text-marx-red transition-colors"
                        >
                          {favorites.includes(quote.id) ? (
                            <HeartIconSolid className="h-5 w-5 text-marx-red" />
                          ) : (
                            <HeartIcon className="h-5 w-5" />
                          )}
                          <span className="text-sm">收藏</span>
                        </motion.button>
                        <motion.button
                          onClick={() => shareQuote(quote)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center gap-2 text-gray-600 hover:text-marx-red transition-colors"
                        >
                          <ShareIcon className="h-5 w-5" />
                          <span className="text-sm">分享</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Featured Quote Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-marx-red via-red-600 to-red-700 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-center">今日推荐</h2>
              <blockquote className="text-2xl md:text-3xl text-center italic mb-6 leading-relaxed">
                "如果我们选择了最能为人类福利而劳动的职业，<br className="hidden md:block" />
                那么，重担就不能把我们压倒，<br className="hidden md:block" />
                因为这是为大家而献身。"
              </blockquote>
              <cite className="block text-center text-lg">—— 《青年在选择职业时的考虑》</cite>
              
              <div className="mt-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-marx-red px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  <HeartIcon className="h-5 w-5" />
                  收藏这句话
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Quotes; 