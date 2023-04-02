import { TbBook } from "react-icons/tb";
import Button from "./components/Button/Button";
import Group from "./components/Group/Group";
import Text from "./components/Text/Text";
import Quote from "./components/Quote/Quote";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
      }}
    >
      <Group vertical fullSize center space="large">
        <Text size={1} weight="bold">
          Pol-ui
        </Text>
        <Group>
          <Button text="Discover UI " icon="arrow" />
          <Button text="Read docs" icon={<TbBook />} primary />
        </Group>
        <Quote>
          <Text size={3} weight="bold">
            Simple, easy to use and customizable.
          </Text>
          <Button text="Discover UI " icon="arrow" />
        </Quote>
      </Group>
    </div>
  );
}

export default App;
