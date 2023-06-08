import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";
import UserReducer from "./modules/user/userReducer";
import PomodoroReducer from "./modules/pomodoro/pomodoroReducer";

const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({
  UserReducer,
  PomodoroReducer,
});

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
