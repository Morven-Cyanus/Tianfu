# 🎨 星空色彩主题定制指南

## 概述

本项目采用**星空色调**设计，所有颜色都通过 CSS 变量定义，便于快速定制和主题切换。

## 星空主题色彩对照表

### 核心色变量

```css
:root {
  /* 新增星空色 */
  --star-light: #e0f7ff;      /* 星辰白 - 文本主色 */
  --star-bright: #00d4ff;     /* 星光青 - 主强调色 */
  --star-cyan: #0099ff;       /* 天蓝色 - 辅助强调 */
  --star-purple: #9d4edd;     /* 紫色 - 紫色调 */
  --star-deep: #0f1e3d;       /* 深空蓝 - 深色背景 */
  --star-mid: #1a2744;        /* 夜空蓝 - 中层背景 */
  --star-light-mid: #2d3f5e;  /* 天空蓝 - 浅层背景 */
  
  /* 向后兼容别名（与原XuanHuan项目兼容） */
  --gold: #00d4ff;            /* 星光青 */
  --gold-light: #e0f7ff;      /* 星辰白 */
  --gold-dim: #0099ff;        /* 天蓝色 */
  --jade: #00d4ff;            /* 青变量 */
  --...
}
```

## 色彩使用位置

| CSS 变量 | 使用位置 | 视觉效果 |
|---------|---------|---------|
| `--star-bright` / `--gold` | 按钮、链接、强调 | 醒目的青蓝色 |
| `--star-light` / `--gold-light` | 标题、主要文本 | 清晰的星白色 |
| `--star-cyan` / `--gold-dim` | 描述、辅助信息 | 温和的天蓝色 |
| `--star-purple` | 装饰元素 | 神秘的紫色 |
| `--star-deep` | 应用背景 | 深邃的深蓝 |
| `--star-mid` | 面板背景 | 柔和的中蓝 |

## 修改色彩的步骤

### 步骤1：打开全局样式文件

编辑：`src/assets/styles/global.css`

### 步骤2：找到 `:root` 选择器

```css
:root {
  /* ← 所有变量都在这里 */
  --star-light: #e0f7ff;
  --star-bright: #00d4ff;
  /* ... */
}
```

### 步骤3：修改所需颜色

例如，将主强调色从青色改为绿色：

```css
:root {
  --star-bright: #00ff00;  /* 改成绿色 */  ← 改这里
  --star-light: #e0f7ff;
  --star-cyan: #0099ff;
  /* ... */
}
```

### 步骤4：保存文件

Vite 开发服务器会自动刷新，无需重启！

## 常见定制场景

### 场景1：改用全绿色主题

```css
:root {
  --star-light: #e0ffe0;      /* 浅绿白 */
  --star-bright: #00ff00;     /* 纯绿 */
  --star-cyan: #00cc00;       /* 深绿 */
  --star-purple: #00aa00;     /* 森林绿 */
  --star-deep: #0a1e0a;       /* 深绿黑 */
  --star-mid: #1a2a1a;        /* 深绿 */
  --star-light-mid: #2d3f2d;  /* 浅绿 */
}
```

### 场景2：改用全紫色主题

```css
:root {
  --star-light: #f0e0ff;      /* 浅紫白 */
  --star-bright: #bb86fc;     /* Material紫 */
  --star-cyan: #9d4edd;       /* 深紫 */
  --star-purple: #7c3aed;     /* 紫色 */
  --star-deep: #1a0f2e;       /* 深紫黑 */
  --star-mid: #2d1b4e;        /* 中紫 */
  --star-light-mid: #3f2a6e;  /* 浅紫 */
}
```

### 场景3：改用暖色系（金/橙）

```css
:root {
  --star-light: #fff5e0;      /* 暖白 */
  --star-bright: #ffb300;     /* 金色 */
  --star-cyan: #ff9500;       /* 橙色 */
  --star-purple: #ff6b00;     /* 深橙 */
  --star-deep: #1a1005;       /* 深褐 */
  --star-mid: #2d1a0a;        /* 中褐 */
  --star-light-mid: #3f2a15;  /* 浅褐 */
}
```

### 场景4：改用冰蓝色主题

```css
:root {
  --star-light: #e0f5ff;      /* 冰蓝白 */
  --star-bright: #00bfff;     /* 深空蓝 */
  --star-cyan: #0077ff;       /* 皇家蓝 */
  --star-purple: #4db8ff;     /* 浅蓝 */
  --star-deep: #001a2e;       /* 极深蓝 */
  --star-mid: #003d5c;        /* 深蓝 */
  --star-light-mid: #1a5f8f;  /* 中蓝 */
}
```

## 高级定制：渐变和透明度

### 修改面板背景
编辑 `--panel-bg`：

```css
:root {
  /* 原始 */
  --panel-bg: rgba(26, 40, 68, 0.65);
  
  /* 改成更透明 */
  --panel-bg: rgba(26, 40, 68, 0.5);
  
  /* 改成更不透明 */
  --panel-bg: rgba(26, 40, 68, 0.85);
}
```

### 修改面板边框
编辑 `--panel-border`：

```css
:root {
  /* 原始 */
  --panel-border: rgba(0, 212, 255, 0.25);
  
  /* 改成更亮 */
  --panel-border: rgba(0, 212, 255, 0.5);
  
  /* 改成金色边框 */
  --panel-border: rgba(255, 184, 0, 0.3);
}
```

