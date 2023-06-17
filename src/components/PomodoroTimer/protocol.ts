import { Dispatch, SetStateAction } from "react";
import { Theme } from "../../pages/PomodoroApp/protocol";
import { User } from "../../store/modules/user/protocol";

export interface IPomodoroTime {
  user: User | null;
  setTheme: Dispatch<SetStateAction<Theme>>;
  totalPomodoroCompleted: number;
  totalPomodoroTime: number;
  setTotalPomodoroCompleted: Dispatch<SetStateAction<number>>;
  setTotalPomodoroTime: Dispatch<SetStateAction<number>>;
}

export type ModePomodoro = "Working" | "Resting";
