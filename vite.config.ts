import { resolve } from "path"
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react-swc"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), libInjectCss(), dts({ include: ["lib"], rollupTypes: true })],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./vitest.setup.ts",
    },
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            formats: ["es"],
        },
        rollupOptions: {
            external: ["react", "react/jsx-runtime"],
        },
    },
})
