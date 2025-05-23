import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface GalleryItem {
  id: number;
  title: string;
  style: string;
  description: string;
  imageUrl: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: '经典肖像',
      style: 'classical',
      description: '展现马克思深邃思想的经典油画风格肖像',
      imageUrl: 'https://via.placeholder.com/400x500/8B0000/FFFFFF?text=Marx+Classical'
    },
    {
      id: 2,
      title: '现代艺术',
      style: 'modern',
      description: '运用现代艺术手法诠释马克思形象',
      imageUrl: 'https://via.placeholder.com/400x500/FF6347/FFFFFF?text=Marx+Modern'
    },
    {
      id: 3,
      title: '水墨风格',
      style: 'ink',
      description: '融合东方美学的水墨画马克思',
      imageUrl: 'https://via.placeholder.com/400x500/2F4F4F/FFFFFF?text=Marx+Ink'
    },
    {
      id: 4,
      title: '波普艺术',
      style: 'pop',
      description: '波普艺术风格的马克思形象',
      imageUrl: 'https://via.placeholder.com/400x500/FF1493/FFFFFF?text=Marx+Pop'
    },
    {
      id: 5,
      title: '数字艺术',
      style: 'digital',
      description: '数字化时代的马克思形象创作',
      imageUrl: 'https://via.placeholder.com/400x500/4169E1/FFFFFF?text=Marx+Digital'
    },
    {
      id: 6,
      title: '版画风格',
      style: 'print',
      description: '传统版画技法呈现的马克思',
      imageUrl: 'https://via.placeholder.com/400x500/8B4513/FFFFFF?text=Marx+Print'
    }
  ];

  const styles = [
    { value: 'all', label: '全部' },
    { value: 'classical', label: '经典' },
    { value: 'modern', label: '现代' },
    { value: 'ink', label: '水墨' },
    { value: 'pop', label: '波普' },
    { value: 'digital', label: '数字' },
    { value: 'print', label: '版画' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.style === filter);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">马克思画廊</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            探索不同艺术风格下的马克思形象，感受思想与艺术的完美融合
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {styles.map((style) => (
            <button
              key={style.value}
              onClick={() => setFilter(style.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === style.value
                  ? 'bg-marx-red text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MagnifyingGlassIcon className="h-8 w-8 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
              >
                <XMarkIcon className="h-6 w-6 text-gray-800" />
              </button>
              <div className="grid md:grid-cols-2">
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4">{selectedImage.title}</h2>
                  <p className="text-gray-600 mb-6">{selectedImage.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">艺术风格</h3>
                      <p className="text-gray-600">
                        {styles.find(s => s.value === selectedImage.style)?.label}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">创作理念</h3>
                      <p className="text-gray-600">
                        通过不同的艺术表现形式，展现马克思思想的永恒魅力，
                        让现代观众以全新的视角认识这位伟大的思想家。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery; 