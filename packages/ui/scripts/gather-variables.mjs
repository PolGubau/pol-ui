import fs from "node:fs";
import path, { resolve } from "node:path";

const __dirname = resolve();
// Ruta al directorio donde están los archivos CSS
const animationsDir = path.join(__dirname, "src/plugins/styles/animations");
const apiDir = path.join(__dirname, "api");
const animationsListFile = path.join(__dirname, "src/plugins/css-variables.ts");

// Función para extraer las variables CSS de un archivo
const extractCssVariables = (filePath) => {
  const content = fs.readFileSync(filePath, "utf-8");
  const regex = /--([a-zA-Z0-9-_]+):/g;
  const variables = [];
  let match;

  // Buscar todas las coincidencias de las variables CSS
  // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
  while ((match = regex.exec(content)) !== null) {
    variables.push(match[1]);
  }

  return variables;
};

// Recopilar las variables de todos los archivos CSS
const gatherVariables = () => {
  const allVariables = new Set();

  // Leer el contenido del directorio
  const files = fs.readdirSync(animationsDir);

  // Recorrer cada archivo CSS en el directorio
  // files.forEach((file) => {
  for (const file of files) {
    if (file.endsWith(".css")) {
      const filePath = path.join(animationsDir, file);
      const variables = extractCssVariables(filePath);

      // Agregar las variables al conjunto (Set evita duplicados)
      for (const variable of variables) {
        allVariables.add(variable);
      }
    }
  }

  // Convertir el Set a un array y ordenar las variables
  return Array.from(allVariables).sort();
};

// Obtener todas las variables y mostrarlas
const variables = gatherVariables();
console.info("Variables encontradas:", variables);

// guardar las variables como un json en apiDir
fs.writeFileSync(path.join(apiDir, "css-variables.json"), JSON.stringify(variables, null, 2));

// crear un archivo typescript animationsListFile (generar el archivo)
// - crear un tipo con las variables en un archivo typescript animationsListFile
// - crea una constante con las variables en un archivo typescript animationsListFile
const typeFileContent = `// Este archivo fue generado automáticamente por gather-variables.mjs
export type CssVariable = ${variables.map((variable) => `"${variable}"`).join(" | ")};

export const cssVariables: CssVariable[] = ${JSON.stringify(variables, null, 2)};
`;
fs.writeFileSync(animationsListFile, typeFileContent);
