import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'

import { peerDependencies } from './package.json'

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setupTests.ts',
        coverage: {
            enabled: true,
            provider: 'istanbul',
            reporter: ['text', 'json', 'html'],
            include: ['src/**/*.ts', 'src/**/*.tsx'],
            exclude: ['src/**/__docs__'],
        },
    },
    build: {
        lib: {
            entry: './src/index.ts', // Specifies the entry point for building the library.
            name: 'novakit', // Sets the name of the generated library.
            fileName: format => `index.${format}.js`, // Generates the output file name based on the format.
            formats: ['cjs', 'es'], // Specifies the output formats (CommonJS and ES modules).
        },
        rollupOptions: {
            external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
        },
        sourcemap: true, // Generates source maps for debugging.
        emptyOutDir: true, // Clears the output directory before building.
    },
    plugins: [dts()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
})
