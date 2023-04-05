import { TbBook } from "react-icons/tb";
import Button from "./components/Button/Button";
import Group from "./components/Group/Group";
import Text from "./components/Text/Text";
import { TextInput } from "./components/Inputs";

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
      </Group>
    </div>
  );
}

export default App;
