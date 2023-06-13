import { FunctionComponent } from "react";
import { ITimer } from "./protocol";
import { TimerTag } from "./styled";
import { secondsToTime } from "../../utils/secondsToTime";

const Timer: FunctionComponent<ITimer> = ({ mainTime }) => {
  return <TimerTag>{secondsToTime(mainTime)}</TimerTag>;
};

export default Timer;
