# GitHub + Cloudflare Pages 배포 및 도메인 연결

## 저장소와 빌드

- GitHub 저장소: ana7776/ai-lens
- 프로덕션 브랜치: main
- 빌드 명령: npm run build
- 출력 디렉터리: dist
- Node.js: 20 이상

현재 로컬 프로젝트의 origin은 위 GitHub 저장소입니다. 실제 공개 배포는 로컬 빌드와 링크 검수를 마친 뒤 운영자 확인을 받고 진행합니다.

## ailenswork.com 연결 전 확인

RDAP 조회 기준 등록 대행자는 Gabia 네임서버(NS.GABIA.CO.KR, NS.GABIA.NET, NS1.GABIA.CO.KR)를 사용 중입니다. DNS가 정상적으로 응답하지 않는 상태일 수 있으므로 Cloudflare에 추가하기 전에 도메인 등록 대행사와 현재 DNS 레코드를 확인합니다.

1. Cloudflare 계정에 로그인하고 ailenswork.com을 사이트로 추가합니다.
2. Cloudflare가 할당한 네임서버를 확인합니다.
3. 도메인 등록 대행사(Gabia) DNS 관리에서 기존 MX, TXT, CNAME 등 필요한 레코드를 기록합니다. 메일을 설정했거나 다른 서비스가 연결돼 있으면 해당 레코드가 누락되지 않도록 합니다.
4. 네임서버를 Cloudflare로 바꾸기로 결정한 뒤에만 Gabia에서 Cloudflare가 안내한 네임서버를 입력합니다.
5. Cloudflare Pages 프로젝트가 ana7776/ai-lens 저장소와 main 브랜치에 연결되어 있는지 확인합니다.
6. Pages의 Custom domains에서 ailenswork.com을 추가하고, 화면에서 요구하는 DNS 레코드가 활성 상태인지 확인합니다.
7. 배포가 완료되면 https://ailenswork.com, www 사용 여부, HTTPS 인증서, 기존 pages.dev 주소의 동작, sitemap.xml, robots.txt를 확인합니다.

네임서버 변경은 DNS 설정에 영향을 주므로, 이전 DNS 레코드를 확인하지 않고 임의로 바꾸지 않습니다. Cloudflare 대시보드에서 사용자 인증이 필요한 단계는 계정 소유자가 직접 로그인한 뒤 진행합니다. 비밀번호나 API 토큰을 채팅·코드·저장소에 입력하지 않습니다.

## 콘텐츠·광고 원칙

사이트의 수익화 목표는 Google AdSense 광고 게재 승인과 광고 운영만입니다. 제휴 링크, 상품 유도, 스폰서드 콘텐츠, 다른 광고 네트워크를 두지 않습니다. AI 초안은 사람이 사실·출처·저작권·개인정보를 검수한 뒤 공개하며, 애드센스 승인이나 수익을 보장하지 않습니다.

## 되돌리기

코드 변경은 이전 Git 커밋으로 되돌릴 수 있습니다. 도메인 DNS를 바꾼 경우 변경 전 레코드와 네임서버를 기록해 두고, 서비스 장애 시 등록 대행사에서 기존 네임서버와 레코드로 복구합니다.
