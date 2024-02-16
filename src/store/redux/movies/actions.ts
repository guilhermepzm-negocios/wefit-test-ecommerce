import { action } from "typesafe-actions";

import { MoviesTypes } from "./types";
import { MovieModel } from "~/models/MovieModel";

export const listMoviesRequest = () => action(MoviesTypes.LIST_MOVIES_REQUEST);

export const listMoviesSuccess = (data: MovieModel[]) =>
  action(MoviesTypes.LIST_MOVIES_SUCCESS, { data });

export const listMoviesFailure = () => action(MoviesTypes.LIST_MOVIES_FAILURE);

export type Action =
  | ReturnType<typeof listMoviesRequest>
  | ReturnType<typeof listMoviesSuccess>
  | ReturnType<typeof listMoviesFailure>;