## CSS 变量完整列表

```css
:root {
  /* 星空色彩系统 */
  --star-light: #e0f7ff;           /* 星辰白 - 主文本色 */
  --star-bright: #00d4ff;          /* 星光青 - 首选强调 */
  --star-cyan: #0099ff;            /* 天蓝色 - 次强调 */
  --star-purple: #9d4edd;          /* 紫色 - 补色 */
  --star-deep: #0f1e3d;            /* 深空蓝 - 深背景 */
  --star-mid: #1a2744;             /* 夜空蓝 - 中背景 */
  --star-light-mid: #2d3f5e;       /* 天空蓝 - 浅背景 */
  
  /* 向后兼容变量 */
  --gold: #00d4ff;
  --gold-light: #e0f7ff;
  --gold-dim: #0099ff;
  --ink: #0a0f1e;
  --ink-mid: #111830;
  --ink-light: #1a2844;
  --jade: #00d4ff;
  --jade-dim: #0066aa;
  --crimson: #ff6b9d;
  --silver: #00d4ff;
  
  /* 组合色 */
  --panel-bg: rgba(26, 40, 68, 0.65);           /* 面板背景 */
  --panel-border: rgba(0, 212, 255, 0.25);      /* 面板边框 */
  
  /* 文本色 */
  --text-main: #e0f7ff;            /* 主文本 */
  --text-dim: #7da9cc;             /* 辅助文本 */
  
  /* 布局 */
  --radius: 10px;                  /* 圆角 */
  --trans: 0.3s ease;              /* 过渡时间 */
}
```

## 按元素查找颜色使用

### 侧边栏
```css
/* AppSidebar.vue */
background: linear-gradient(
  180deg,
  rgba(15, 30, 61, 0.95) 0%,
  rgba(26, 40, 68, 0.9) 100%
);  /* ← 修改这些RGBA值改变侧边栏颜色 */
```

### 按钮
```css
/* 在对应.vue文件的<style>中修改 */
.fairy-btn {
  border-color: var(--gold-dim);  /* ← 边框色 */
  color: var(--gold);             /* ← 文字色 */
}

.fairy-btn:hover {
  background: rgba(0, 212, 255, 0.12);  /* ← 改变透明度 */
  border-color: var(--gold);
}
```

### 标题发光效果
```css
/* 在global.css中 */
.page-title h1 {
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.6),    /* ← 第一层光 */
               0 0 40px rgba(157, 78, 221, 0.4);   /* ← 第二层光 */
}
```

修改RGBA中的数字来改变发光强度：
- `0.6` 改成 `0.3` 会更暗
- `0.6` 改成 `0.9` 会更亮

## 预设主题导出

### 导出当前主题配置

1. 在浏览器中打开开发工具（F12）
2. 进入 Console 标签
3. 运行以下代码：

```javascript
const style = getComputedStyle(document.documentElement);
const colors = {
  'star-light': style.getPropertyValue('--star-light'),
  'star-bright': style.getPropertyValue('--star-bright'),
  // ... 其他变量
};
console.log(JSON.stringify(colors, null, 2));
```

### 快速应用预设

创建 `src/assets/styles/themes.css`：

```css
/* 绿色主题 */
.theme-green {
  --star-bright: #00ff00;
  --star-light: #e0ffe0;
  /* ... */
}

/* 紫色主题 */
.theme-purple {
  --star-bright: #bb86fc;
  --star-light: #f0e0ff;
  /* ... */
}
```

在 HTML 中使用：
```html
<html class="theme-green">
  <!-- 页面内容 -->
</html>
```

## 动态切换主题的 JavaScript

在 App.vue 中添加：

```javascript
export default {
  data() {
    return {
      theme: 'starry'  // 默认星空主题
    }
  },
  methods: {
    setTheme(themeName) {
      const themes = {
        starry: { 'star-bright': '#00d4ff', /* ... */ },
        green: { 'star-bright': '#00ff00', /* ... */ },
        purple: { 'star-bright': '#bb86fc', /* ... */ }
      };
      
      Object.entries(themes[themeName]).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value);
      });
      
      this.theme = themeName;
    }
  }
}
```

## 调试技巧

### 在浏览器中实时修改

1. 打开开发工具（F12）
2. 找到 `<html>` 标签
3. 右键 → Edit as HTML
4. 修改或添加 `style` 属性：

```html
<html style="--star-bright: #00ff00;">
```

### 验证颜色应用

在 Console 中查看：

```javascript
getComputedStyle(document.documentElement).getPropertyValue('--star-bright')
```

## 颜色转换工具推荐

- [Color Hex](https://www.color-hex.com/) - 十六进制↔RGB转换
- [ColorHexa](https://www.colorhexa.com/) - 颜色信息查询
- [Coolors.co](https://coolors.co/) - 调色盘生成器
- [Adobe Color](https://color.adobe.com/) - 专业配色工具

## 最佳实践

✅ **推荐做法**：
- 只修改 `:root` 中的变量
- 保持光/暗的对比度 ≥ 4.5:1（可访问性）
- 保存后在浏览器中检查效果
- 为自定义主题创建独立的CSS文件

❌ **不推荐做法**：
- 直接修改组件中的颜色值
- 忽视对比度和可读性
- 同时修改过多变量导致不一致
- 删除向后兼容的变量别名

---

**祝您定制愉快！** 🎨✨
