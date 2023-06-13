import { FunctionComponent } from "react";
import { PomodoroTimerTag } from "./styled";
import { IPomodoroTime } from "./protocol";
import { workingTheme, shortRestingTheme, longRestingTheme } from "../../theme";

const PomodoroTimer: FunctionComponent<IPomodoroTime> = ({ setTheme }) => {
  return (
    <PomodoroTimerTag>
      <div>
        <button onClick={() => setTheme(workingTheme)}>Pomodoro</button>
        <button onClick={() => setTheme(shortRestingTheme)}>
          Short resting
        </button>
        <button onClick={() => setTheme(longRestingTheme)}>Long Resting</button>
      </div>
    </PomodoroTimerTag>
  );
};

export default PomodoroTimer;
