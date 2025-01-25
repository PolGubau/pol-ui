import { readFileSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { sync } from "glob";
import { parse } from "react-docgen-typescript";

// Ruta de los componentes de tu proyecto

const dirname = resolve();
const componentsPath = join(dirname, "src/components");
const options = {
	savePropValueAsString: true,
};
// Función para extraer la información de los componentes
const generateDocs = () => {
	const components = sync(`${componentsPath}/**/*.tsx`);
	const filteredComponents = components.filter(
		(componentPath) =>
			!(
				componentPath.includes("test") ||
				componentPath.includes("stories") ||
				componentPath.includes("spec")
			),
	);

	const apiData = {};

	for (const componentPath of filteredComponents) {
		const componentName = basename(componentPath, ".tsx");
		const componentCode = readFileSync(componentPath, "utf-8");

		try {
			// Usamos react-docgen para extraer la info
			const doc = parse(componentCode, options);
			console.info("▶️ Parsing component", componentName);
			apiData[componentName] = doc;
		} catch (error) {
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
