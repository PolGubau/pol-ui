<h1 align="center">
  Pol's UI
</h1>

<p align="center">
A complete UI solution for React projects, based on <a href="https://storybook.js.org/">Storybook</a> and <a href="https://vitejs.dev/">Vite</a>.
  <br />
  <br />
  <a href="https://github.com/PolGubau/ui">Stars are welcome 😊</a>
</p>

## 🏎️ Using this package

1. Install the package

```bash
npm install pol-/ui
```

2. Import the components you want to use

```js
import { Button } from "pol-ui";
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

### Future improvements

0. **General Components:**

   - ✅ IconButton
   - ✅ Button
   - ✅ Icon
   - ✅ (Text) Typography

1. **Input Components:**
   - ✅ Switch
   - ✅ Field (Input and TextArea)
   - ✅ Checkbox
   - ✅ Radio
2. **Select Components:**
   - ✅ Menu
   - ✅ Dropdown
   - ✅ MultiSelect
   - ✅ Autocomplete
3. **Data Display Components:**
   - ✅ Avatar
   - ✅ Badge
   - ✅ Tooltip
   - ✅ Progress Bar
   - ✅ Loaders (Spinner, Bars, Dots, Pulse)
   - 🦺 Divider
4. **Layout Components:**
   - Grid System
   - Card
   - Accordion
   - Tabs
   - Pagination
5. **Navigation Components:**
   - Navbar
   - Sidebar
   - Breadcrumbs
   - Menu
   - Stepper
6. **Form Components:**
   - Form
   - FormValidation
   - Date Picker
   - Time Picker
7. **Feedback Components:**
   - Alert
   - Snackbar
   - Notification
   - ✅ Toast
   - ✅ Modal
8. **Charts and Data Visualization Components:**
   - Bar Chart
   - Line Chart
   - Pie Chart
   - Data Table
9. **Media Components:**
   - ✅ Image
   - Video
   - Audio Player
10. **Overlay Components:**

- ✅ Wrapper
- Tooltip
- Popover

11. **Animation Components:**
    - Animations (for providing pre-designed animation effects)
12. **Utilities:**
    - Theme Provider
    - Responsive Utilities (for handling different screen sizes)
    - ✅ CSS Reset or Normalize (for consistent styling)
