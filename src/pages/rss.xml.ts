import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const pulse = await getCollection('pulse');
  const bookshelf = await getCollection('bookshelf');
  const deepdive = await getCollection('deepdive');

  const allPosts = [...pulse, ...bookshelf, ...deepdive]
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, 30);

  return rss({
    title: 'AI렌즈 — AI 도서 · 뉴스 · 도구 · 가이드',
    description: 'AI 관련 도서 큐레이션, 뉴스 다이제스트, 도구 레이더, 실전 가이드. 제휴 링크로 운영되는 독립 AI 정보 허브.',
    site: context.site!,
    items: allPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${post.collection}/${post.id}/`,
    })),
    customData: `<language>ko</language>`,
  });
}
