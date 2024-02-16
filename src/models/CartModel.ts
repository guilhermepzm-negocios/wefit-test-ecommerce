import { MovieModel } from "./MovieModel";

export interface CartItem {
  movie: MovieModel;
  quantity: number;
  total: number;
}

export class CartModel {
  items: CartItem[];

  total: number;

  constructor(data: { [key: string]: any }) {
    this.items = data.items;
    this.total = data.total;
  }
}
