# TuneAde Website

TuneAde 아카펠라 그룹 공식 웹사이트

## 개발 환경 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 배포

이 프로젝트는 Vercel에 배포할 수 있습니다.

### Vercel 배포 방법

1. [Vercel](https://vercel.com)에 가입/로그인
2. "New Project" 클릭
3. GitHub/GitLab/Bitbucket에서 저장소 연결 또는 직접 업로드
4. 프로젝트 설정:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. "Deploy" 클릭

### Netlify 배포 방법

1. [Netlify](https://netlify.com)에 가입/로그인
2. "Add new site" > "Import an existing project"
3. 저장소 연결 또는 드래그 앤 드롭으로 `dist` 폴더 업로드
4. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `dist`

