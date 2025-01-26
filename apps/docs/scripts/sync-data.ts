import fs from "node:fs";
import path from "node:path";

// URL del JSON que deseas descargar
const API_URL = "https://pol-ui.polgubau.com/api-summary.json";

// Ruta donde se guardará el archivo JSON
const OUTPUT_PATH = path.join(process.cwd(), "src", "data", "lib-data.json");

// Función principal
async function fetchAndSaveJSON(): Promise<void> {
	try {
		console.log("Realizando la solicitud HTTP...");
		const response = await fetch(API_URL);

		if (!response.ok) {
			throw new Error(`Error en la solicitud: ${response.statusText}`);
		}

		console.log("Convirtiendo la respuesta a JSON...");
		const jsonData = await response.json();

		console.log("Creando el directorio si no existe...");
		const dir = path.dirname(OUTPUT_PATH);
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
		}

		console.log("Guardando el archivo JSON...");
		fs.writeFileSync(OUTPUT_PATH, JSON.stringify(jsonData, null, 2), "utf-8");

		console.log("¡Archivo guardado con éxito!");
		console.log(`Ruta del archivo: ${OUTPUT_PATH}`);
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error:", error.message);
		} else {
			console.error("Error desconocido:", error);
		}
	}
}

// Ejecutar la función
fetchAndSaveJSON();
