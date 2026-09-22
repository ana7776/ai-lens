import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ai-lens.pages.dev',   // Cloudflare Pages 도메인 (커스텀 도메인으로 변경 가능)
  integrations: [mdx(), sitemap()],
  output: 'static',                     // Cloudflare Pages = 정적 배포
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
