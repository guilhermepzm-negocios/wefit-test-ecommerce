import { Reducer } from "redux";

import { Action } from "./actions";
import { MoviesState, MoviesTypes } from "./types";

const INITIAL_STATE: MoviesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<MoviesState> = (
  state = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case MoviesTypes.LIST_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MoviesTypes.LIST_MOVIES_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        loading: false,
        error: false,
        data,
      };
    }
    case MoviesTypes.LIST_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };

    default:
      return state;
  }
};

export default reducer;
