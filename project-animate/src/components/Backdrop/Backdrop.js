import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const cssClasses = [
    "Backdrop",
    props.show ? "backdrop-show" : "backdrop-hide",
  ];
  return <div onClick={props.closed} className={cssClasses.join(" ")}></div>;
};

export default backdrop;
