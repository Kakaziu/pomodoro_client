import { FunctionComponent } from "react";
import { ITimer } from "./protocol";
import { TimerTag } from "./styled";
import { secondsToTime } from "../../utils/secondsToTime";
import { secondsToMinutes } from "../../utils/secondsToMinutes";

const Timer: FunctionComponent<ITimer> = ({ mainTime }) => {
  return (
    <TimerTag>
      {mainTime >= 3600 ? secondsToTime(mainTime) : secondsToMinutes(mainTime)}
    </TimerTag>
  );
};

export default Timer;
