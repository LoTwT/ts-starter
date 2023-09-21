import { URL, fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"
import AutoImport from "unplugin-auto-import/vite"

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vitest"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
