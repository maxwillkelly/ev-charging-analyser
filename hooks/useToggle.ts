import { useCallback, useState } from "react";

// Example from UseHooks: https://usehooks.com/useToggle/
// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState: boolean = false): [boolean, any] => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState);
  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback((newState: boolean | undefined): void => {
    if (typeof newState === "boolean") setState(newState);
    else setState((state) => !state);
  }, []);
  return [state, toggle];
};

export default useToggle;
