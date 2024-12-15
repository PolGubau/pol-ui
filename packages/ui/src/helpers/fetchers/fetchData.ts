import type { Method } from "../../types";
import { json } from "../handle-json";

interface FetchError extends Error {
  status: number;
}

function fetchError(message: string, status: number): FetchError {
  const error: Partial<FetchError> = new Error(message);
  error.status = status;
  return error as FetchError;
}

interface Options {
  method?: Method;
  body?: BodyInit | null;
  headers?: Record<string, string>;
}

const fetchData = async (url: string, options?: Options) => {
  try {
    const requestOptions: RequestInit = {
      method: options?.method ?? "GET",
      headers: options?.headers ?? {},
      body: json.stringify(options?.body),
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw fetchError(response.statusText, response.status);
    }

    const parsePromise = response.json();

    const data = (await parsePromise) as Promise<unknown>;
    const { headers } = response;
    const status = response.status;

    return { data, headers, status };
  } catch (err: unknown) {
    if (err instanceof fetchError) {
      throw err as FetchError;
    }
    throw fetchError("Network request failed", 0);
  }
};

const fetchers = {
  get: (url: string, options?: Options) => fetchData(url, { ...options, method: "GET" }),
  post: (url: string, options?: Options) => fetchData(url, { ...options, method: "POST" }),
  put: (url: string, options?: Options) => fetchData(url, { ...options, method: "PUT" }),
  delete: (url: string, options?: Options) => fetchData(url, { ...options, method: "DELETE" }),
  patch: (url: string, options?: Options) => fetchData(url, { ...options, method: "PATCH" }),
};

export { fetchers, fetchData };
