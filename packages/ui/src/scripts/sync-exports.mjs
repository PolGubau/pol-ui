import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, extname, join } from "node:path";

const distDir = join(process.cwd(), "dist");
const packageJsonPath = join(process.cwd(), "package.json");
const desiredFilesRegex = /\.(js|ts|tsx)$/;

// Lee package.json
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

const exportsMap = {
  "./package.json": "./package.json",
  ".": {
    import: "./dist/index.js",
    types: "./dist/index.d.ts",
  },
};

// Función para generar las exportaciones dinámicamente
const generateExports = (dir, prefix = "") => {
  const files = readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const filePath = join(dir, file.name);
    const exportPath = `./${prefix}${basename(file.name, extname(file.name))}`;

    if (file.isDirectory()) {
      generateExports(filePath, `${prefix}${file.name}/`);
    } else if (file.isFile() && desiredFilesRegex.test(file.name)) {
      exportsMap[exportPath] = {
        import: `./dist/${prefix}${file.name}`,
        types: `./dist/${prefix}${basename(file.name, extname(file.name))}.d.ts`,
      };
    }
  }
};

// Generar exportaciones desde dist/
generateExports(distDir);

// Escribir el nuevo package.json con los exports generados
packageJson.exports = exportsMap;
writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.info("✅ Exports generados en package.json");
