import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const animationTimeouts = {
  enter: 400,
  exit: 1000,
};
const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTimeouts}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "modal-show",
        exit: "",
        exitActive: "modal-hide",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
