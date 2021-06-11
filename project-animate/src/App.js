import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() => {
            this.setState((prevState) => {
              return { showBlock: !prevState.showBlock };
            });
          }}
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                height: 100,
                width: 100,
                margin: "auto",
                transition: "opacity 300ms ease-out",
                opacity: state === "exiting" || state === "entering" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>
        {this.state.modalIsOpen && (
          <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        )}
        {this.state.modalIsOpen && (
          <Backdrop show={this.state.modalIsOpen} closed={this.closeModal} />
        )}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
