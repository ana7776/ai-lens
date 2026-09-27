import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
const items = [
  { title: '회의 기록을 실행 항목으로 바꾸는 프롬프트', description: '결정, 담당, 기한과 미확정 항목을 분리하는 회의 기록 작업 설계.', link: '/work/meeting-notes/' },
  { title: '긴 문서를 근거와 함께 검토하기', description: '주장과 근거 위치, 예외, 추가 확인 항목을 분리해 읽는 문서 검토 흐름.', link: '/work/pdf-review/' },
  { title: 'AI가 만든 문서 초안을 검수하는 8단계', description: '사실·범위·개인정보를 원자료와 대조하고 사람이 최종 승인하는 문서 검수 순서.', link: '/work/ai-review-checklist/' },
  { title: '짧은 메모를 블로그 초안으로 확장하기', description: '실제 맥락과 독자 질문을 더해 SNS 메모를 긴 글로 발전시키는 과정.', link: '/create/threads-to-blog/' },
  { title: 'AI 음악 생성 전에 브리프부터 만들기', description: '사용 장면과 제약 조건을 정리하고 공개 전 권리를 확인하는 체크리스트.', link: '/create/ai-music-brief/' },
  { title: '혼자 운영하는 주간 콘텐츠 파이프라인', description: '기획, 자료 확인, 초안, 편집과 사람의 최종 승인을 나누는 운영 틀.', link: '/workflow/weekly-pipeline/' },
];
export async function GET(context: APIContext) {
  return rss({ title: 'AI렌즈 Work — AI 실무와 콘텐츠 제작', description: '혼자 일하는 사람을 위한 AI 업무·콘텐츠 제작 워크플로우.', site: context.site!, items: items.map((item) => ({ title: item.title, description: item.description, link: item.link, pubDate: new Date('2026-09-25T00:00:00+09:00') })), customData: '<language>ko</language>' });
}
