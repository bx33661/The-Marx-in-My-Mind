# 马克思网站 - Marx Website

一个现代化、美观的前端网站，旨在弘扬马克思主义思想，展示马克思形象艺术，推动思想教育与大众传播。

## 🌟 特性

- **响应式设计** - 完美适配各种设备
- **现代UI/UX** - 采用 Tailwind CSS 打造精美界面
- **动画效果** - 使用 Framer Motion 实现流畅动画
- **六大板块**：
  - 🏠 首页 - 宣传标语、快速导航
  - 🎨 马克思画廊 - 不同风格的马克思形象展示
  - 👤 马克思其人 - 生平介绍与时间轴
  - 💬 名言金句 - 经典语录收藏与分享
  - 💡 思想长廊 - 核心思想的通俗化解读
  - 🤝 互动空间 - 用户投稿与交流

## 🛠️ 技术栈

- React 19 + TypeScript
- React Router v7 (路由管理)
- Tailwind CSS v4 (样式框架)
- Framer Motion (动画库)
- Heroicons (图标库)

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm start
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

## 📁 项目结构

```
marx-website/
├── src/
│   ├── components/     # 通用组件
│   │   ├── Navbar.tsx  # 导航栏
│   │   └── Footer.tsx  # 页脚
│   ├── pages/          # 页面组件
│   │   ├── Home.tsx    # 首页
│   │   ├── Gallery.tsx # 画廊页
│   │   ├── AboutMarx.tsx # 人物介绍
│   │   ├── Quotes.tsx  # 名言页
│   │   ├── Ideas.tsx   # 思想页
│   │   └── Engage.tsx  # 互动页
│   ├── App.tsx         # 主应用组件
│   ├── index.tsx       # 入口文件
│   └── index.css       # 全局样式
├── public/             # 静态资源
├── tailwind.config.js  # Tailwind 配置
└── package.json        # 项目配置
```

## 🎨 设计理念

- **配色方案**：以红色为主色调，搭配金色和深灰色，体现庄重而不失现代感
- **排版风格**：采用 Inter 字体，清晰易读，符合现代审美
- **交互设计**：流畅的动画过渡，响应式布局，优秀的用户体验

## 📝 未来计划

- [ ] 添加真实的马克思画像资源
- [ ] 实现后端 API 支持用户投稿
- [ ] 添加多语言支持
- [ ] 增加更多互动功能
- [ ] SEO 优化

## 📄 许可证

本项目仅供学习交流使用。

---

用 ❤️ 制作，致敬伟大的思想家卡尔·马克思
