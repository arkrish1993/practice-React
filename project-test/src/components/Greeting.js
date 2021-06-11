import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  return (
    <div>
      <Output>Hello world!</Output>
      {changedText ? (
        <Output>Howdy mate!</Output>
      ) : (
        <Output>Yassss queen!</Output>
      )}
      <button
        onClick={() => {
          setChangedText(true);
        }}
      >
        Toggle text
      </button>
    </div>
  );
};

export default Greeting;
