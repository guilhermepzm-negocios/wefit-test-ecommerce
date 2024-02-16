import { all } from "redux-saga/effects";

import movies from "./movies/sagas";

export default function* rootSaga(): any {
  return yield all([movies]);
}
