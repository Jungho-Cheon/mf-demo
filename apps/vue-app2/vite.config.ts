import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import singleSpa from 'vite-plugin-single-spa';

export default defineConfig({
  plugins: [
    vue(),
    singleSpa({
      type: 'mife',
      serverPort: 9004,
    }),
  ],
  server: {
    port: 9004,
  },
  preview: {
    port: 9004,
  },
}); 