import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import singleSpa from 'vite-plugin-single-spa';

export default defineConfig({
  plugins: [
    react({
      reactRefreshHost: 'http://localhost:9000',
    }),
    singleSpa({
      type: 'mife',
      serverPort: 9002,
      spaEntryPoint: 'src/spa.tsx',
    }),
  ],
  server: {
    port: 9002,
  },
  preview: {
    port: 9002,
  },
});
