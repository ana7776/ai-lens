export const sections = {
  work: { name: 'AI 업무', href: '/work/' },
  create: { name: '콘텐츠 제작', href: '/create/' },
  workflow: { name: '통합 워크플로우', href: '/workflow/' },
} as const;

export type SectionKey = keyof typeof sections;

export const formatDate = (d: Date) =>
  `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;

/** 글 id(예: work/meeting-notes) → 공개 주소 */
export const guideHref = (id: string) => `/${id}/`;
