import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포를 위한 base path 설정
// 리포지토리 이름에 맞게 수정하세요 (예: /onclass-study-fe/)
const repositoryName = 'onclass-study-fe'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/',
})
