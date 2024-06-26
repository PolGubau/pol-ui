<h1 align="center">
  Pol-ui
</h1>

<p align="center">
A complete UI solution for React projects, based on React, TypeScript, and tailwind.
  <br />
  <br />
  <a href="https://github.com/PolGubau/ui">Stars are welcome 😊</a>
</p>

## 🏎️ Using this package

1. Install the package with npm (or pnpm, bun, pnpm...)

```bash
npm i pol-ui
```

2. Import the components you want to use

```js
import { Button } from 'pol-ui'
```

3. Use them in your project

```jsx
<Button>Click me!</Button>
```

## 📚 Documentation

- `npm run docs`: Run Storybook documentation in dev mode
- `npm run build:docs`: Build Storybook documentation

## ✅ Testing

This package has unit and component tests configured with Jest

`npm run test`: Run unit tests with Jest and React Testing Library
`npm run test:watch`: Run unit tests on watch mode

## 🔦 Linting

- `npm run lint`: Run linter
- `npm run lint:fix`: Fix lint issues

## 🚀 CI and Publishing

This template comes with a GitHub Actions workflow to automatically publish on any push to `main` when the `package.json` version number differs from the latest on npm.
