import { all, call, put, takeLatest } from "redux-saga/effects";

import { listMoviesFailure, listMoviesSuccess } from "./actions";
import { MoviesTypes } from "./types";
import { AxiosResponse } from "axios";
import api from "~/services/api";
import { MovieModel } from "~/models/MovieModel";
import { toast } from "react-toastify";

function* list() {
  try {
    const response: AxiosResponse = yield call(api.get, `products`);
    const data: MovieModel[] = response.data.map((movies: any) => {
      return new MovieModel(movies);
    });
    yield put(listMoviesSuccess(data));
  } catch (err: any) {
    toast.error("Falha ao carregar filmes!");
    yield put(listMoviesFailure());
  }
}

export default all([takeLatest(MoviesTypes.LIST_MOVIES_REQUEST, list)]);
