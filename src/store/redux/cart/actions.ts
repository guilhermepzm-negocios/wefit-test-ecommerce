import { action } from "typesafe-actions";

import { CartTypes } from "./types";
import { MovieModel } from "~/models/MovieModel";

export const addCartItemRequest = (movie: MovieModel) =>
  action(CartTypes.ADD_CART_ITEM_REQUEST, { movie });

export const removeCartItemRequest = (movieId: string) =>
  action(CartTypes.REMOVE_CART_ITEM_REQUEST, { movieId });

export const updateCartItemRequest = (movieId: string, quantity: number) =>
  action(CartTypes.UPDATE_CART_ITEM_REQUEST, { movieId, quantity });

export const finishOrderCartRequest = () =>
  action(CartTypes.FINISH_ORDER_CART_REQUEST);

export type Action =
  | ReturnType<typeof addCartItemRequest>
  | ReturnType<typeof removeCartItemRequest>
  | ReturnType<typeof updateCartItemRequest>
  | ReturnType<typeof finishOrderCartRequest>;
