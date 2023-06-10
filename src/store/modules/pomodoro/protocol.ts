import { AxiosResponse } from "axios";
import { Error } from "../protocol";

export interface PomodoroState {
  pomodoros: Pomodoro[];
  pomodoro: Pomodoro | null;
  error: Error | null;
  loading: boolean;
}

export interface Pomodoro {
  id: string;
  title: string;
  timeWorking: number;
  timeShortResting: number;
  timeLongResting: number;
  totalPomodoroCompleted: number;
  totalTimePomodoro: number;
  createBy: string;
  createdAt: number;
}

export interface PomodoroParams {
  title?: string;
  timeWorking?: number;
  timeShortResting?: number;
  timeLongResting?: number;
}

export type UpdatePomodoroParams = Partial<PomodoroParams>;
