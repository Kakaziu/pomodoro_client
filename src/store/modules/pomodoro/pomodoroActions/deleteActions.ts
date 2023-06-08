import { Pomodoro } from "../protocol";

export const deletePomodoroRequest = (id: string) => {
  return { type: "DELETE_POMODORO_REQUEST", payload: id };
};

export const deletePomodoroSuccess = (pomodoro: Pomodoro) => {
  return { type: "DELETE_POMODORO_SUCCESS", payload: pomodoro };
};

export const deletePomodoroFailure = (error: Error) => {
  return { type: "DELETE_POMODORO_SUCCESS", payload: error };
};
