import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

// GitHub Pages 배포를 위한 base path 설정
// 리포지토리 이름에 맞게 수정하세요 (예: /oneclass-study-fe/)
const repositoryName = 'oneclass-study-fe'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        // 빌드 후 index.html을 404.html로 복사 (GitHub Pages SPA 라우팅 지원)
        if (process.env.NODE_ENV === 'production') {
          const distPath = join(__dirname, 'dist')
          copyFileSync(
            join(distPath, 'index.html'),
            join(distPath, '404.html')
          )
        }
      },
    },
  ],
  base: process.env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/',
})
