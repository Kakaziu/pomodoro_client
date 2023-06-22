import { FunctionComponent } from "react";
import ReactLoading from "react-loading";
import { ITimer } from "./protocol";
import { TimerTag } from "./styled";
import { secondsToTime } from "../../utils/secondsToTime";
import { secondsToMinutes } from "../../utils/secondsToMinutes";

const Timer: FunctionComponent<ITimer> = ({ mainTime, loading }) => {
  function setFormatTime() {
    return mainTime >= 3600
      ? secondsToTime(mainTime)
      : secondsToMinutes(mainTime);
  }

  return (
    <TimerTag>
      {loading ? (
        <ReactLoading
          type="spinningBubbles"
          height="50px"
          width="50px"
          color="white"
        />
      ) : (
        setFormatTime()
      )}
    </TimerTag>
  );
};

export default Timer;
