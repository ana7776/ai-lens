# ◈ AI렌즈 (AI Lens)

AI 도서 큐레이션, 뉴스 다이제스트, 도구 레이더, 실전 가이드를 제공하는 독립 AI 정보 허브.

## 기술 스택

- **프레임워크**: [Astro](https://astro.build/) (정적 사이트 생성)
- **콘텐츠**: MDX (Content Collections)
- **배포**: Cloudflare Pages
- **소스 관리**: GitHub

## 사이트 구조

```
섹션          | 설명                    | 수익 모델
─────────────|────────────────────────|──────────────
⚡ 펄스       | AI 뉴스 다이제스트       | 광고, 뉴스레터
📚 북셀프     | AI 도서 큐레이션         | 어필리에이트
🧪 랩         | 실전 가이드/튜토리얼     | 도구 어필리에이트
📡 레이더     | AI 도구/서비스 리뷰      | 어필리에이트
🔬 딥다이브   | 장문 심층 분석           | 스폰서드 콘텐츠
```

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버
npm run dev

# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 배포 (Cloudflare Pages)

1. GitHub에 push
2. Cloudflare Pages 대시보드에서 레포 연결
3. 빌드 설정:
   - **빌드 명령**: `npm run build`
   - **출력 디렉토리**: `dist`
   - **Node 버전**: 20+

## 어필리에이트 링크 설정

각 콘텐츠의 frontmatter에서 어필리에이트 링크를 관리합니다:

```yaml
affiliateLinks:
  - store: "coupang"
    url: "https://link.coupang.com/YOUR_LINK"
    price: 19800
```

지원 제휴 프로그램:
- **쿠팡 파트너스** (수수료 3~7%)
- **YES24 어필리에이트** (수수료 3%)
- **알라딘 TTB** (수수료 최대 10%)
- **아마존 어소시에이트** (수수료 1~10%)

## 라이선스

MIT
