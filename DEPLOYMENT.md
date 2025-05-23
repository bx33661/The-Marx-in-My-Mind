# 部署指南

## 部署前检查

- [ ] 确保所有功能正常工作
- [ ] 检查控制台是否有错误
- [ ] 优化图片大小
- [ ] 设置正确的 `homepage` 字段（如果使用 GitHub Pages）
- [ ] 更新 README.md
- [ ] 测试响应式布局

## 快速部署命令

### Vercel
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

## 环境变量

如需设置环境变量，创建 `.env` 文件：
```
REACT_APP_API_URL=https://api.example.com
```

## 自定义域名

1. 在部署平台添加自定义域名
2. 在域名提供商处添加 CNAME 记录
3. 等待 DNS 生效（通常需要几分钟到 48 小时）

## 性能优化建议

1. 启用 CDN
2. 使用图片懒加载
3. 开启 Gzip 压缩
4. 设置合理的缓存策略
5. 使用 WebP 格式图片

## 监控和分析

推荐添加：
- Google Analytics
- 百度统计（国内用户）
- Sentry（错误监控） 