import { combineReducers, Reducer } from "redux";

import { ApplicationState } from "~/store/types";

import movies from "./movies";
import cart from "./cart";

const combinedReducers = combineReducers({
  movies,
  cart,
});

const rootReducer: Reducer<ApplicationState> = (state, action) => {
  return combinedReducers(state, action);
};

export default rootReducer;
