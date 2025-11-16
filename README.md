# Project Build Guide

## Tech Stack

This project is built using the following technologies:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Prerequisites

Make sure your system has Node.js and npm installed.

We recommend using nvm to install Node.js: [nvm Installation Guide](https://github.com/nvm-sh/nvm#installing-and-updating)

## Install Dependencies

```sh
npm install
```

## Development Server

Start the development server with hot reload and instant preview:

```sh
npm run dev
```

## Build Project

Build for production:

```sh
npm run build
```

## Preview Build

Preview the built project:

```sh
npm run preview
```

## Project Structure

```
src/
├── components/     # UI Components
├── pages/         # Page Components
├── hooks/         # Custom Hooks
├── lib/           # Utility Library
└── main.tsx       # Application Entry Point
```

## GitHub & GitHub Pages Deployment

- **1. GitHub 저장소 생성**
  - GitHub에서 새 저장소(예: `sky-ai-big-data-intelligence-center`)를 만들고 로컬 프로젝트 루트(`sky AI Big Data Intelligence Center`)에서 다음을 실행합니다:

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

- **2. Vite `base` 경로 설정**
  - GitHub Pages의 프로젝트 페이지(`https://<USERNAME>.github.io/<REPO>/`)로 배포할 때는 `vite.config.ts`에 `base`를 설정해야 합니다.
  - `defineConfig` 안에 다음을 참고해 `base`를 추가하고 `<YOUR_REPO>`를 실제 저장소 이름으로 교체하세요:

```ts
export default defineConfig(({ mode }) => {
  return {
    base: "/<YOUR_REPO>/",
    // ...existing config...
  };
});
```

- **3. GitHub Pages 설정**
  - 이 프로젝트에는 `.github/workflows/deploy.yml` GitHub Actions 워크플로가 포함되어 있습니다.
  - GitHub 저장소의 **Settings → Pages**에서 **Source**를 **GitHub Actions**로 선택합니다.
  - `main` 브랜치에 푸시하면 `Deploy to GitHub Pages` 워크플로가 실행되고, 완료 후 **Pages** 화면에 공개 URL이 표시됩니다.

