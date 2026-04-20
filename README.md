# tqkx-web

这是一个可直接部署到服务器的静态官网项目，包含：

- 多页面网站：`index.html`、`services.html`、`about.html`、`contact.html`
- 公共资源：`assets/css/style.css`、`assets/js/main.js`
- 部署配置：`nginx.conf`、`Dockerfile`、`docker-compose.yml`
- SEO 基础：`robots.txt`、`sitemap.xml`

## 1) 本地预览

可以直接双击 `index.html` 打开，或使用任意静态服务器预览。

## 2) Docker 部署（推荐）

在项目根目录执行：

```bash
docker compose up -d --build
```

启动后访问：

- `http://服务器IP:8080`

停止服务：

```bash
docker compose down
```

## 3) Nginx 直接部署（不使用 Docker）

1. 将项目文件上传到服务器目录（如 `/var/www/tqkx-web`）。
2. 将 `nginx.conf` 内容应用到你的站点配置。
3. 重载 Nginx：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 4) 上线前必须修改

- 将 `robots.txt` 和 `sitemap.xml` 中的 `https://your-domain.com` 改成你的真实域名。
- 替换 `contact.html` 中联系方式。
- 如需 HTTPS，建议配合 `certbot` 申请证书并在 Nginx 中启用 443。

## 5) 目录结构

```text
tqkx-web/
├─ assets/
│  ├─ css/style.css
│  └─ js/main.js
├─ index.html
├─ services.html
├─ about.html
├─ contact.html
├─ logo.svg
├─ nginx.conf
├─ Dockerfile
├─ docker-compose.yml
├─ robots.txt
└─ sitemap.xml
```
