"use client";

import { useCallback, useEffect, useState } from "react";

import { safeResJson } from "../../helpers";

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  isCached: boolean;
  refetch: () => void;
}

// A generic fetch hook for API calls with caching, error handling, and refetch capability
function useFetch<T = unknown>(url: string, options?: RequestInit): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
    isCached: false,
    refetch: () => {
      /* do nothing */
    },
  });

  const fetchData = useCallback(
    async (ignoreCache = false) => {
      setState((prevState) => ({ ...prevState, isLoading: true }));

      try {
        let data: T;
        let isCached = false;
        const cache = sessionStorage.getItem(url);

        if (cache && !ignoreCache) {
          data = JSON.parse(cache) as T;
          isCached = true;
        } else {
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error(`Error: ${response.status.toString()}`);
          }
          const parsedData = (await safeResJson(response)) as T;
          data = parsedData;
          sessionStorage.setItem(url, JSON.stringify(data));
        }

        setState({
          data,
          isLoading: false,
          error: null,
          isCached,
          refetch: () => void fetchData(true),
        });
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          data: null,
          isLoading: false,
          error: error as Error,
        }));
      }
    },
    [url, options],
  );

  // Triggering the fetch operation when the URL or options change
  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return state;
}

export default useFetch;
