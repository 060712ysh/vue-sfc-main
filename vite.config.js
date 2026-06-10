import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 1. 👈 把原本 import vueDevTools from 'vite-plugin-vue-devtools' 這行刪掉！

export default defineConfig({
  plugins: [
    vue(),
    // 2. 👈 把原本放在這裡的 vueDevTools() 也刪掉！
  ],
  base: '/vue-sfc-main/', // 👈 確保維持這個正確的 Repository 路徑
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})