# Turborepo pnpm 모노레포 스타터

이 프로젝트는 pnpm과 Turborepo를 사용한 모노레포 스타터입니다.

## 프로젝트 구조

```
.
├── apps/
│   └── # 애플리케이션 프로젝트들
├── packages/
│   └── # 공유 패키지들
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build

# 린트 실행
pnpm lint
```

## 사용된 기술

- [pnpm](https://pnpm.io)
- [Turborepo](https://turborepo.org) 