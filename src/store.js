import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AsyncStorage } from "react-native";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "settings"]
};

const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
let persistor = persistStore(store);
export { store, persistor };
//export default store;
