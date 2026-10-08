# GitHub Pages 部署

## 新账户迁移

本项目配置的发布地址为 `https://toskaeitan.github.io/`，`base` 为 `/`。

1. 在新账户下将仓库名从 `EitanAC.github.io` 改为 `toskaeitan.github.io`：Settings → General → Repository name。
2. 将验证后的维护改动推送到 `main`，让 `astro.config.mjs` 中的 `site` 与新地址一致。
3. 在 Settings → Pages 中选择 GitHub Actions 作为部署来源。
4. 在 Actions 中检查 **Deploy to GitHub Pages**；必要时使用 Run workflow 重新部署。
5. 打开新网址，检查首页、文章、图片、RSS 和搜索。

仓库尚未改名时，Pages 默认地址是 `https://toskaeitan.github.io/EitanAC.github.io/`，与本项目的根路径配置不匹配。不要把子路径地址的构建结果当作迁移完成。

GitHub 不会为旧 Pages 地址 `https://eitanac.github.io/` 自动提供迁移重定向。转移仓库后，旧账户不再有一份独立仓库，不需要额外删除。

## 部署方式

`.github/workflows/deploy.yml` 在 `main` 更新或手动触发时构建并发布。PR 验证工作流只构建，不发布网站。

本地验证：

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm preview
```

## 公开与私有

GitHub Free 的 GitHub Pages 要求仓库公开。私有化会导致 Pages 网站下线。GitHub Pro 支持从私有仓库发布公开网站；源码私有不等于博客访问受限。

参考：[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)、[仓库转移](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository)。

## 文章与环境变量

模板归档示例已清理，不再使用 `SHOW_ARCHIVED_POSTS` 开关。正式文章放在 `src/content/posts/`，用 `draft: true` 标记草稿。

不要提交 `.env` 或 `.env.*` 中的敏感配置；允许提交不含真实秘密的 `.env.example`。生产构建和部署的环境变量可在对应平台配置，GitHub Actions 也支持环境变量。
