import { Store } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import createStore from "./createStore";
import rootReducer from "./redux/rootReducer";
import rootSaga from "./redux/rootSaga";
import persistReducers from "./persistReducers";

import type { ApplicationState } from "./types";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store: Store<ApplicationState> = createStore(
  persistReducers(rootReducer),
  middlewares
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
