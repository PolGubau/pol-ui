# Cookie Utility Functions

Pol-ui provides utility functions for managing cookies in a web application, implemented in TypeScript.

## Installation

To use these utility functions in your project, you can install the package via npm:

```bash
npm install pol-ui
```

## Usage

Import the utility functions in your TypeScript/JavaScript code as needed:

```tsx
import { setCookie, getCookie, deleteCookie } from 'pol-ui'

// Example usage
setCookie('myCookie', 'cookieValue', 7)
const value = getCookie('myCookie')
console.info(value)
deleteCookie('myCookie')
```

## **API**

### **setCookie(name: string, value: string, days?: number): void**

Sets a cookie with the specified name, value, and optional expiration in days.

- **`name`**: The name of the cookie.
- **`value`**: The value to be stored in the cookie.
- **`days`** (optional): Number of days until the cookie expires.

### **getCookie(name: string): string | null**

Retrieves the value of a cookie by its name.

- **`name`**: The name of the cookie to retrieve.
- Returns the value of the cookie if found, or **`null`** if not found.

### **deleteCookie(name: string): void**

Deletes a cookie by setting its expiration date to the past.

- **`name`**: The name of the cookie to delete.
