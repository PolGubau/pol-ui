import { useCallback, useState } from "react";

// Parameter is the boolean, with default "false" value
const useToggle = (initialState: boolean = false): [boolean, any] => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState);
  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
};

export default useToggle;

/**
 * @Example
function App() {
    // Call the hook which returns, current value and the toggler function
    const [isTextChanged, setIsTextChanged] = useToggle();
    return (
        <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
    );
}

@returns {boolean} - The current value of the boolean.
@returns {function} - The toggler function.


@author Pol Gubau Amores
@version 0.0.42
@since 0.0.42

 */
