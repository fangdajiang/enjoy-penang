import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 使用相对路径，使得直接打开 HTML 文件时资源能够正确加载
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
