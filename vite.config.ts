import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 使用相对路径，使得直接打开 HTML 文件时资源能够正确加载
  publicDir: resolve(__dirname, 'public'), // 确保公共目录正确加载
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // 确保 sourcemap 被生成，帮助调试
    sourcemap: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
