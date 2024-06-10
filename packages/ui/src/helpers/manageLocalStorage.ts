import { json } from "./handle-json"

// Function to get a value from localStorage
export function getLocalStorage(key: string, initialValue: unknown) {
  const value = localStorage.getItem(key)
  if (!value) {
    setToLocalStorage(key, initialValue)
    return initialValue
  }
  return json.saveParse(value)
}

// Function to set a value in localStorage
export function setToLocalStorage(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value))
}

// Function to remove a value from localStorage
export function removeFromLocalStorage(key: string): void {
  localStorage.removeItem(key)
}

export const getToken = (tokenType = "mesalvo.accessToken") =>
  localStorage.getItem(tokenType) ?? ""
