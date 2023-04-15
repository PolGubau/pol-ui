import { useEffect, useState } from "react";

type AsyncState<T> = {
  status: "idle" | "pending" | "success" | "error";
  data?: T;
  error?: any;
};

type AsyncFn<T> = () => Promise<T>;

/**
 * A custom hook for handling asynchronous data fetching and rendering in React components.
 *
 * @param asyncFunction - The asynchronous function to be called to retrieve data.
 * @param immediate - Whether to call the function immediately on mount (default true).
 * @returns An array containing the current status, data, and error (if any) of the asynchronous call, as well as a `run` function that can be used to trigger the call manually.
 */
function useAsync<T>(
  asyncFunction: AsyncFn<T>,
  immediate = true
): [AsyncState<T>, () => Promise<void>] {
  const [state, setState] = useState<AsyncState<T>>({
    status: "idle",
    data: undefined,
    error: undefined,
  });

  useEffect(() => {
    if (!immediate) {
      return;
    }

    setState({ status: "pending", data: undefined, error: undefined });

    asyncFunction()
      .then((data) => {
        setState({ status: "success", data, error: undefined });
      })
      .catch((error) => {
        setState({ status: "error", data: undefined, error });
      });
  }, [asyncFunction, immediate]);

  const run = async () => {
    setState({ status: "pending", data: undefined, error: undefined });

    try {
      const data = await asyncFunction();
      setState({ status: "success", data, error: undefined });
    } catch (error) {
      setState({ status: "error", data: undefined, error });
    }
  };

  return [state, run];
}

export default useAsync;

/** 
 * @fileoverview This file contains the source code for the useAsync hook.
 * 
 * @see https://usehooks.com/useAsync/
 * @example
 * async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`https://whatever.com`);
  return response.json();
}

function User({ id }: { id: number }) {
  const [state, run] = useAsync(() => fetchUser(id), false);
  const { status, data: user, error } = state;
  ...
  
  * @author Pol Gubau Amores
    * @version 0.0.42
    * @since 0.0.42 
    * 
 */
