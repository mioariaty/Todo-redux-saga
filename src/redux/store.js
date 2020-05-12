import rootReducer from "./reducers";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composeEnchancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
    : compose;

const configureStore = () => {
  const middleWares = [thunk];

  // apply middleWares
  const enchancers = [applyMiddleware(...middleWares)];

  const store = createStore(rootReducer, composeEnchancers(...enchancers));

  return store;
};
export default configureStore;
