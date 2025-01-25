// import fs from "node:fs";

// // Definir tipos para las estructuras de datos que vamos a procesar
// interface TagContent {
// 	kind: string;
// 	text: string;
// }

// interface Node {
// 	name: string;
// 	kind: number;
// 	comment?: {
// 		blockTags?: { tag: string; content: TagContent[] }[];
// 	};
// 	children?: Node[];
// }

// interface Child {
// 	name: string;
// 	kind: string;
// 	description: string;
// 	tags: {
// 		name?: string;
// 		description?: string;
// 		example?: string;
// 		prop?: string;
// 		returns?: string;
// 	};
// 	children: Child[];
// }

// // Función para leer y procesar el archivo api2.json
// const processApiJson = (
// 	inputFilePath: string,
// 	outputFilePath: string,
// ): void => {
// 	// Leer el archivo JSON de entrada
// 	const apiData: { children: Node[] } = JSON.parse(
// 		fs.readFileSync(inputFilePath, "utf-8"),
// 	);

// 	// Mapa de valores de "kind" a su nombre
// 	const kindMap: Record<number, string> = {
// 		1: "file",
// 		8: "enum",
// 		16: "enum-value",
// 		32: "interface",
// 		64: "class",
// 		128: "method",
// 		256: "prop",
// 		512: "function",
// 	};

// 	// Función para extraer los tags de los comentarios
// 	const extractTags = (
// 		blockTags: { tag: string; content: TagContent[] }[] = [],
// 	) => {
// 		const tags: { [key: string]: string } = {};
// 		for (const tag of blockTags) {
// 			const tagName = tag.tag.toLowerCase(); // Convertir a minúsculas
// 			if (tag.content && tag.content.length > 0) {
// 				tags[tagName] = tag.content.map((content) => content.text).join(" ");
// 			}
// 		}
// 		return tags;
// 	};

// 	// Función para extraer información relevante de cada nodo
// 	const extractInformation = (node: Node): Child => {
// 		console.log(node);
// 		const info: Child = {
// 			name: node.name,
// 			kind: kindMap[node.kind] || "Desconocido", // Usamos el mapa para reemplazar el número por el nombre
// 			description: "No description available", // Valor por defecto
// 			tags: {},
// 			children: [],
// 		};

// 		// Extraer los comentarios y tags (si existen)
// 		if (node.comment) {
// 			const tags = extractTags(node.comment.blockTags);
// 			info.tags = tags;
// 			if (tags.description) {
// 				info.description = tags.description;
// 			}
// 		}

// 		// Si el nodo tiene hijos, procesarlos recursivamente
// 		if (node.children && node.children.length > 0) {
// 			info.children = node.children.map((child) => extractInformation(child));
// 		}

// 		return info;
// 	};

// 	// Extraer la información relevante del nodo raíz
// 	const processedData: Child[] = apiData.children.map((node) => {
// 		// Si es un enum, procesar sus valores
// 		if (node.kind === 8 && node.children) {
// 			for (const childNode of node.children) {
// 				// Procesar los comentarios de cada valor del enum
// 				if (childNode.comment) {
// 					const tags = extractTags(childNode.comment.blockTags);
// 					if (tags.description) {
// 						childNode.description = tags.description; // Asignar la descripción al valor del enum
// 					}
// 					if (tags.example) {
// 						childNode.tags.example = tags.example; // Asignar el ejemplo al valor del enum
// 					}
// 					if (tags.name) {
// 						childNode.tags.name = tags.name; // Asignar el nombre al valor del enum
// 					}
// 				}
// 			}
// 		}
// 		return extractInformation(node);
// 	});

// 	// Escribir los datos procesados en un archivo JSON de salida
// 	fs.writeFileSync(outputFilePath, JSON.stringify(processedData, null, 2));

// 	console.info("🟢 Información procesada y guardada en", outputFilePath);
// };

// // Llamada a la función para procesar el archivo api2.json y generar el nuevo archivo de salida
// const inputFilePath = "./public/api2.json"; // Ruta de entrada de api2.json
// const outputFilePath = "./public/processedApi.json"; // Ruta de salida del archivo procesado
// processApiJson(inputFilePath, outputFilePath);

import { readFile, writeFile } from "node:fs/promises";
import { transform } from "typedoc-better-json";

async function processApiJson() {
  // read the JSON file generated by typedoc
  const fileContent = await readFile("public/api2.json", "utf8");

  // parse it
  const fileData = JSON.parse(fileContent);

  // transform it
  const transformedData = transform(fileData);

  // save it in file
  await writeFile("public/api-summary.json", JSON.stringify(transformedData, null, 2));
}
processApiJson();
