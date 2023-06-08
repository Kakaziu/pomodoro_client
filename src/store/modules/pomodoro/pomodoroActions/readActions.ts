import { Pomodoro } from "../protocol";

export const readPomodoroRequest = () => {
  return { type: "READ_POMODORO_REQUEST" };
};

export const readPomodoroSuccess = (pomodoros: Pomodoro[]) => {
  return { type: "READ_POMODORO_SUCCESS", payload: pomodoros };
};
