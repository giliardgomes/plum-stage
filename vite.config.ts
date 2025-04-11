import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default defineConfig({
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./lib"),
        },
    },
    server: {
        port: 5174,
        host: true,
        open: true,
        proxy: {
            "^/VideoHub.*": {
                target: "http://localhost:5174",
                rewrite: () => "/index.html",
            },
        },
    },
    root: resolve(__dirname, "Demo"),
    preview: {
        port: 5174,
    },
})
