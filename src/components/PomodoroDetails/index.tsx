import { FunctionComponent } from "react";
import { PomodoroDetailsTag } from "./styled";
import { IPomodoroDetails } from "./protocol";

const PomodoroDetails: FunctionComponent<IPomodoroDetails> = ({
  pomodoroCompleted,
  totalTimeWorking,
  cycles,
}) => {
  return (
    <PomodoroDetailsTag>
      <ul>
        <li>Completed pomodoros: {pomodoroCompleted}</li>
        <li>Time working: {totalTimeWorking}</li>
        <li>Cycles: {cycles}</li>
      </ul>
    </PomodoroDetailsTag>
  );
};

export default PomodoroDetails;
