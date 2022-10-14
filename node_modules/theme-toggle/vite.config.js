import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    polyfillModulePreload: true,
    lib: {
      entry: "src/index.js",
      name: "theme-toggle",
      fileName: "theme-toggle",
    },
    minify: "esbuild",
  },
});
