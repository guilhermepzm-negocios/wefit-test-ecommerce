import { MovieModel } from "~/models/MovieModel";

export enum MoviesTypes {
  LIST_MOVIES_REQUEST = "@movies/LIST_MOVIES_REQUEST",
  LIST_MOVIES_SUCCESS = "@movies/LIST_MOVIES_SUCCESS",
  LIST_MOVIES_FAILURE = "@movies/LIST_MOVIES_FAILURE",
}

export interface MoviesState {
  readonly data: MovieModel[];
  readonly error: boolean;
  readonly loading: boolean;
}
