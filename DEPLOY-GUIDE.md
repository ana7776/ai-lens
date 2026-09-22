# 🚀 GitHub + Cloudflare Pages 배포 가이드

## 1단계: GitHub 레포지토리 생성

```bash
cd ai-lens

# Git 초기화
git init
git add .
git commit -m "Initial commit: AI렌즈 Astro site"

# GitHub에 레포 생성 후 연결
# (GitHub.com에서 'ai-lens' 레포를 먼저 생성하세요)
git remote add origin https://github.com/YOUR_USERNAME/ai-lens.git
git branch -M main
git push -u origin main
```

> **팁**: GitHub CLI가 있으면 더 간단합니다:
> ```bash
> gh repo create ai-lens --public --source=. --push
> ```

---

## 2단계: Cloudflare Pages 연결

### A. Cloudflare 대시보드에서 설정

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) 로그인
2. 좌측 메뉴 → **Workers & Pages** 클릭
3. **Create** → **Pages** → **Connect to Git** 클릭
4. GitHub 계정 연결 → `ai-lens` 레포 선택

### B. 빌드 설정

| 항목 | 값 |
|------|------|
| **프로덕션 브랜치** | `main` |
| **빌드 명령** | `npm run build` |
| **빌드 출력 디렉토리** | `dist` |
| **Node.js 버전** | `20` (환경변수 `NODE_VERSION=20` 추가) |

### C. 환경 변수 (선택)

| 변수명 | 값 | 설명 |
|--------|-----|------|
| `NODE_VERSION` | `20` | Node.js 버전 고정 |
| `SITE_URL` | `https://ai-lens.pages.dev` | 사이트 URL |

5. **Save and Deploy** 클릭

---

## 3단계: 커스텀 도메인 연결 (선택)

1. Cloudflare Pages 프로젝트 → **Custom domains** 탭
2. 도메인 추가 (예: `ai-lens.kr`)
3. DNS 레코드가 자동 설정됨
4. `astro.config.mjs`의 `site` 값을 커스텀 도메인으로 변경:
   ```js
   site: 'https://ai-lens.kr',
   ```

---

## 4단계: 자동 배포 확인

이후 GitHub `main` 브랜치에 push할 때마다 Cloudflare Pages가 자동으로 빌드 & 배포합니다.

```bash
# 콘텐츠 추가 후 배포
git add .
git commit -m "Add new pulse article"
git push
# → Cloudflare에서 자동 빌드 시작 (보통 1~2분)
```

---

## 어필리에이트 프로그램 가입 가이드

### 쿠팡 파트너스
- 가입: https://partners.coupang.com/
- 수수료: 3~7% (카테고리별 상이)
- 링크 형식: `https://link.coupang.com/a/XXXXX`
- 주의: 24시간 쿠키 기간

### YES24 어필리에이트
- 가입: https://www.yes24.com/affiliate/
- 수수료: 3%
- 도서 전문이라 북셀프 섹션에 최적

### 알라딘 TTB (Thanks to Blogger)
- 가입: https://www.aladin.co.kr/ttb/
- 수수료: 최대 10% (적립금 형태)
- 도서 특화, 국내 최고 수수료율

### 아마존 어소시에이트
- 가입: https://affiliate-program.amazon.com/
- 수수료: 1~10% (카테고리별)
- 영문 도서/해외 도구 링크에 활용

### AI 도구 제휴 프로그램
- **Cursor**: https://cursor.com/affiliate (자체 프로그램)
- **Notion**: 공식 제휴 프로그램 (Impact.com 통해)
- **Perplexity**: 추천 링크 프로그램
- **각종 AI SaaS**: 대부분 자체 어필리에이트/파트너 프로그램 운영

---

## 콘텐츠 추가 방법

### 새 뉴스(펄스) 추가
```
src/content/pulse/my-new-article.mdx
```

### 새 도서(북셀프) 추가
```
src/content/bookshelf/book-title.mdx
```

frontmatter의 `affiliateLinks`에 각 서점 링크를 추가하세요.

### 새 가이드(랩) 추가
```
src/content/lab/guide-slug.mdx
```

### 새 도구(레이더) 추가
```
src/content/radar/tool-name.mdx
```

### 새 분석(딥다이브) 추가
```
src/content/deepdive/analysis-slug.mdx
```

---

## 수익 극대화 팁

1. **도서 리뷰에 복수 서점 링크**: 쿠팡/YES24/알라딘을 모두 넣어 사용자 선택지 확대
2. **도구 리뷰에 어필리에이트 배너**: 사이드바와 본문 하단에 자연스럽게 배치
3. **뉴스레터 구독자 확보**: 뉴스레터에 주간 추천 도서/도구 포함 (반복 구매 유도)
4. **SEO 최적화**: 각 기사에 메타 태그, OG 이미지, 구조화 데이터 추가
5. **스폰서드 콘텐츠**: 딥다이브 섹션에 AI 회사 스폰서 기사 게재
