import { PomodoroState } from "./modules/pomodoro/protocol";
import { Action } from "./modules/protocol";
import { UserState } from "./modules/user/protocol";

export interface State {
  UserReducer: IUserReducer;
  PomodoroReducer: IPomodoroReducer;
}

export type IUserReducer = (state: UserState, action: Action) => UserState;

export type IPomodoroReducer = (
  state: PomodoroState,
  action: Action
) => PomodoroState;
