import path from 'path';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import compression from 'vite-plugin-compression';

// ----------------------------------------------------------------------

const PORT = 3030;

export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
        dev: { logLevel: ['error'] },
      },
      overlay: {
        position: 'tl',
        initialIsOpen: false,
      },
    }),
    ...(process.env.VERCEL !== '1' ? [
      compression({
        verbose: false,
        disable: false,
        threshold: 10240,
        algorithm: 'brotli',
        ext: '.br',
      }),
      compression({
        verbose: false,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ] : []),
  ],
  resolve: {
    alias: [
      {
        find: /^src(.+)/,
        replacement: path.resolve(process.cwd(), 'src/$1'),
      },
    ],
    dedupe: ['react', 'react-dom', '@mui/material'],
  },
  server: { port: PORT, host: true },
  preview: { port: PORT, host: true },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@mui')) {
              return 'mui';
            }
            if (id.includes('framer-motion')) {
              return 'framer';
            }
            if (id.includes('react')) {
              return 'vendor';
            }
            if (id.includes('@iconify')) {
              return 'iconify';
            }
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@mui/material',
      'framer-motion',
      '@iconify/react',
    ],
  },
});