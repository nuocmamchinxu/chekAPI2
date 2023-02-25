import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { onLoadPost } from "./saga";
const sagaMiddleware = createSagaMiddleware();
const middlwares = [logger, sagaMiddleware];
export const store = createStore(rootReducer, applyMiddleware(...middlwares));

sagaMiddleware.run(onLoadPost);
export default store;
