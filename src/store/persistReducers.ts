import { Reducer } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: "root",
      storage: storage,
      whitelist: ["cart"],
    },
    reducers
  );

  return persistedReducer;
};
