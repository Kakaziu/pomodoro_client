import { FunctionComponent } from "react";
import { PomodoroTimerTag } from "./styled";

const PomodoroTimer: FunctionComponent = () => {
  return (
    <PomodoroTimerTag>
      <div>
        <button>Pomodoro</button>
        <button>Short resting</button>
        <button>Long Resting</button>
      </div>
    </PomodoroTimerTag>
  );
};

export default PomodoroTimer;
