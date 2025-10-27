# readidea - 건강음료 브랜드 웹사이트

readidea의 공식 웹사이트입니다. 현대적이고 미니멀한 디자인으로 제작되었습니다.

## 프로젝트 구조

```
readidea/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 파일
├── netlify.toml        # Netlify 설정 파일
├── _redirects          # Netlify 리다이렉트 규칙
└── README.md           # 프로젝트 설명
```

## 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 부드러운 스크롤 애니메이션
- ✅ 제품 소개 섹션
- ✅ 건강 효능 안내
- ✅ 회사 소개 (Vision & Mission)
- ✅ 카카오톡 오픈채팅 문의 시스템
- ✅ 고급스러운 미니멀 디자인

## Netlify 배포 방법

### 방법 1: Netlify CLI 사용

1. Netlify CLI 설치:
```bash
npm install -g netlify-cli
```

2. 배포:
```bash
cd /Users/ieungyu/readidea
netlify deploy --prod
```

### 방법 2: Netlify 웹사이트에서 드래그 앤 드롭

1. [Netlify](https://www.netlify.com/)에 로그인
2. "Add new site" → "Deploy manually" 클릭
3. 이 폴더를 드래그 앤 드롭

### 방법 3: Git 연동 (추천)

1. GitHub에 저장소 푸시
2. Netlify에서 "Import from Git" 선택
3. 저장소 연결
4. 자동 배포 완료!

## 커스터마이징

### 색상 변경
`styles.css` 파일의 `:root` 섹션에서 CSS 변수 수정:

```css
:root {
    --primary-color: #1a1a1a;
    --accent-color: #c9a961;
    /* ... */
}
```

### 연락처 정보 변경
`index.html` 파일에서 Email, Phone, Location 정보 수정

### 제품 추가
`index.html`의 `additionalProducts` 섹션에서 `display: none` 제거 후 제품 카드 추가

## 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 라이센스

© 2024 readidea. All rights reserved.

## 문의

카카오톡 오픈채팅: https://open.kakao.com/o/sKysmdZh
