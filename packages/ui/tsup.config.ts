import { defineConfig } from "tsup";

export default defineConfig({
  minify: true,
  target: "es2018",
  external: ["react"],
  outDir: "lib",
  sourcemap: true,
  dts: true,
  format: ["esm"],
  injectStyle: true,
});
