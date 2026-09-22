import { defineCollection, z } from 'astro:content';

/* ────────────────────────────────────────────
   콘텐츠 컬렉션 스키마 정의
   앨리스온과의 차별점:
   - 앨리스온: NEWS / REVIEW / OPINION / INTERVIEW / LAB (미디어아트 중심)
   - AI렌즈:  PULSE / BOOKSHELF / LAB / RADAR / DEEPDIVE (AI 산업 실용 정보 + 제휴수익)
   ──────────────────────────────────────────── */

// PULSE — AI 뉴스 다이제스트 (짧은 속보+분석)
const pulse = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    source: z.string().optional(),           // 원문 출처 URL
    sourceLabel: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// BOOKSHELF — AI 도서 큐레이션 + 어필리에이트
const bookshelf = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),                      // 도서 저자
    publisher: z.string(),                   // 출판사
    coverImage: z.string().optional(),
    isbn: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    tags: z.array(z.string()).default([]),
    affiliateLinks: z.array(z.object({
      store: z.string(),                     // "coupang" | "yes24" | "aladin" | "amazon"
      url: z.string(),
      price: z.number().optional(),
      originalPrice: z.number().optional(),
    })).default([]),
    featured: z.boolean().default(false),
  }),
});

// LAB — 실습/가이드/튜토리얼
const lab = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    estimatedTime: z.string().optional(),    // "15분", "30분" 등
  }),
});

// RADAR — AI 도구/서비스/제품 리뷰 + 어필리에이트
const radar = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['tool', 'service', 'hardware', 'course']).default('tool'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    pricingModel: z.string().optional(),     // "무료", "프리미엄", "월 $20" 등
    affiliateUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// DEEPDIVE — 장문 분석/리서치
const deepdive = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    series: z.string().optional(),           // 시리즈 묶음
  }),
});

export const collections = { pulse, bookshelf, lab, radar, deepdive };
