# Eitan 的个人博客

基于 [Mizuki](https://github.com/matsuzaka-yuki/mizuki) 和 [Astro](https://astro.build/) 的个人博客，记录金融、量化交易及学习笔记。

目标网站地址：https://toskaeitan.github.io/ 。发布到这个根地址时，仓库必须命名为 `toskaeitan.github.io`，具体步骤见 [部署说明](DEPLOYMENT.md)。

## 本地开发

使用 Node.js 22 和 pnpm 9.14.4（`package.json` 中已固定包管理器版本）。

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

开发地址通常为 http://localhost:4321/ 。

```sh
pnpm build    # 构建网站并生成搜索索引
pnpm preview  # 预览构建结果
pnpm check    # Astro 类型检查，目前还有原项目遗留错误
```

## 内容和配置

| 内容 | 位置 |
| --- | --- |
| 文章 | `src/content/posts/` |
| 关于我、友链 | `src/content/spec/` |
| 项目、技能、履历 | `src/data/` |
| 站点标题、社交链接、横幅、功能开关 | `src/config.ts` |
| 网站地址 | `astro.config.mjs` 的 `site` |
| 图片等静态资源 | `public/` 或 `src/assets/` |

运行 `pnpm new-post 文章名` 创建文章。草稿设置 `draft: true`，不会进入生产环境的文章列表。草稿隐藏不等于源码保密：公开仓库里的 Markdown 仍然可见。

已清理模板教程、测试文章、宣传截图和示例歌曲。正式文章与个人资料保留。音乐播放器默认关闭；如需本地播放，添加自己的文件并配置 `MusicPlayer.svelte` 中的 `localPlaylist`。

## 维护

- `pnpm-lock.yaml` 应提交；不要提交 `node_modules/`、`dist/`、`.astro/`、环境变量和密钥。
- PR 会自动构建验证；只有 `main` 的更新会部署 GitHub Pages。
- Dependabot 每周检查依赖；升级前应检查构建与实际页面。
- 清理当前文件不会缩小已有 Git 历史，也不会清除历史中的副本。本次保留提交历史。
- `pnpm check` 在维护前有 104 个错误，主要是旧模板类型声明和组件脚本；构建成功不代表类型检查通过。

## 致谢与许可证

博客使用 Mizuki 模板，Mizuki 基于 [Fuwari](https://github.com/saicaca/fuwari)。保留模板的 MIT 许可证，见 [LICENSE](LICENSE)。文章的许可信息按站点和文章配置展示（当前站点配置为 CC BY-NC-SA 4.0）。
