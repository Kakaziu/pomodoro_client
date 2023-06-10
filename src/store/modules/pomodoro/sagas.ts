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
import {
  deletePomodoroFailure,
  deletePomodoroSuccess,
} from "./pomodoroActions/deleteActions";

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

function* deletePomodoro(
  action: Action
): Generator<CallEffect | PutEffect<Action>> {
  try {
    const response: any = yield call(
      api.delete,
      `/pomodoros/${action.payload}`
    );
    toast.success("Pomodoro deleted.");

    yield put(deletePomodoroSuccess(response.data));
  } catch (e: any) {
    yield put(deletePomodoroFailure(e.response.data.message));
  }
}

export default all([
  takeLatest("CREATE_POMODORO_REQUEST", createPomodoro),
  takeLatest("READ_POMODORO_REQUEST", getPomodoros),
  takeLatest("DELETE_POMODORO_REQUEST", deletePomodoro),
]);
