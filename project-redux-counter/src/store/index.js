import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import counterSlice from "./counter-slice";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
