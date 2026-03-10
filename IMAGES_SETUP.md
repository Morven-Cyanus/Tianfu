# 背景图片配置指南

## 关于背景图片

`tianfu` 项目使用以下三张背景图片，这些图片来自原项目的 `images/` 文件夹。       

## 所需图片文件

| 页面 | 图片文件 | 用途 |
|------|---------|------|
| 天府起源 | `d1.png` | OriginView 背景 |
| 天府七圣 | `c1.png` | SevenSagesView 背景 |
| 神域天府吟 | `e1.png` | PoemView 背景 |

## 设置步骤

### 1. 在项目中创建 images 目录

```bash
cd d:\天府\玄荒道府\tianfu
mkdir images
```

### 2. 复制背景图片

将以下图片从项目根目录复制到 `tianfu/images/`：

```
源位置: d:\天府\玄荒道府\images\
目标位置: d:\天府\玄荒道府\tianfu\images\

文件：
- d1.png
- c1.png  
- e1.png
```

### 3. 验证文件结构

完成后应该看到如下结构：

```
tianfu/
├── images/
│   ├── d1.png          ✓ 天府起源背景
│   ├── c1.png          ✓ 天府七圣背景
│   └── e1.png          ✓ 神域天府吟背景
├── src/
├── index.html
└── ...
```

## Vite 中的图片引用

在这个项目中，背景图片通过 `PageLayout` 组件的 `bg` prop 传递：

```vue
<PageLayout
  bg="url(../../../images/d1.png)"
  title="天府起源"
>
  <!-- 内容 -->
</PageLayout>
```

路径 `../../../images/` 的解释：
- `../../../` - 从 `src/views/` 返回到项目根目录
- `images/` - `public` 目录下的图片文件夹

## 图片优化建议

为了获得最佳性能，建议：

1. **压缩图片**
   - 使用 TinyPNG、ImageOptim 等工具
   - 目标：每个图片 < 500KB

2. **格式选择**
   - PNG：用于需要透明度
   - WebP：用于更好的压缩（现代浏览器支持）
   - JPG：用于照片类背景

3. **尺寸**
   - 建议 1920x1080 或更高分辨率
   - 确保在各种屏幕大小上显示良好

## 如果图片未显示

### 检查列表

- [ ] 图片文件是否存在于 `images/` 目录
- [ ] 文件名是否准确（d1.png, c1.png, e1.png）
- [ ] 路径是否正确（`../../../images/`）
- [ ] 浏览器控制台是否有 404 错误

### 调试步骤

1. 打开浏览器开发者工具（F12）
2. 查看 Network 标签
3. 检查是否有红色的图片请求（404）
4. 检查正确的请求路径

### 替代方案

如果背景图片无法部署，页面仍可正常工作，只是背景为纯色。这是为了确保应用的稳定性。

## 使用 public 文件夹（推荐）

也可以将图片放在项目的 `public/` 文件夹中：

```
tianfu/
├── public/
│   └── images/
│       ├── d1.png
│       ├── c1.png
│       └── e1.png
├── src/
└── ...
```

然后在 PageLayout 中使用公共路径：

```vue
<PageLayout
  bg="url(/images/d1.png)"
  title="天府起源"
>
  <!-- content -->
</PageLayout>
```

注意：需要在 `vite.config.js` 中配置 publicDir。

## 常见问题

### Q: 为什么建议放在 images 文件夹而不是 src 中？
A: 这样便于管理与组织，与原项目结构一致。

### Q: 可以使用网络图片吗？
A: 可以，但性能可能更差。建议本地部署。

### Q: 整个应用也可以使用完全透明的背景吗？
A: 可以，修改 `global.css` 中的 `--panel-bg` 变量。

需要帮助？请参考 QUICK_START.md 或 README.md。
