const redux = require("redux");

//Reducer function to perform mutations on the store
const counterReducer = (
  state = {
    counter: 0,
  },
  action
) => {
  return {
    counter: state.counter + 1,
  };
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
