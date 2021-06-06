import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);
  console.log("APP is running!");
  const toggleP = useCallback(() => {
    setShowP((prevState) => !prevState);
  }, []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
      <Button onClick={toggleP}>Click Me!</Button>
    </div>
  );
}

export default App;
