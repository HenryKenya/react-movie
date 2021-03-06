// @flow
import { createStore, compose, applyMiddleware } from "redux";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import reducer from "./reducers";

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(immutableStateInvariantMiddleware(), thunk))
);

export default store;
