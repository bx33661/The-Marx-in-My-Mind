# React项目中使用本地图片指南

## 1. 使用Public文件夹中的图片

### 正确的路径格式：
```javascript
// ✅ 正确 - 使用绝对路径，从public文件夹根目录开始
imageUrl: '/png/youhua.png'

// ❌ 错误 - 不要包含public文件夹名称
imageUrl: 'public/png/youhua.png'

// ❌ 错误 - 不要包含项目文件夹名称
imageUrl: 'marx-website/public/png/youhua.png'
```

### 文件存放位置：
```
marx-website/
├── public/
│   └── png/          # 存放图片文件
│       ├── youhua.png
│       └── t2.png
```

## 2. 使用Import导入图片（推荐用于组件中的静态图片）

```javascript
// 在组件顶部导入图片
import marxImage from '../assets/marx.jpg';

// 在组件中使用
<img src={marxImage} alt="Marx" />
```

## 3. 使用process.env.PUBLIC_URL（用于动态路径）

```javascript
// 适用于需要动态构建路径的情况
imageUrl: `${process.env.PUBLIC_URL}/png/${imageName}.png`
```

## 4. 注意事项

1. **开发环境 vs 生产环境**：
   - 开发环境：直接使用 `/png/image.png`
   - 生产环境：如果部署在子路径下，可能需要配置 `homepage`

2. **图片优化建议**：
   - 使用适当的图片格式（JPG用于照片，PNG用于透明图片）
   - 压缩图片以提高加载速度
   - 考虑使用WebP格式以获得更好的压缩率

3. **添加新图片**：
   - 将图片文件放入 `public/png/` 文件夹
   - 在代码中使用 `/png/文件名.扩展名` 引用

## 5. 示例

```javascript
const galleryItems = [
  {
    id: 1,
    title: '经典肖像',
    imageUrl: '/png/youhua.png'  // 引用public/png/youhua.png
  }
];
``` 