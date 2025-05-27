# 马克思网站 - The Marx in My Mind

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-blue" alt="React Version" />
  <img src="https://img.shields.io/badge/TypeScript-4.9.5-blue" alt="TypeScript Version" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.1-blue" alt="TailwindCSS Version" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
</p>

<p align="center">
  <strong>🌟 思想之光，时代之魂 🌟</strong>
</p>

<p align="center">
  <em>我们旨在通过WEB网站的方式去表达和宣传我们心中的马克思！🙂</em>
</p>

## 💡 项目初衷

本项目是为了完成大二下学期《马克思主义基本原理》课程的实践任务。我们希望通过这个项目，让马克思主义不再是书本上的文字，而是活生生的思想。我们相信，经典理论在新时代依然有着强大的生命力。

> 感谢老师，让我们有机会去用心学习和了解马克思

## 👥 创作团队

我们是来自海南大学网络空间安全学院的三名学生：

- **bpple** - 在校学生，尝试创造，热爱生活，热爱理想

  - 负责：网站开发与技术实现，内容策划与理论研究
- **unjoker** - 在校学生，喜欢研究创意，热爱不一样的事情

  - 负责：网站开发与技术实现，活动策划与组织
- **iam0range** - 在校学生，用技术创造有意义的作品，用文字传播心中所爱

  - 负责：视觉设计与交互体验，活动策划与组织

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

- 🎨 **现代化设计** - 采用最新的设计趋势，展现马克思主义的时代魅力
- 📱 **完全响应式** - 完美适配各种设备，让思想随时随地传播
- ✨ **流畅动画** - 使用 Framer Motion 实现优雅过渡
- 🌓 **深色模式** - 支持明暗主题切换，呵护您的双眼
- 🎭 **中文书法字体** - 融合传统与现代的独特字体系统
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
  - Playfair Display (英文标题)
  - Montserrat (英文正文)
  - Ma Shan Zheng (毛笔书法风格)
  - ZCOOL XiaoWei (中文艺术字体)
  - ZCOOL KuaiLe (活泼标题)
  - ZCOOL QingKe HuangYou (优雅正文)

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
│   │   ├── BackgroundPattern.tsx # 背景装饰
│   │   └── ThemeContext.tsx     # 主题管理
│   ├── pages/            # 页面组件
│   │   ├── Home.tsx      # 首页
│   │   ├── Gallery.tsx   # 画廊页
│   │   ├── AboutMarx.tsx # 人物介绍
│   │   ├── Quotes.tsx    # 名言页
│   │   ├── Ideas.tsx     # 思想页
│   │   └── AboutUs.tsx   # 关于我们
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
font-serif: 'Playfair Display', 'Ma Shan Zheng'
font-sans: 'Montserrat', 'Noto Sans SC'
font-chinese: 'ZCOOL XiaoWei', 'Ma Shan Zheng'
font-chinese-title: 'Ma Shan Zheng', 'ZCOOL KuaiLe'
font-chinese-elegant: 'ZCOOL QingKe HuangYou', 'Noto Sans SC'
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

## 📝 已完成功能

- [X]  响应式设计
- [X]  深色模式支持
- [X]  中文书法字体集成
- [X]  30条精选马克思名言
- [X]  随机推荐功能
- [X]  复制分享功能
- [X]  收藏功能
- [X]  17个时间轴事件
- [X]  10个思想理论板块

## 🚧 待办事项

- [ ]  添加真实的马克思画像资源
- [ ]  实现后端 API 支持
- [ ]  添加用户认证系统
- [ ]  增加多语言支持（英语、俄语等）
- [ ]  集成评论系统
- [ ]  添加搜索功能
- [ ]  PWA 支持
- [ ]  性能监控集成

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

## 🙏 致谢

- React 团队
- Tailwind CSS 团队
- 所有开源贡献者
- 马克思主义研究学者
- 海南大学《马克思主义基本原理》课程老师

## 📞 联系方式

- 项目主页: [https://marx-website.vercel.app](https://marx-website.vercel.app)
- 邮箱: bx33661@qq.com
- 地址: 海南大学（海甸校区）
- Issues: [GitHub Issues](https://github.com/yourusername/marx-website/issues)

---

<p align="center">
  用 ❤️ 制作，向伟大的思想家卡尔·马克思致敬
</p>

<p align="center">
  <strong>"哲学家们只是用不同的方式解释世界，而问题在于改变世界。"</strong>
</p>

<p align="center">
  <em>—— 卡尔·马克思</em>
</p>
