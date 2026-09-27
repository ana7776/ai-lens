import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ailenswork.com',
  integrations: [mdx(), sitemap()],
  output: 'static',
  markdown: { shikiConfig: { theme: 'github-dark' } },
});
