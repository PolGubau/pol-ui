import fs from "node:fs";

// Definir tipos para las estructuras de datos que vamos a procesar
interface Source {
	file: string;
	line: number;
	url: string;
}

interface Child {
	name: string;
	kind: string;
	description: string;
	children: Child[];
	sources: Source[];
}

interface Node {
	name: string;
	kind: number;
	comment?: {
		blockTags?: { tag: string; content: { kind: string; text: string }[] }[];
	};
	sources?: { fileName: string; line: number; url: string }[];
	children?: Node[];
}

// Función para leer y procesar el archivo api2.json
const processApiJson = (
	inputFilePath: string,
	outputFilePath: string,
): void => {
	// Leer el archivo JSON de entrada
	const apiData: { children: Node[] } = JSON.parse(
		fs.readFileSync(inputFilePath, "utf-8"),
	);

	// Mapa de valores de "kind" a su nombre
	const kindMap: Record<number, string> = {
		1: "file",
		8: "enum",
		16: "enum value",
		32: "interface",
		64: "class",
		128: "method",
		256: "prop",
		512: "function",
	};

	// Función para extraer información relevante de cada nodo
	const extractInformation = (node: Node): Child => {
		const info: Child = {
			name: node.name,
			kind: kindMap[node.kind] || "Desconocido", // Usamos el mapa para reemplazar el número por el nombre
			description: "",
			children: [],
			sources: [],
		};

		// Extraer el comentario de descripción (si existe)
		if (node.comment) {
			const descriptionTag = node.comment.blockTags?.find(
				(tag) => tag.tag === "@description",
			);
			if (descriptionTag) {
				info.description = descriptionTag.content
					.map((content) => content.text)
					.join(" ");
			}
		}

		// Extraer los archivos fuente y las líneas
		if (node.sources && node.sources.length > 0) {
			info.sources = node.sources.map((source) => ({
				file: source.fileName,
				line: source.line,
				url: source.url,
			}));
		}

		// Si el nodo tiene hijos, procesarlos recursivamente
		if (node.children && node.children.length > 0) {
			info.children = node.children.map((child) => extractInformation(child));
		}

		return info;
	};

	// Extraer la información relevante del nodo raíz
	const processedData: Child[] = apiData.children.map((node) =>
		extractInformation(node),
	);

	// Escribir los datos procesados en un archivo JSON de salida
	fs.writeFileSync(outputFilePath, JSON.stringify(processedData, null, 2));

	console.info("🟢 Información procesada y guardada en", outputFilePath);
};

// Llamada a la función para procesar el archivo api2.json y generar el nuevo archivo de salida
const inputFilePath = "./public/api2.json"; // Ruta de entrada de api2.json
const outputFilePath = "./public/processedApi.json"; // Ruta de salida del archivo procesado
processApiJson(inputFilePath, outputFilePath);
