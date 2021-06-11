import React from "react";
import { Transition } from "react-transition-group";

import "./Modal.css";

const animationTimeouts = {
  enter: 400,
  exit: 1000,
};
const modal = (props) => {
  return (
    <Transition
      in={props.show}
      timeout={animationTimeouts}
      mountOnEnter
      unmountOnExit
    >
      {(state) => {
        const cssClasses = ["Modal", props.show ? "modal-show" : "modal-hide"];
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
