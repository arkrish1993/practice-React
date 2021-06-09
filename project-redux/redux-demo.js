const redux = require("redux");

//Reducer function to perform mutations on the store
const counterReducer = (
  state = {
    counter: 0,
  },
  action
) => {
  if (action.type === "increment") return { counter: state.counter + 1 };
  if (action.type === "decrement") return { counter: state.counter - 1 };
  return { counter: state.counter };
};
const store = redux.createStore(counterReducer);

//Subscriber function which would retrieve data from the store
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber);

//Dispatching an action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
