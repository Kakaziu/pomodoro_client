import { Dispatch, SetStateAction } from "react";
import { Theme } from "../../pages/PomodoroApp/protocol";

export interface IPomodoroTime {
  setTheme: Dispatch<SetStateAction<Theme>>;
  totalPomodoroCompleted: number;
  totalPomodoroTime: number;
  setTotalPomodoroCompleted: Dispatch<SetStateAction<number>>;
  setTotalPomodoroTime: Dispatch<SetStateAction<number>>;
}

export type ModePomodoro = "Working" | "Resting";
