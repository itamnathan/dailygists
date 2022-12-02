import { defineConfig, splitVendorChunkPlugin } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
            publicDirectory: '../'
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        splitVendorChunkPlugin(),
        viteCompression(),
    ],
    ssr: {
        noExternal: ['@inertiajs/server'],
    }, 
    build: {
        manifest: false,
        outDir: '../build',
        emptyOutDir: false,
        minify: true,
    },
});
