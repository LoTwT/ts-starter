import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["./src/index.ts"],
  format: "esm",
  target: "esnext",
  clean: true,
  cjsInterop: true,
  dts: true,
  splitting: true,
})
