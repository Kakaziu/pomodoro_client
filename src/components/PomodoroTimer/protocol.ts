import { Dispatch, SetStateAction } from "react";
import { Theme } from "../../pages/PomodoroApp/protocol";

export interface IPomodoroTime {
  setTheme: Dispatch<SetStateAction<Theme>>;
}
