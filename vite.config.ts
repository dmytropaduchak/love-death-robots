import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {

    // lib: {
    //   entry: resolve(__dirname, './src/index.ts'),
    //   name: 'react-beautiful-timeline',
    //   fileName: (format) => `index.${format}.js`,
    // },
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'react-beautiful-timeline',
      fileName: (format) => `index.${format}.js`,
    },

    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts()],
});