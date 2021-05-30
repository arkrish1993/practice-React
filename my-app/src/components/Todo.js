import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  var deleteHandler = () => {
    setModalIsOpen(true);
  };
  var closeHandler = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
        {modalIsOpen && <Modal onClose={closeHandler} />}
        {modalIsOpen && <Backdrop onClose={closeHandler} />}
      </div>
    </div>
  );
}

export default Todo;
