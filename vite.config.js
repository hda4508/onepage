// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 깃허브 레포 이름
  base: '/onepage/',
  // 🔥 빌드 결과를 dist가 아니라 docs 폴더로 내보내기
  build: {
    outDir: 'docs',
  },
})
