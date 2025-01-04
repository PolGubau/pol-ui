// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function clsx(...args: any[]): string {
  return (
    args
      // Aplana el array para manejar anidamientos
      .flat(Number.POSITIVE_INFINITY)

      // Filtra valores falsy como `false`, `0`, `null`, `undefined`, `NaN`, y `""`
      .filter(Boolean)

      .map((arg) => {
        if (typeof arg === "string" || typeof arg === "number") {
          // Convierte números a cadenas
          return String(arg);
        }
        if (typeof arg === "object") {
          return (
            Object.keys(arg)

              // Incluye claves cuyos valores sean truthy
              .filter((key) => arg[key])
              .join(" ")
          );
        }
        // Ignora funciones u otros tipos no soportados
        return "";
      })

      // Filtra resultados vacíos después del mapeo
      .filter(Boolean)

      // Une los valores en una cadena separada por espacios
      .join(" ")
  );
}
