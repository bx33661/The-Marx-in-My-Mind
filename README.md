# 马克思网站 - Marx Website

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-blue" alt="React Version" />
  <img src="https://img.shields.io/badge/TypeScript-4.9.5-blue" alt="TypeScript Version" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.1-blue" alt="TailwindCSS Version" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
</p>

<p align="center">
  <strong>🌟 思想之光，时代之魂 🌟</strong>
</p>

一个现代化、美观的前端网站，旨在弘扬马克思主义思想，展示马克思形象艺术，推动思想教育与大众传播。

## 📸 预览

### 🏠 首页
- 动态背景动画
- 响应式英雄横幅
- 特色功能卡片
- 统计数据展示
- 时间线预览

### 🎨 主要功能
- **马克思画廊** - 展示不同艺术风格的马克思形象
- **马克思其人** - 互动式时间轴展示生平事迹
- **名言金句** - 中英双语名言，支持收藏分享
- **思想长廊** - 核心思想的通俗化解读
- **互动空间** - 用户投稿和知识测验

## 🌟 特性

### 设计特色
- 🎨 **现代化设计** - 采用最新的设计趋势
- 📱 **完全响应式** - 完美适配各种设备
- ✨ **流畅动画** - 使用 Framer Motion 实现优雅过渡
- 🎭 **独特字体** - 中西结合的字体系统
- 🌈 **主题配色** - 红色主题，庄重而不失活力

### 技术特点
- ⚛️ **React 19** - 最新版本的 React
- 📘 **TypeScript** - 类型安全的开发体验
- 🎨 **Tailwind CSS** - 实用优先的 CSS 框架
- 🚀 **性能优化** - 代码分割、懒加载
- 🔍 **SEO 友好** - 优化的元数据和结构

## 🛠️ 技术栈

- **前端框架**: React 19 + TypeScript
- **样式方案**: Tailwind CSS 3.4 + CSS Modules
- **路由管理**: React Router v7
- **动画库**: Framer Motion
- **图标库**: Heroicons
- **字体方案**: 
  - Playfair Display (标题)
  - Montserrat (正文)
  - ZCOOL XiaoWei (中文艺术字体)
  - Crimson Text (引言)

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/yourusername/marx-website.git
cd marx-website
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm start
```

4. **构建生产版本**
```bash
npm run build
```

## 📦 项目结构

```
marx-website/
├── public/                 # 静态资源
├── src/
│   ├── components/        # 通用组件
│   │   ├── Navbar.tsx    # 导航栏
│   │   ├── Footer.tsx    # 页脚
│   │   ├── LoadingScreen.tsx    # 加载动画
│   │   └── BackgroundPattern.tsx # 背景装饰
│   ├── pages/            # 页面组件
│   │   ├── Home.tsx      # 首页
│   │   ├── Gallery.tsx   # 画廊页
│   │   ├── AboutMarx.tsx # 人物介绍
│   │   ├── Quotes.tsx    # 名言页
│   │   ├── Ideas.tsx     # 思想页
│   │   └── Engage.tsx    # 互动页
│   ├── App.tsx           # 主应用组件
│   ├── index.tsx         # 入口文件
│   └── index.css         # 全局样式
├── tailwind.config.js    # Tailwind 配置
├── vercel.json          # Vercel 部署配置
└── package.json         # 项目配置
```

## 🎨 设计系统

### 颜色方案
- **主色**: `#DC143C` (Marx Red)
- **辅助色**: `#FFD700` (Marx Gold)
- **深色**: `#1a1a1a` (Marx Dark)
- **灰色**: `#333333` (Marx Gray)

### 字体系统
```css
font-serif: 'Playfair Display', 'ZCOOL XiaoWei'
font-sans: 'Montserrat', 'Noto Sans SC'
font-display: 'Bebas Neue', 'ZCOOL XiaoWei'
font-chinese: 'ZCOOL XiaoWei', 'Ma Shan Zheng'
font-elegant: 'Crimson Text', 'Noto Sans SC'
```

## 📱 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)
- iOS Safari (iOS 12+)
- Chrome for Android (最新)

## 🚀 部署

### Vercel (推荐)
```bash
npx vercel --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

### Netlify
```bash
npm run build
netlify deploy --dir=build --prod
```

详细部署指南请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🤝 贡献

欢迎贡献代码！请遵循以下步骤：

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 待办事项

- [ ] 添加真实的马克思画像资源
- [ ] 实现后端 API 支持
- [ ] 添加用户认证系统
- [ ] 增加多语言支持（英语、俄语等）
- [ ] 添加暗黑模式
- [ ] 集成评论系统
- [ ] 添加搜索功能
- [ ] PWA 支持
- [ ] 性能监控集成

## 🔧 环境变量

创建 `.env` 文件并添加以下变量（可选）：

```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_GA_ID=your-google-analytics-id
```

## 📈 性能优化

- 图片懒加载
- 路由懒加载
- Gzip 压缩
- 静态资源 CDN
- Service Worker 缓存

## 🛡️ 安全性

- 内容安全策略 (CSP)
- XSS 防护
- 依赖安全检查

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👥 团队

- **设计**: 现代化 UI/UX 设计
- **开发**: React + TypeScript 全栈开发
- **内容**: 马克思主义理论研究

## 🙏 致谢

- React 团队
- Tailwind CSS 团队
- 所有开源贡献者
- 马克思主义研究学者

## 📞 联系方式

- 项目主页: [https://marx-website.vercel.app](https://marx-website.vercel.app)
- 邮箱: contact@marxwebsite.com
- Issues: [GitHub Issues](https://github.com/yourusername/marx-website/issues)

---

<p align="center">
  用 ❤️ 制作，致敬伟大的思想家卡尔·马克思
</p>

<p align="center">
  <strong>"哲学家们只是用不同的方式解释世界，而问题在于改变世界。"</strong>
</p>
