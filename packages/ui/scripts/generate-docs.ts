import { readFileSync, writeFileSync } from "node:fs";
import { basename, extname, join, resolve } from "node:path";
import { sync } from "glob";
import { type Config, parse } from "react-docgen";
import type { Documentation } from "react-docgen/dist/Documentation";

// Ruta de los componentes de tu proyecto
const dirname = resolve();
const componentsPath = join(dirname, "src/components");

// Opciones para react-docgen
const options: Config = {};

// Función para extraer la información de los componentes
const generateDocs = (): void => {
  // Buscar archivos .tsx dentro de los componentes, helpers y hooks
  const components = sync(`${componentsPath}/**/*.tsx`);

  // Filtrar los archivos para excluir los que estén en test, stories o spec
  const allFiles = [...components];
  const filteredFiles = allFiles.filter(
    (filePath) => !(filePath.includes("test") || filePath.includes("stories") || filePath.includes("spec")),
  );

  const apiData: Record<string, Documentation[]> = {};

  // Procesar cada archivo
  for (const filePath of filteredFiles) {
    const fileName = basename(filePath, extname(filePath));
    const fileCode = readFileSync(filePath, "utf-8");

    try {
      // Usamos react-docgen para extraer la información
      const doc = parse(fileCode, options);
      console.info("▶️ Parsing file", fileName);
      apiData[fileName] = doc;
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      console.error(`Error al procesar el archivo ${fileName}: ${error.message}`);
    }
  }

  // Escribir el JSON en el directorio public
  const apiJsonPath = join(dirname, "api", "api.json");
  writeFileSync(apiJsonPath, JSON.stringify(apiData, null, 2));

  console.info("🟢 Documentación generada correctamente en api.json");
};

// Ejecutar la generación de documentación
generateDocs();
