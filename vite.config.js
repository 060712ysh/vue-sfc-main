import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
// vite.config.js
export default defineConfig({
  plugins: [vue()],
  base: '/vue-sfc-main/', // 👈 記得要改成 vue-sfc-main 喔！
})