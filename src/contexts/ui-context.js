import { createContext, useContext, useMemo, useReducer } from "react";

const initialState = {
  isMobileLayout: -1, // This is initial data which means data has not bee updated, 0 for false and 1 for true.
};

export const UiContext = createContext(undefined);

// Function to access context data
export const useUiContext = () => {
  const context = useContext(UiContext);
  if (!context)
    throw new Error(`UI context must be used within a UI context provide`);
  return context;
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_IS_MOBILE_LAYOUT":
      return {
        ...state,
        isMobileLayout: action.data,
        windowSize: { width: action.width, height: action.width },
      };
  }
}

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to update value
  const setIsMobileLayout = (data) => {
    dispatch({ type: "SET_IS_MOBILE_LAYOUT", data });
  };

  const value = useMemo(
    () => ({
      ...state,
      setIsMobileLayout,
    }),
    [state]
  );

  return <UiContext.Provider value={value} {...props} />;
};

export default ContextProvider;
