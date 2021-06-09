import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { showCounter: state.showCounter, counter: state.counter + 1 };
    case "decrement":
      return { showCounter: state.showCounter, counter: state.counter - 1 };
    case "increase":
      return {
        showCounter: state.showCounter,
        counter: state.counter + action.value,
      };
    case "toggle":
      return { showCounter: !state.showCounter, counter: state.counter };
    default:
      return initialState;
  }
};

const store = createStore(reducer);

export default store;
