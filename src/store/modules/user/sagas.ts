import {
  all,
  put,
  call,
  takeLatest,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { Action, IAuth } from "./protocol";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { loginFailure, loginSuccess } from "./userActions";

function* login(action: Action): Generator<CallEffect | PutEffect<Action>> {
  try {
    const response: any = yield call(api.post, "/tokens", action.payload);
    const data: IAuth = response.data;
    localStorage.setItem("token", data.token);
    api.defaults.headers.common["authorization"] = data.token;

    yield put(loginSuccess(response.data.user));
  } catch (e: any) {
    yield put(loginFailure(e.response.data.errors));
    toast.error(e.response.status.message);
  }
}

export default all([takeLatest("LOGIN_REQUEST", login)]);
