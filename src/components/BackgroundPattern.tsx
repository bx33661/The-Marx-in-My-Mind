import React from 'react';

const BackgroundPattern: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* 左上角装饰 */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-marx-red opacity-5 rounded-full blur-3xl"></div>
      
      {/* 右下角装饰 */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-marx-gold opacity-5 rounded-full blur-3xl"></div>
      
      {/* 中心星星图案 */}
      <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02]">
        <path
          d="M400,50 L450,200 L600,200 L475,300 L525,450 L400,350 L275,450 L325,300 L200,200 L350,200 Z"
          fill="#DC143C"
        />
      </svg>
      
      {/* 网格背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
    </div>
  );
};

export default BackgroundPattern; 