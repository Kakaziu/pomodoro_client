import { PomodoroState } from "./modules/pomodoro/protocol";
import { UserState } from "./modules/user/protocol";

export interface State {
  UserReducer: UserState;
  PomodoroReducer: PomodoroState;
}
