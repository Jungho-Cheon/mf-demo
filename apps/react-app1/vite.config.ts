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
      serverPort: 9001,
      spaEntryPoint: 'src/spa.tsx',
    }),
  ],
});
