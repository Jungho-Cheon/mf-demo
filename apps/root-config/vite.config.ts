import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import react from '@vitejs/plugin-react';
import singleSpa from 'vite-plugin-single-spa';

export default defineConfig({
  plugins: [
    vue(),
    react(),
    singleSpa({
      type: 'root',
      imo: '4.2.0',
    }),
  ],
  server: {
    port: 9000,
  },
  preview: {
    port: 9000,
  },
});
