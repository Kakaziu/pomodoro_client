import { Error } from "../../protocol";
import { Pomodoro, UpdatePomodoroParams } from "../protocol";

export const updatePomodoroRequest = (
  updatePomodoroParams: UpdatePomodoroParams
) => {
  return { type: "UPDATE_POMODORO_REQUEST", payload: updatePomodoroParams };
};

export const updatePomodoroSuccess = (pomodoro: Pomodoro) => {
  return { type: "UPDATE_POMODORO_SUCCESS", payload: pomodoro };
};

export const updatePomodoroFailure = (error: Error) => {
  return { type: "UPDATE_POMODORO_FAILURE", payload: error };
};
