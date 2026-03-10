# 玄荒道府星空版 - 快速开始指南

## 安装步骤

### 1. 安装项目依赖

在项目根目录运行：

```bash
cd tianfu
npm install
```

### 2. 复制背景图片

将以下图片文件复制到项目的 `images/` 目录中：

- `d1.png` - 天府起源页面背景
- `c1.png` - 天府七圣页面背景
- `e1.png` - 神域天府吟页面背景

这些图片应该从项目根目录的 `images/` 文件夹中复制：

```
复制位置：d:\天府\玄荒道府\images\
目标位置：d:\天府\玄荒道府\tianfu\images\ (需要创建)
```

### 3. 启动开发服务器

```bash
npm run dev
```

然后在浏览器中打开显示的本地服务器地址（通常是 `http://localhost:5173`）

## 项目特性

### ✨ 星空色调设计
- 深蓝紫色背景替代原有的黑金主题
- 青色 (#00d4ff) 强调色
- 紫色 (#9d4edd) 辅助色
- 星辰白 (#e0f7ff) 文本色

### 🌌 星空背景动画
- 动态的星星漂浮效果
- 固定在背景的Canvas图层

### 📱 功能页面
1. **道府主殿** - 欢迎页面，展示功能列表
2. **天府起源** - 介绍玄荒道府的历史
3. **天府七圣** - 展示七位传奇圣者
4. **十三主脉** - 网格展示13个主脉
5. **神域天府吟** - 可滚动的古诗内容

### 🎨 UI组件
- 玻璃态形态面板 (Glass Morphism)
- 带角括号装饰的面板
- 流畅的过渡动画
- 悬停效果交互

## 文件结构说明

```
tianfu/
├── src/
│   ├── components/               # Vue 组件
│   │   ├── AppSidebar.vue       # 侧边栏菜单（星空样式）
│   │   ├── PageLayout.vue       # 页面容器
│   │   └── GlassPanel.vue       # 内容面板
│   ├── views/                    # 页面组件
│   ├── router/index.js           # 路由配置
│   ├── data/                     # 数据文件
│   │   ├── sages.js             # 七圣数据
│   │   └── clans.js             # 脉系数据
│   ├── composables/              # 可复用逻辑
│   │   └── useStarCanvas.js      # 星空动画
│   ├── assets/styles/
│   │   └── global.css           # 全局星空主题样式
│   ├── App.vue                   # 主应用组件
│   └── main.js                   # Vue应用入口
├── index.html                    # HTML入口
├── vite.config.js               # Vite配置
└── package.json                 # 项目依赖

images/  (需要自己创建并放入背景图)
├── d1.png
├── c1.png
└── e1.png
```

## 色彩说明

| 用途 | 颜色 | 十六进制 |
|------|------|--------|
| 主要强调色（星光） | 青蓝 | #00d4ff |
| 深色背景 | 深蓝紫 | #0f1e3d |
| 中间背景 | 蓝紫 | #1a2744 |
| 文本主色 | 星白 | #e0f7ff |
| 文本辅助 | 青蓝灰 | #7da9cc |
| 紫色调 | 紫色 | #9d4edd |

## 构建和部署

### 开发模式
```bash
npm run dev
```

### 生成生产构建
```bash
npm run build
```

### 预览生产构建
```bash
npm run preview
```

生成的文件将位于 `dist/` 目录中，可以部署到任何静态主机（GitHub Pages, Netlify等）

## 常见问题

### Q: 图片无法加载怎么办？
A: 确保背景图片已复制到 `images/` 目录，并且文件名正确（d1.png, c1.png, e1.png）

### Q: 页面加载缓慢？
A: 这是正常的，因为背景图片较大。确保图片已优化。可以考虑：
   - 压缩背景图片
   - 使用WebP格式
   - 实施懒加载

### Q: 侧边栏在移动设备上太宽怎么办？
A: 已内置响应式设计，在小屏幕上侧边栏会自动变窄

## 自定义建议

### 修改色彩主题
编辑 `src/assets/styles/global.css` 中的 `:root` CSS 变量

### 增加新页面
1. 在 `src/views/` 创建新的 `.vue` 文件
2. 在 `src/router/index.js` 添加路由
3. 在 `src/components/AppSidebar.vue` 中添加导航项

### 修改侧边栏菜单
编辑 `src/components/AppSidebar.vue` 中的 `NAV_ITEMS` 数组

祝您使用愉快！🌌
