import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, ShareIcon, LanguageIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

interface Quote {
  id: number;
  text: string;
  textEn?: string;
  source: string;
  category: string;
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
      source: '《关于费尔巴哈的提纲》',
      category: 'philosophy'
    },
    {
      id: 2,
      text: '全世界无产者，联合起来！',
      textEn: 'Workers of the world, unite!',
      source: '《共产党宣言》',
      category: 'revolution'
    },
    {
      id: 3,
      text: '在科学上没有平坦的大道，只有不畏劳苦沿着陡峭山路攀登的人，才有希望达到光辉的顶点。',
      textEn: 'There is no royal road to science, and only those who do not dread the fatiguing climb of its steep paths have a chance of gaining its luminous summits.',
      source: '《资本论》',
      category: 'science'
    },
    {
      id: 4,
      text: '人的本质不是单个人所固有的抽象物，在其现实性上，它是一切社会关系的总和。',
      textEn: 'The essence of man is no abstraction inherent in each single individual. In reality, it is the ensemble of social relations.',
      source: '《关于费尔巴哈的提纲》',
      category: 'philosophy'
    },
    {
      id: 5,
      text: '批判的武器当然不能代替武器的批判，物质力量只能用物质力量来摧毁。',
      textEn: 'The weapon of criticism cannot, of course, replace criticism of the weapon, material force must be overthrown by material force.',
      source: '《黑格尔法哲学批判》',
      category: 'revolution'
    },
    {
      id: 6,
      text: '社会的进步就是人类对私有财产的消灭。',
      textEn: 'The progress of society is the abolition of private property.',
      source: '《1844年经济学哲学手稿》',
      category: 'economics'
    }
  ];

  const categories = [
    { value: 'all', label: '全部' },
    { value: 'philosophy', label: '哲学' },
    { value: 'revolution', label: '革命' },
    { value: 'science', label: '科学' },
    { value: 'economics', label: '经济' }
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
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(`"${quote.text}" —— 卡尔·马克思《${quote.source}》`);
      alert('名言已复制到剪贴板！');
    }
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">名言金句</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            精选马克思经典语录，每一句都蕴含着深刻的智慧与洞察
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-marx-red text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowEnglish(!showEnglish)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
          >
            <LanguageIcon className="h-5 w-5" />
            {showEnglish ? '显示中文' : '显示英文'}
          </button>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuotes.map((quote, index) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-2 bg-gradient-to-r from-marx-red to-red-700"></div>
              <div className="p-6">
                <blockquote className="text-lg font-medium text-gray-800 mb-4">
                  "{showEnglish && quote.textEn ? quote.textEn : quote.text}"
                </blockquote>
                <cite className="text-sm text-gray-600 block mb-4">
                  —— 《{quote.source}》
                </cite>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleFavorite(quote.id)}
                    className="flex items-center gap-2 text-gray-600 hover:text-marx-red transition-colors"
                  >
                    {favorites.includes(quote.id) ? (
                      <HeartIconSolid className="h-5 w-5 text-marx-red" />
                    ) : (
                      <HeartIcon className="h-5 w-5" />
                    )}
                    <span className="text-sm">收藏</span>
                  </button>
                  <button
                    onClick={() => shareQuote(quote)}
                    className="flex items-center gap-2 text-gray-600 hover:text-marx-red transition-colors"
                  >
                    <ShareIcon className="h-5 w-5" />
                    <span className="text-sm">分享</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Daily Quote */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-marx-red to-red-700 rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">今日推荐</h2>
          <blockquote className="text-2xl text-center italic mb-4">
            "如果我们选择了最能为人类福利而劳动的职业，那么，重担就不能把我们压倒，
            因为这是为大家而献身。"
          </blockquote>
          <cite className="block text-center">—— 《青年在选择职业时的考虑》</cite>
        </motion.section>
      </div>
    </div>
  );
};

export default Quotes; 