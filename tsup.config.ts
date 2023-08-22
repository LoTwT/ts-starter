import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["esm", "cjs"],
  clean: true,
  target: "esnext",
  dts: true,
})
