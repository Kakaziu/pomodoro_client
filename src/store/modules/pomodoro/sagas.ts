import {
  all,
  put,
  call,
  takeLatest,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { Action } from "../protocol";
import api from "../../../services/api";
import {
  createPomodoroFailure,
  createPomodoroSuccess,
} from "./pomodoroActions/createActions";
import { toast } from "react-toastify";
import { readPomodoroSuccess } from "./pomodoroActions/readActions";

function* getPomodoros(): Generator<CallEffect | PutEffect<Action>> {
  try {
    const response: any = yield call(api.get, "/pomodoros");

    yield put(readPomodoroSuccess(response.data));
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
}

function* createPomodoro(
  action: Action
): Generator<CallEffect | PutEffect<Action>> {
  try {
    const response: any = yield call(api.post, "/pomodoros", action.payload);
    toast.success("Pomodoro created.");

    yield put(createPomodoroSuccess(response.data));
  } catch (e: any) {
    toast.error(e.response.data.message);
    yield put(createPomodoroFailure(e.response.data.message));
  }
}

export default all([
  takeLatest("CREATE_POMODORO_REQUEST", createPomodoro),
  takeLatest("READ_POMODORO_REQUEST", getPomodoros),
]);
