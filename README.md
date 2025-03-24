# 인프런 워밍업 클럽 3기 풀스택 3주차 과제 - MyReel

### 📌 프로젝트 개요

- 이 프로젝트는 **인프런 워밍업 클럽 3기 풀스택 3주차 과제**로 제출된 MyReel 앱입니다.

### ✨ 주요 기능

1. 영화 목록 불러오기 (Infinite Scroll)

- 영화 목록을 페이지 단위로 불러오며, Infinite Query를 적용하여 스크롤 내릴 때마다 데이터를 자동으로 로드

2. 영화 상세 페이지

- 영화 카드를 클릭하면 상세 페이지로 이동하여 영화에 대한 자세한 정보 열람 가능

3. 상세 페이지 내 좋아요 기능

- 각 영화의 상세 페이지에서 좋아요 버튼을 통해 영화 좋아요/취소할 수 있음

4. 영화 검색 기능

- Header내 검색창을 통해 영화 제목으로 관련 영화 목록을 검색할 수 있음
- 검색 결과 없을 경우, 좋아요 많은 영화 추천 리스트 제공

### 🛠️ 설치 방법

```bash
git clone https://github.com/mynolog/inflearn-warmup-3-3-my-reel.git
cd ./inflearn-warmup-3-3-my-reel
pnpm install
# .env.sample 참고하여 프로젝트 루트에 .env 생성
```

### ▶️ 실행 방법

```bash
pnpm run dev
```

### 🎥 데모 영상

#### 👉 [유튜브 링크](https://www.youtube.com/watch?v=o5BwgEixAbE)

[![유튜브 썸네일](https://img.youtube.com/vi/o5BwgEixAbE/0.jpg)](https://www.youtube.com/watch?v=o5BwgEixAbE)

### 🚀 배포

#### 👉 [배포 링크](https://myreel.mynolog.me/)

### 🧳 기술 스택

<p style="display: flex; gap: 10px;">
  <a href="https://nextjs.org/">
    <img src="https://skillicons.dev/icons?i=nextjs" alt="React" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" />
  </a>
  <a href="https://tanstack.com/query/v5/docs/framework/react/overview">
  <img
      src="https://go-skill-icons.vercel.app/api/icons?i=reactquery"
    />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://skillicons.dev/icons?i=tailwind" alt="TailwindCSS" />
  </a>
  <a href="https://supabase.com/">
    <img src="https://skillicons.dev/icons?i=supabase" alt="Supabase" />
  </a>
</p>

### 📊 ERD 다이어그램

![ERD 다이어그램](https://gxzwdcgjtorzehmxxqar.supabase.co/storage/v1/object/public/inflearn//myreel_erd.png)

- myreel_movies 테이블
  | **컬럼명** | **설명**
  |-----------------|-----------------------------|
  | `id` | 영화 아이디 |
  | `image_url` | 영화 이미지 URL |
  | `title` | 영화 제목 |
  | `overview` | 영화 개요 |
  | `vote_average` | TMDB 투표 평균치 |
  | `popularity` | TMDB 인기도 |
  | `release_date` | 영화 개봉일 |
  | `order_index` | 원본 CSV 정렬 순서 |
  | `slug` | 영화 slug (URL 파라미터 용도) |
  | `like_count` | 영화 좋아요 수 |

### 📂 폴더 구조

```
/src
 ├── app               # Next.js App Router 기반 페이지 & 레이아웃
 ├── components        # UI 컴포넌트
 │   ├── layout        # 페이지 레이아웃 컴포넌트 (page.tsx에서 사용)
 │   ├── common        # 공통 UI 컴포넌트
 ├── constants         # 프로젝트 상수
 ├── dto               # API 요청/응답 데이터를 정의하는 타입 또는 인터페이스 모음
 ├── hooks             # 커스텀 훅
 ├── providers         # Next.js 전역 프로바이더
 ├── stores            # 전역 상태 관리 스토어
 ├── types             # TypeScript 타입 정의
 ├── utils             # 유틸 함수 (파일명 변환, 시간 포맷 등)
```

### 🛠 API 엔드포인트

- `GET /api/movies` → 전체 영화 목록 조회
- `GET /api/movies/most-liked` → 좋아요 많은 순 상위 6개 영화 목록 조회
- `GET /api/movies/:slug` → 특정 영화 정보 조회
- `POST /api/movies/:slug/like` → 영화 좋아요 등록
- `POST /api/movies/:slug/unlike` → 영화 좋아요 취소

### 🎯 적용한 패턴

- `Container-Presentational Component 패턴`
  - Container Component
    - 상태 관리와 비즈니스 로직을 담당, 커스텀 훅으로 데이터 처리 담당
    - 예시) `MovieDetailContainer.tsx`, `MovieCardListContainer.tsx`
  - Presentational Component
    - UI를 렌더링하는 역할만 담당하며, 상태나 로직을 직접 처리하지 않고 props로 받아서 UI만 표시
    - 예시) `MovieDetail.tsx`, `MovieCardList.tsx`
  - 사용 이유
    - UI와 로직을 분리하여 컴포넌트 간 **재사용성**을 높이고, **유지보수**가 용이한 구조
    - 각 컴포넌트의 **책임**을 명확히 구분하여 **가독성** 향상

### ⚡ 트러블 슈팅

- [x] URL 파라미터로 UUID 사용 시 문제점

| 항목          | 내용                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **문제 상황** | 영화의 id를 URL 파라미터로 사용 시 가독성 저하 문제 발생                    |
| **원인**      | myreel_movies.id를 auto increment 대신 UUID 형태로 저장                     |
| **해결 방향** | URL 파라미터로 id가 아닌 별도의 slug를 사용하여 URL 가독성 문제 및 SEO 개선 |

- [x] 유저 식별 없이 클라이언트에서 좋아요 관리 시 문제점

| 항목          | 내용                                                                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **문제 상황** | 유저 식별 없이 **클라이언트에서 로컬스토리지**로 좋아요 상태를 관리하는 경우 발생할 수 있는 문제점                                                        |
| **원인**      | 서버에서 **유저 식별**이 불가능하고, **클라이언트**에서만 좋아요 상태를 관리하기 때문                                                                     |
| **해결 방향** | **로컬스토리지**로 좋아요 상태를 관리하며, **서버에서 좋아요 수만 업데이트**, Nextjs API는 `api/movies/:slug/like`, `api/movies/:slug/unlike` 별도로 관리 |
