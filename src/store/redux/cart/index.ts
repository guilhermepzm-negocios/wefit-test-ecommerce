import { Reducer } from "redux";

import { Action } from "./actions";
import { CartState, CartTypes } from "./types";
import { MovieModel } from "~/models/MovieModel";
import { CartItem, CartModel } from "~/models/CartModel";

const INITIAL_STATE: CartState = {
  data: {
    items: [],
    total: 0,
  },
  error: false,
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case CartTypes.ADD_CART_ITEM_REQUEST: {
      const movie = new MovieModel(action.payload.movie);
      const newItem: CartItem = {
        movie,
        quantity: 1,
        total: movie.price,
      };
      const items = [...state.data.items, newItem];
      const cart = new CartModel({
        items,
        total: state.data.total + movie.price,
      });
      return {
        ...state,
        data: cart,
      };
    }

    case CartTypes.REMOVE_CART_ITEM_REQUEST: {
      const { movieId } = action.payload;
      const item = state.data.items.find((i) => i.movie.id === movieId);
      if (!item) {
        return state;
      }
      const items = state.data.items.filter((i) => i.movie.id !== movieId);
      const cart = new CartModel({
        items,
        total: state.data.total - item.total,
      });
      return {
        ...state,
        data: cart,
      };
    }

    case CartTypes.UPDATE_CART_ITEM_REQUEST: {
      const { movieId, quantity } = action.payload;
      const item = state.data.items.find((i) => i.movie.id === movieId);
      if (!item) {
        return state;
      }
      const items = state.data.items.map((i) => {
        if (i.movie.id === movieId) {
          return {
            ...i,
            quantity,
            total: i.movie.price * quantity,
          };
        }
        return i;
      });
      const total = items.reduce((acc, i) => acc + i.total, 0);
      const cart = new CartModel({
        items,
        total,
      });
      return {
        ...state,
        data: cart,
      };
    }

    case CartTypes.FINISH_ORDER_CART_REQUEST: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
};

export default reducer;
