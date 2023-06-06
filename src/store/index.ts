import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";
import UserReducer from "./modules/user/userReducer";

const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({
  UserReducer,
});

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
