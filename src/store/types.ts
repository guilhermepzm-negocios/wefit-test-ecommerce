import { MoviesState } from "./redux/movies/types";
import { CartState } from "./redux/cart/types";

export interface ApplicationState {
  movies: MoviesState;
  cart: CartState;
}
