import { Pomodoro } from "../protocol";

export const showPomodoroRequest = (id: string) => {
  return { type: "SHOW_POMODORO_REQUEST", payload: id };
};

export const showPomodoroSuccess = (pomodoro: Pomodoro) => {
  return { type: "SHOW_POMODORO_SUCCESS", payload: pomodoro };
};

export const showPomodoroFailure = (error: Error) => {
  return { type: "SHOW_POMODORO_FAILURE", payload: error };
};
