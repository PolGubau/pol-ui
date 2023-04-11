# **Pol-ui**

Pol-ui package is a collection of reusable React components that can be easily installed in other websites. It's currently in beta and is being developed by Pol Gubau (**[https://github.com/polgubau](https://github.com/polgubau)**). In a few days, it will also have a website.

## **Installation**

To install the package, simply run the following command:

```
perl
npm install pol-ui

```

## **Usage**

To use the package:

1. Surround your <App/> with the <PolUiRoot /> component to acces themes and styles.
2. Import the components you need and render them in your React application:

```
jsx
import React from 'react';
import { Button, Text, Group} from 'pol-ui';

const MyComponent = () => {
  return (
    <Group center vertical>
      <Text size={1} > Hello world </Text>
      <Button>Submit</Button>
    </Group>
  );
};

export default MyComponent;

```

The package is built with styled-components, React, and TypeScript, making it easy to customize and use in any React project.

## **Documentation**

For detailed documentation on each component and its props, please visit our **[website](https://github.com/PolGubau/pol-ui)**. As mentioned earlier, the website is currently under development and will be available in a few days.

## **Contributing**

We welcome contributions from the community! If you'd like to contribute to the project, please submit a pull request or open an issue on our **[GitHub repository](https://github.com/PolGubau/pol-ui)**.

## **License**

This package is licensed under the MIT license. See the **[LICENSE](https://spdx.org/licenses/MIT.html)** file for more information.
