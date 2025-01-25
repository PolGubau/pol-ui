import { readFileSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
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
	const components = sync(`${componentsPath}/**/*.tsx`);

	// Filtrar componentes para excluir los que estén en test, stories o spec
	const filteredComponents = components.filter(
		(componentPath) =>
			!(
				componentPath.includes("test") ||
				componentPath.includes("stories") ||
				componentPath.includes("spec")
			),
	);

	const apiData: Record<string, Documentation[]> = {};

	for (const componentPath of filteredComponents) {
		const componentName = basename(componentPath, ".tsx");
		const componentCode = readFileSync(componentPath, "utf-8");

		try {
			// Usamos react-docgen para extraer la información
			const doc = parse(componentCode, options);
			console.info("▶️ Parsing component", componentName);
			apiData[componentName] = doc;
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} catch (error: any) {
			console.error(
				`Error al procesar el componente ${componentName}: ${error.message}`,
			);
		}
	}

	// Escribir el JSON en el directorio public
	const apiJsonPath = join(dirname, "public", "api.json");
	writeFileSync(apiJsonPath, JSON.stringify(apiData, null, 2));

	console.info("🟢 Documentación generada correctamente en api.json");
};

// Ejecutar la generación de documentación
generateDocs();
