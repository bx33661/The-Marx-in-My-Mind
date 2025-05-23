import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

const Footer: React.FC = () => {
  return (
    <footer className="bg-marx-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">关于本站</h3>
            <p className="text-gray-400 text-sm">
              我们的目标是：弘扬马克思主义思想，展示马克思形象艺术，推动思想教育与大众传播。作为一个海南大学的学生，我们希望用我们的方式，来展示我们心中的马克思。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/gallery" className="text-gray-400 hover:text-marx-red transition-colors">马克思画廊</a></li>
              <li><a href="/quotes" className="text-gray-400 hover:text-marx-red transition-colors">名言金句</a></li>
              <li><a href="/ideas" className="text-gray-400 hover:text-marx-red transition-colors">思想长廊</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <p className="text-gray-400 text-sm">
              邮箱：bx33661@qq.com<br />
              地址：海南大学（海甸校区）----淳明书院<br />
              参与者：Zhang,Xing,Chen
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            用 <HeartIcon className="h-4 w-4 text-marx-red mx-1" /> 制作 | &copy; 2025 我心中的马克思（The-Marx-in-My-Mind）
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 