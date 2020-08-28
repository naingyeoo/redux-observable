import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/index";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../epic";

const epicMiddleware = createEpicMiddleware();

const compseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(rootReducer, compseEnhancers(applyMiddleware(epicMiddleware)));
  epicMiddleware.run(rootEpic)
  return store;
}
