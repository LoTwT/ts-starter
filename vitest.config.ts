import { defineConfig } from "vitest/config"
import AutoImport from "unplugin-auto-import/vite"
import { fileURLToPath, URL } from "url"

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vitest"],
    }),
  ],
  test: {
    includeSource: ["src/*"],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
