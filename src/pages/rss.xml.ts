import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const guides = (await getCollection('guides')).sort((a, b) => b.data.updated.getTime() - a.data.updated.getTime());
  return rss({
    title: 'AI렌즈 Work — AI 도구 실전 활용 가이드',
    description: '혼자 일하는 사람을 위한 AI 업무·콘텐츠 제작 워크플로우와 검수 기준.',
    site: context.site!,
    items: guides.map((g) => ({ title: g.data.title, description: g.data.description, link: `/${g.id}/`, pubDate: g.data.published })),
    customData: '<language>ko</language>',
  });
}
