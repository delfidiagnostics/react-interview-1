/// <reference types="vitest" />

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/

export default defineConfig({
    envPrefix: 'APP_',
    plugins: [
        react(),
        // checker({
        //   typescript: true,
        //   eslint: {
        //     lintCommand: 'eslint "./src/**/*.{ts,tsx}"', // for example, lint .ts & .tsx
        //   },
        // }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/test/setup.ts'],
        reporters: ['default'],
        coverage: {
            lines: 80,
            branches: 80,
            statements: 80,
            functions: 75
        }
    },
});
