import React from "react";
import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div onClick={props.onCloseModal} className={styles.backdrop}>
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
    </div>
  );
};

export default ErrorModal;
