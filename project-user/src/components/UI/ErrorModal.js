import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.error.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.error.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onCloseModal}>OK</Button>
      </footer>
    </Card>
  );
};

const Backdrop = (props) => (
  <div onClick={props.onCloseModal} className={styles.backdrop}></div>
);
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal error={props.error} onCloseModal={props.onCloseModal} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
