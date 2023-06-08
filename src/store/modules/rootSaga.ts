import { AllEffect, ForkEffect, all } from "redux-saga/effects";
import user from "./user/sagas";
import pomodoro from "./pomodoro/sagas";

export default function* rootSaga(): Generator<
  AllEffect<AllEffect<ForkEffect<never>>>,
  any,
  unknown
> {
  return yield all([user, pomodoro]);
}
