import { CartModel } from "~/models/CartModel";

export enum CartTypes {
  ADD_CART_ITEM_REQUEST = "@movies/ADD_CART_ITEM_REQUEST",
  REMOVE_CART_ITEM_REQUEST = "@movies/REMOVE_CART_ITEM_REQUEST",
  UPDATE_CART_ITEM_REQUEST = "@movies/UPDATE_CART_ITEM_REQUEST",
  FINISH_ORDER_CART_REQUEST = "@movies/FINISH_ORDER_CART_REQUEST",
}

export interface CartState {
  readonly data: CartModel;
  readonly error: boolean;
}
