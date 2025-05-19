import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/abu-yusuf-website/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});