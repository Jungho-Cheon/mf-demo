# Micro Frontend Demo

마이크로 프론트엔드 아키텍처를 구현한 데모 프로젝트입니다.

## 기술 스택

- Node.js (v22.0.0+)
- pnpm (v8.9.0)
- React
- Vue 2.7
- TypeScript
- Vite
- Turborepo
- Commitizen
- Husky
- Lint Staged

## 프로젝트 구조

```
.
├── apps/
│   ├── react-app1/        # React 기반 마이크로 프론트엔드 앱
│   ├── react-app2/        # React 기반 마이크로 프론트엔드 앱
│   ├── vue-app1/          # Vue 기반 마이크로 프론트엔드 앱
│   ├── vue-app2/          # Vue 기반 마이크로 프론트엔드 앱
│   └── root-config/       # 마이크로 프론트엔드 루트 설정
├── packages/
│   ├── prettier-config/   # 공유 Prettier 설정
│   ├── tsconfig/         # 공유 TypeScript 설정
│   └── tailwind-config/  # 공유 Tailwind 설정
└── shared/
    ├── api/              # 공유 API 모듈
    ├── design-system-react/ # React 디자인 시스템
    ├── design-system-vue/  # Vue 디자인 시스템
    ├── query/            # 공유 쿼리 모듈
    └── store/            # 공유 상태 관리 모듈
```

## 시작하기

### 사전 요구사항

- Node.js v22.0.0 이상
- pnpm v8.9.0 이상

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

### 빌드

```bash
pnpm build
```

## 주요 기능

- 마이크로 프론트엔드 아키텍처
- React와 Vue 프레임워크 통합
- 공유 디자인 시스템
- 모노레포 구조
- TypeScript 기반 타입 안정성
- 최신 개발 도구 통합 (ESLint, Prettier)

## 프로젝트 구성

### 앱

- **react-app1, react-app2**: React 기반 마이크로 프론트엔드 애플리케이션
- **vue-app1, vue-app2**: Vue 기반 마이크로 프론트엔드 애플리케이션
- **root-config**: 마이크로 프론트엔드 설정 및 라우팅 관리

### 공유 모듈

- **api**: 공통 API 인터페이스
- **design-system**: React/Vue 공유 디자인 시스템
- **query**: 데이터 쿼리 관리
- **store**: 상태 관리

## 개발 가이드

### 커밋 컨벤션

이 프로젝트는 Conventional Commits 규칙을 따르며, Commitizen을 사용하여 일관된 커밋 메시지를 작성합니다.

커밋 시에는 다음 명령어를 사용하세요:

```bash
pnpm commit
```

커밋 타입:

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor: 코드 리팩토링
- perf: 성능 개선
- test: 테스트 추가, 테스트 리팩토링
- chore: 빌드 업무 수정, 패키지 매니저 수정
- ci: CI 설정 변경

### 코드 스타일

프로젝트는 ESLint와 Prettier를 사용하여 일관된 코드 스타일을 유지합니다.
커밋 전 자동으로 lint-staged를 통해 코드 스타일이 검사되고 수정됩니다.

### TypeScript

모든 코드는 TypeScript로 작성되며, 공유 설정을 사용합니다.

### 빌드 및 개발

Turborepo를 사용하여 빌드 및 개발 프로세스를 최적화합니다.
