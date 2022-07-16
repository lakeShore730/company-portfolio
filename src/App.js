import "./App.css";
import Router from "./router/router";
import ContextProvider from "./contexts/ui-context";
import { useUiContext } from "./contexts/ui-context";
import { useEffect } from "react";
import useWindowSize from "./utils/use-window-size";

function RouterWrapper() {
  const { width } = useWindowSize();
  const { isMobileLayout, setIsMobileLayout } = useUiContext();

  useEffect(() => {
    if (!width) return;
    if (width < 1024) setIsMobileLayout(1);
    else setIsMobileLayout(0);
  }, [width]);

  if (isMobileLayout === -1) return <div />;
  return <Router />;
}

function App() {
  return (
    <div>
      <ContextProvider>
        <RouterWrapper />
      </ContextProvider>
    </div>
  );
}

export default App;
