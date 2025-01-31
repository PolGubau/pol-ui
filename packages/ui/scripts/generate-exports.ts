import {
	existsSync,
	readFileSync,
	readdirSync,
	statSync,
	writeFileSync,
} from "node:fs";
import { join, resolve } from "node:path";

// Ruta de la carpeta dist
const __dirname = resolve();
const distDir = join(__dirname, "dist");
// Lista de carpetas principales que quieres exportar
const foldersToExport = [
	"components",
	"hooks",
	"utils",
	"helpers",
	"i18n",
	"constants",
	"plugins",
	"providers",
	"types",
];

// Tipo para los exports
interface Exports {
	[key: string]: string;
}

// Función para generar los exports
const generateExports = (): Exports => {
	const exports: Exports = {
		".": "./dist/index.js",
		"./tailwind-plugin": "./dist/plugins/tailwind.css",
	};

	// Iterar sobre las carpetas principales
	for (const folder of foldersToExport) {
		const folderPath = join(distDir, folder);
		// export by folder
		exports[`./${folder}`] = `./dist/${folder}/index.js`;
		exports[`./${folder}/types`] = `./dist/${folder}/index.d.ts`;

		// Verificar si la carpeta existe
		if (existsSync(folderPath)) {
			// Obtener todas las subcarpetas
			const subfolders = readdirSync(folderPath).filter((subfolder) =>
				statSync(join(folderPath, subfolder)).isDirectory(),
			);

			// Iterar sobre las subcarpetas
			for (const subfolder of subfolders) {
				const indexJsPath = join(folderPath, subfolder, "index.js");
				const indexDtsPath = join(folderPath, subfolder, "index.d.ts");

				// Verificar si existe un index.js y/o index.d.ts en la subcarpeta
				if (existsSync(indexJsPath)) {
					// Exportar el archivo .js
					exports[`./${folder}/${subfolder}`] =
						`./dist/${folder}/${subfolder}/index.js`;
				}

				if (existsSync(indexDtsPath)) {
					// Exportar el archivo .d.ts
					exports[`./${folder}/${subfolder}/types`] =
						`./dist/${folder}/${subfolder}/index.d.ts`;
				}
			}
		}
	}

	return exports;
};

// Función para actualizar el package.json
const updatePackageJson = (): void => {
	const packageJsonPath = join(__dirname, "package.json");

	// Leer el package.json
	const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

	// Generar los nuevos exports
	const newExports = generateExports();

	// Actualizar los exports en el package.json
	packageJson.exports = newExports;

	// Escribir el archivo actualizado
	writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

	console.info("package.json actualizado con los nuevos exports");
};

// Llamar a la función para actualizar el package.json
updatePackageJson();
