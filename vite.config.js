import { defineConfig } from 'vite';

export default defineConfig({
  base:"/reliability",
  server: {
    proxy: {
      '/upload': {
        target: 'http://localhost:5000', // Backend server
        changeOrigin: true,
      },
    },
  },
});
