import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartIcon, ShareIcon, LanguageIcon, SparklesIcon, ClipboardIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
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
  // 从localStorage读取收藏的名言
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('marxQuoteFavorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [showEnglish, setShowEnglish] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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
    },
    {
      id: 13,
      text: '没有需要，就没有生产。',
      textEn: 'Without need, there is no production.',
      source: '政治经济学批判',
      category: 'economics',
      year: '1859'
    },
    {
      id: 14,
      text: '暴力是每一个孕育着新社会的旧社会的助产婆。',
      textEn: 'Force is the midwife of every old society pregnant with a new one.',
      source: '资本论',
      category: 'revolution',
      year: '1867'
    },
    {
      id: 15,
      text: '人们自己创造自己的历史，但是他们并不是随心所欲地创造。',
      textEn: 'Men make their own history, but they do not make it as they please.',
      source: '路易·波拿巴的雾月十八日',
      category: 'history',
      year: '1852'
    },
    {
      id: 16,
      text: '存在决定意识。',
      textEn: 'Being determines consciousness.',
      source: '德意志意识形态',
      category: 'philosophy',
      year: '1845'
    },
    {
      id: 17,
      text: '理论只要彻底，就能说服人。',
      textEn: 'Theory becomes convincing when it is radical.',
      source: '黑格尔法哲学批判导言',
      category: 'philosophy',
      year: '1844'
    },
    {
      id: 18,
      text: '劳动创造了人本身。',
      textEn: 'Labor created man himself.',
      source: '自然辩证法',
      category: 'science',
      year: '1876'
    },
    {
      id: 19,
      text: '一步实际运动比一打纲领更重要。',
      textEn: 'One step of real movement is worth more than a dozen programmes.',
      source: '哥达纲领批判',
      category: 'revolution',
      year: '1875'
    },
    {
      id: 20,
      text: '在我看来，真正的爱情是表现在恋人对他的偶像采取含蓄、谦恭甚至羞涩的态度，而决不是表现在随意流露热情和过早的亲昵。',
      textEn: 'In my opinion, true love is expressed in restraint, modesty and even shyness toward the loved one, and not in casual displays of passion and premature intimacy.',
      source: '给女儿的信',
      category: 'life',
      year: '1866'
    },
    {
      id: 21,
      text: '最强大的一种生产力是革命阶级本身。',
      textEn: 'The greatest productive force is the revolutionary class itself.',
      source: '哲学的贫困',
      category: 'revolution',
      year: '1847'
    },
    {
      id: 22,
      text: '生产劳动和教育的早期结合是改造现代社会的最强有力的手段之一。',
      textEn: 'The early combination of productive labor with education is one of the most potent means for the transformation of present-day society.',
      source: '资本论',
      category: 'science',
      year: '1867'
    },
    {
      id: 23,
      text: '任何一个民族，如果停止劳动，不用说一年，就是几个星期，也要灭亡。',
      textEn: 'Any nation that stops working, not for a year, but even for a few weeks, would perish.',
      source: '给库格曼的信',
      category: 'economics',
      year: '1868'
    },
    {
      id: 24,
      text: '历史的活动和思想就是"群众"的思想和活动。',
      textEn: 'The activity and thought of history is the thought and activity of the masses.',
      source: '神圣家族',
      category: 'history',
      year: '1845'
    },
    {
      id: 25,
      text: '理论在一个国家实现的程度，总是取决于理论满足这个国家的需要的程度。',
      textEn: 'The degree to which a theory is realized in a country depends on the degree to which the theory meets the needs of that country.',
      source: '黑格尔法哲学批判导言',
      category: 'philosophy',
      year: '1844'
    },
    {
      id: 26,
      text: '思想根本不能实现什么东西。为了实现思想，就要有使用实践力量的人。',
      textEn: 'Ideas cannot accomplish anything at all. In order to carry out ideas men are needed who can exert practical force.',
      source: '神圣家族',
      category: 'philosophy',
      year: '1845'
    },
    {
      id: 27,
      text: '社会生活在本质上是实践的。',
      textEn: 'Social life is essentially practical.',
      source: '关于费尔巴哈的提纲',
      category: 'philosophy',
      year: '1845'
    },
    {
      id: 28,
      text: '人只有为同时代人的完美、为他们的幸福而工作，自己才能达到完美。',
      textEn: 'Man can achieve perfection only by working for the perfection and happiness of his contemporaries.',
      source: '青年在选择职业时的考虑',
      category: 'life',
      year: '1835'
    },
    {
      id: 29,
      text: '无产阶级在这个革命中失去的只是锁链，他们获得的将是整个世界。',
      textEn: 'The proletarians have nothing to lose but their chains. They have a world to win.',
      source: '共产党宣言',
      category: 'revolution',
      year: '1848'
    },
    {
      id: 30,
      text: '资本是死劳动，它像吸血鬼一样，只有吮吸活劳动才有生命。',
      textEn: 'Capital is dead labor, which, vampire-like, lives only by sucking living labor.',
      source: '资本论',
      category: 'economics',
      year: '1867'
    }
  ];

  // 随机选择一条名言作为今日推荐
  const [featuredQuote] = useState<Quote>(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  });

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

  // 进一步根据搜索词过滤
  const searchedQuotes = searchTerm
    ? filteredQuotes.filter(quote => 
        quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (quote.textEn && quote.textEn.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : filteredQuotes;

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id];
      
      // 保存到localStorage
      localStorage.setItem('marxQuoteFavorites', JSON.stringify(newFavorites));
      
      return newFavorites;
    });
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

  const copyFeaturedQuote = () => {
    const featuredQuoteText = `"${featuredQuote.text}" —— 卡尔·马克思《${featuredQuote.source}》`;
    navigator.clipboard.writeText(featuredQuoteText);
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 sm:py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex justify-center mb-4">
            <SparklesIcon className="h-10 w-10 sm:h-12 sm:w-12 text-marx-gold" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-chinese-title font-bold text-gray-800 dark:text-gray-100 mb-4">名言金句</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 font-chinese">
            精选马克思经典语录，每一句都蕴含着深刻的智慧与洞察
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-6 sm:gap-8 mb-6 sm:mb-8"
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-marx-red">{quotes.length}</p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">条名言</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-marx-red">{favorites.length}</p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">已收藏</p>
          </div>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col gap-4 mb-8 sm:mb-12">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索名言或出处..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-10 sm:px-12 py-3 sm:py-4 rounded-full border border-gray-300 dark:border-gray-600 focus:border-marx-red dark:focus:border-marx-red focus:outline-none shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base transition-colors duration-300"
              />
              <MagnifyingGlassIcon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-gray-400 dark:text-gray-500" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category and Language Controls */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <motion.button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1 sm:gap-2 ${
                    selectedCategory === cat.value
                      ? 'bg-marx-red text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                  }`}
                >
                  <span className="text-sm sm:text-base">{cat.icon}</span>
                  <span className="font-chinese">{cat.label}</span>
                </motion.button>
              ))}
            </div>
            <motion.button
              onClick={() => setShowEnglish(!showEnglish)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md text-xs sm:text-sm"
            >
              <LanguageIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              {showEnglish ? '显示中文' : '显示英文'}
            </motion.button>
          </div>
        </div>

        {/* Quotes Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {searchedQuotes.map((quote, index) => (
              <motion.div
                key={quote.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="h-1 bg-gradient-to-r from-marx-red to-red-700 group-hover:h-2 transition-all duration-300"></div>
                  <div className="p-4 sm:p-6 flex-grow flex flex-col">
                    <blockquote className="text-base sm:text-lg font-chinese-elegant font-medium text-gray-800 dark:text-gray-200 mb-4 flex-grow relative">
                      <span className="absolute -top-2 -left-2 text-3xl sm:text-4xl text-marx-red opacity-20 font-chinese-title">"</span>
                      {showEnglish && quote.textEn ? quote.textEn : quote.text}
                      <span className="absolute -bottom-6 -right-2 text-3xl sm:text-4xl text-marx-red opacity-20 font-chinese-title">"</span>
                    </blockquote>
                    <div className="mt-auto">
                      <cite className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 block mb-2 font-chinese">
                        —— 《{quote.source}》{quote.year && ` (${quote.year})`}
                      </cite>
                      <div className="flex justify-between items-center pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                        <motion.button
                          onClick={() => toggleFavorite(quote.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-400 hover:text-marx-red dark:hover:text-marx-red transition-colors"
                        >
                          {favorites.includes(quote.id) ? (
                            <HeartIconSolid className="h-4 w-4 sm:h-5 sm:w-5 text-marx-red" />
                          ) : (
                            <HeartIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                          )}
                          <span className="text-xs sm:text-sm">收藏</span>
                        </motion.button>
                        <motion.button
                          onClick={() => shareQuote(quote)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-400 hover:text-marx-red dark:hover:text-marx-red transition-colors"
                        >
                          <ShareIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="text-xs sm:text-sm">分享</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {searchedQuotes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 sm:py-12"
          >
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4">没有找到相关的名言</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-marx-red hover:underline text-sm sm:text-base"
            >
              清除筛选条件
            </button>
          </motion.div>
        )}

        {/* Featured Quote Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-20"
        >
          <div className="bg-gradient-to-br from-marx-red via-red-600 to-red-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16 sm:-mr-32 sm:-mt-32"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-white opacity-5 rounded-full -ml-12 -mb-12 sm:-ml-24 sm:-mb-24"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-chinese-title font-bold mb-4 sm:mb-6 text-center">今日推荐</h2>
              <blockquote className="text-xl sm:text-2xl md:text-3xl text-center italic mb-4 sm:mb-6 leading-relaxed px-4 font-chinese-elegant">
                {showEnglish && featuredQuote.textEn ? featuredQuote.textEn : featuredQuote.text}
              </blockquote>
              <cite className="block text-center text-base sm:text-lg font-chinese">
                —— 《{featuredQuote.source}》
                {featuredQuote.year && ` (${featuredQuote.year})`}
              </cite>
              
              <div className="mt-6 sm:mt-8 text-center space-y-3 sm:space-y-0 sm:space-x-4">
                <motion.button
                  onClick={() => toggleFavorite(featuredQuote.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-marx-red px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
                >
                  {favorites.includes(featuredQuote.id) ? (
                    <HeartIconSolid className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <HeartIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                  收藏这句话
                </motion.button>
                <motion.button
                  onClick={copyFeaturedQuote}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-white/30 transition-colors inline-flex items-center gap-2 backdrop-blur-sm text-sm sm:text-base"
                >
                  <ClipboardIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  复制名言
                </motion.button>
              </div>
              
              {/* 复制成功提示 */}
              <AnimatePresence>
                {showCopyToast && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 text-center"
                  >
                    <span className="bg-white/20 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm backdrop-blur-sm">
                      ✓ 已复制到剪贴板
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Quotes; 