import { AllEffect, ForkEffect, all } from "redux-saga/effects";
import user from "./user/sagas";

export default function* rootSaga(): Generator<
  AllEffect<AllEffect<ForkEffect<never>>>,
  any,
  unknown
> {
  return yield all([user]);
}
