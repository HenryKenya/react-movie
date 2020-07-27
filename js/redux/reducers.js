// @flow
import { combineReducers } from "redux";
import { SET_SEARCH_TERM, ADD_API_DATA } from "./actions";

const searchTerm = (state = "", action: Action) =>
  action.type === SET_SEARCH_TERM ? action.payload : state;

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    return { ...state, [action.payload.imdbID]: action.payload };
  }
  return state;
};

const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
