import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src', 
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true
  },
  build: {
    // GitHub Pages can serve the site from the repository's /docs folder on main.
    outDir: 'docs',
    emptyOutDir: true,
  },
});