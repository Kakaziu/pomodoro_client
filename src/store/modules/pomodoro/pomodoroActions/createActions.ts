import { Error } from "../../protocol";
import { Pomodoro, PomodoroParams } from "../protocol";

export const createPomodoroRequest = (pomodoro: PomodoroParams) => {
  return { type: "CREATE_POMODORO_REQUEST", payload: pomodoro };
};

export const createPomodoroSuccess = (pomodoro: Pomodoro) => {
  return { type: "CREATE_POMODORO_SUCCESS", payload: pomodoro };
};

export const createPomodoroFailure = (error: Error) => {
  return { type: "CREATE_POMODORO_SUCCESS", payload: error };
};
