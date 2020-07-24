import { createStore, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import reducer from "./reducers";

const store = createStore(
  reducer,
  applyMiddleware(reduxImmutableStateInvariant())
);

export default store;
