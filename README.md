# AI렌즈 Work

혼자 일하는 사람이 AI로 업무 문서와 콘텐츠를 처리할 때, 무엇을 맡기고 무엇을 사람이 확인해야 하는지 안내하는 한국어 실전 가이드 사이트입니다. 넓은 AI 뉴스·도구 소개보다 작업 설계, 검수, 개인정보·권리 확인이라는 좁은 문제에 집중합니다.

## 사이트 구조
- **처음 시작하기**: 작업 정의·입력 범위·결과 검수의 기본 순서
- **AI 업무**: 회의·문서·이메일·리서치 작업 흐름과 확인 기준
- **콘텐츠 제작**: 글·이미지·영상·음악 아이디어의 기획과 권리 검수
- **통합 워크플로우**: 기획부터 사람의 최종 승인까지 이어지는 운영 과정
- **운영 안내**: 소개, 편집 원칙, 문의, 개인정보처리방침

## 글 추가 방법
- 가이드는 `src/content/guides/{work|create|workflow}/슬러그.md`에 마크다운으로 작성합니다.
- 주소는 파일 위치 그대로 `/work/슬러그/`가 됩니다. 목록·홈의 최근 글·RSS·사이트맵은 자동 반영됩니다.
- 앞부분(frontmatter)에 title, description, section, label, order, published, updated, summary(3줄), related(2개 이상)를 채웁니다. 형식이 틀리면 빌드가 멈춰서 실수를 막아 줍니다.

## 원칙
- 사이트의 수익화 목표는 Google AdSense만이며, 제휴 링크·상품 유도·협찬 콘텐츠를 사용하지 않습니다.
- 운영자가 확인하지 않은 경험·성과·도구 기능을 사실처럼 쓰지 않습니다.
- AI 초안은 사람의 사실·출처·권리·개인정보 검토 후 발행합니다.
- 민감한 자료를 외부 AI에 입력하기 전에 조직 규칙과 서비스 조건을 확인합니다.
- AdSense 광고 코드는 아직 활성화하지 않았으며, 승인 전 광고·제휴 추적을 넣지 않습니다.

## 개발
```sh
npm install
npm run dev
npm run build
npm run preview
```

## Cloudflare Pages
- 저장소: `ana7776/ai-lens`
- 프로덕션 브랜치: `main`
- 빌드 명령: `npm run build`
- 출력 폴더: `dist`
- Node.js: 20 이상 권장
- 사용자 도메인: `https://ailenswork.com`

Cloudflare Pages 프로젝트에 GitHub 저장소를 연결하면 `main` 변경을 빌드할 수 있습니다. 실제 배포 및 도메인 활성화 전에는 Pages 프로젝트, DNS와 HTTPS를 확인합니다.

## AdSense 코드 연결
Cloudflare Pages > 설정 > 환경 변수에 `PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX`(본인 게시자 ID)를 추가하고 다시 배포하면 모든 페이지 head에 AdSense 코드와 계정 메타 태그가 들어갑니다. 승인 후에는 `public/ads.txt`에 `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`을 넣어 배포합니다.
