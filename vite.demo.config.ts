import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { resolve } from "path"

export default defineConfig({
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
    },
    root: resolve(__dirname, "Demo"),
    assetsInclude: ["**/*.html"],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "Demo/index.html"),
            },
        },
    },
})
