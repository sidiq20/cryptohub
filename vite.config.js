import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(), // SVGR plugin correctly added here
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
