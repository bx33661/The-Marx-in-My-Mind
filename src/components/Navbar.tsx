import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { name: '首页', path: '/' },
    { name: '马克思画廊', path: '/gallery' },
    { name: '马克思其人', path: '/about' },
    { name: '名言金句', path: '/quotes' },
    { name: '思想长廊', path: '/ideas' },
    { name: '关于项目', path: '/about-us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-marx-dark dark:bg-black shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <span className="text-marx-red text-xl sm:text-2xl font-chinese-title font-bold">我心中的</span>
              <span className="text-white text-xl sm:text-2xl font-display ml-2 tracking-wider">Marx</span>
            </Link>
          </motion.div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-marx-red text-white'
                        : 'text-gray-300 hover:bg-marx-gray dark:hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-marx-gray dark:hover:bg-gray-800 transition-all"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </motion.button>

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-marx-gray dark:hover:bg-gray-800 focus:outline-none"
              >
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto' } : { height: 0 }}
        className="lg:hidden overflow-hidden bg-marx-dark dark:bg-black"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium tracking-wide transition-all duration-300 ${
                isActive(item.path)
                  ? 'bg-marx-red text-white'
                  : 'text-gray-300 hover:bg-marx-gray dark:hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 