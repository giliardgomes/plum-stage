// import { extname, relative, resolve } from "path"
// import { fileURLToPath } from "node:url"
// import { glob } from "glob"
// import { defineConfig } from "vitest/config"
// import { PluginOption } from "vite"
// import react from "@vitejs/plugin-react-swc"
// import { libInjectCss } from "vite-plugin-lib-inject-css"
// import dts from "vite-plugin-dts"
// import { visualizer } from "rollup-plugin-visualizer"

// // https://vitejs.dev/config/
// export default defineConfig({
//     css: {
//         modules: {
//             generateScopedName: "[name]__[local]___[hash:base64:5]",
//         },
//     },
//     resolve: {
//         alias: {
//             "@": resolve(__dirname, "./lib"),
//             "@test-utils": resolve(__dirname, "./src/test-utils"),
//         },
//     },
//     plugins: [
//         react(),
//         libInjectCss(),
//         dts({
//             include: ["lib"],
//             // Don't generate type declarations for non-exported files
//             exclude: ["lib/**/*.test.{ts,tsx}", "lib/**/*.stories.{ts,tsx}"],
//         }),
//     ],
//     test: {
//         globals: true,
//         environment: "jsdom",
//         setupFiles: "./vitest.setup.ts",
//     },
//     build: {
//         // In quorum-site, we exclude node_modules/ from babel-loader, so we need to ensure we output ES2015 code here
//         target: "es2015",
//         copyPublicDir: false,
//         lib: {
//             entry: resolve(__dirname, "lib/main.ts"),
//             formats: ["es"],
//         },
//         rollupOptions: {
//             external: ["react", "react-dom", "react/jsx-runtime"],
//             input: Object.fromEntries(
//                 glob
//                     .sync(
//                         "lib/**/*.{ts,tsx}",
//                         // Don't bundle tests or stories
//                         { ignore: ["lib/**/*.stories.{ts,tsx}", "lib/**/*.test.{ts,tsx}"] },
//                     )
//                     .map((file) => [
//                         // The name of the entry point
//                         // lib/nested/foo.ts becomes nested/foo
//                         relative("lib", file.slice(0, file.length - extname(file).length)),
//                         // The absolute path to the entry file
//                         // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
//                         fileURLToPath(new URL(file, import.meta.url)),
//                     ]),
//             ),
//             output: {
//                 assetFileNames: "assets/[name][extname]",
//                 entryFileNames: "[name].js",
//             },
//         },
//     },
// })

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
        host: true, // Add this to allow network access
        open: true  // Add this to open browser automatically
    },
    root: resolve(__dirname, 'Demo'), // Use absolute path
})
