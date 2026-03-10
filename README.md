# 玄荒道府 - 星空版本

一个基于 Vue 3 + Vite 的古风幻想主题网站，采用星空色调设计。

## 功能特性

- 🌌 沉浸式星空背景动画
- ✨ 星空风格的色彩主题（青色、紫色、星辰白）
- 📱 响应式设计
- 🎭 古风文化元素
- 💨 流畅的页面过渡效果
- 🎨 玻璃态形态的UI设计

## 项目结构

```
tianfu/
├── src/
│   ├── components/        # Vue 组件
│   │   ├── AppSidebar.vue    # 侧边栏导航
│   │   ├── PageLayout.vue    # 页面布局
│   │   └── GlassPanel.vue    # 玻璃态面板
│   ├── views/            # 页面视图
│   │   ├── HomeView.vue
│   │   ├── OriginView.vue
│   │   ├── SevenSagesView.vue
│   │   ├── ThirteenClansView.vue
│   │   └── PoemView.vue
│   ├── router/           # 路由配置
│   ├── data/             # 数据文件
│   ├── composables/      # 组合式函数
│   ├── assets/styles/    # 全局样式
│   ├── App.vue
│   └── main.js
├── index.html
├── vite.config.js
└── package.json
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发服务器

```bash
npm run dev
```

### 生成构建

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 色彩主题

星空版本采用了以下色彩方案：

- **主色（星光青）**：#00d4ff
- **深色**：#0f1e3d, #1a2744
- **紫色调**：#9d4edd
- **文本色**：#e0f7ff, #7da9cc

## 页面列表

- 📖 **道府主殿** - 主页
- 🌌 **天府起源** - 道府历史与背景
- ✦ **天府七圣** - 七位传奇圣者
- ⚡ **十三主脉** - 道府的十三个分支
- 📜 **神域天府吟** - 壮阔的古诗吟唱

## 背景图片

项目使用以下背景图片（需要放在 `/images/` 目录中）：

- `d1.png` - 天府起源页面
- `c1.png` - 天府七圣页面
- `e1.png` - 神域天府吟页面

## 许可证

MIT
