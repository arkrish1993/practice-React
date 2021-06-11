import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  return (
    <div>
      <p>Hello world!</p>
      {changedText ? <p>Howdy mate!</p> : <p>Yassss queen!</p>}
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
