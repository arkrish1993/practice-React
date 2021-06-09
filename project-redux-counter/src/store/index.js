import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;

// import { createStore } from "redux";

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return { showCounter: state.showCounter, counter: state.counter + 1 };
//     case "decrement":
//       return { showCounter: state.showCounter, counter: state.counter - 1 };
//     case "increase":
//       return {
//         showCounter: state.showCounter,
//         counter: state.counter + action.value,
//       };
//     case "toggle":
//       return { showCounter: !state.showCounter, counter: state.counter };
//     default:
//       return initialState;
//   }
// };

// const store = createStore(reducer);

export default store;
