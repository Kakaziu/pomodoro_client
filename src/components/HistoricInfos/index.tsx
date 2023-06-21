import { FunctionComponent } from "react";
import { AiFillCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import { CiApple } from "react-icons/ci";
import { HistoricInfosTag, InfoCircle, Infos, Title } from "./styled";
import { useSelector } from "react-redux";
import { State } from "../../store/protocol";
import { secondsToTime } from "../../utils/secondsToTime";

const HistoricInfos: FunctionComponent = () => {
  const { pomodoros } = useSelector((state: State) => state.PomodoroReducer);

  function getPomodorosCompleted() {
    return pomodoros.reduce(
      (soma, pomodoro) => soma + pomodoro.totalPomodoroCompleted,
      0
    );
  }

  function totalTimePomodoro() {
    const timeInSeconds = pomodoros.reduce(
      (soma, pomodoro) => soma + pomodoro.totalTimePomodoro,
      0
    );

    return secondsToTime(timeInSeconds);
  }

  return (
    <HistoricInfosTag>
      <Title>
        <h1>Historic</h1>
        <p>Check you pomodoro history.</p>
      </Title>

      <Infos>
        <InfoCircle>
          <AiFillCheckCircle size="70" color="green" />
          <p>Completed Pomodoros</p>
          <span>{getPomodorosCompleted()}</span>
        </InfoCircle>
        <InfoCircle>
          <AiOutlineClockCircle size="70" color="#121331" />
          <p>Total pomodoro time</p>
          <span>{totalTimePomodoro()}</span>
        </InfoCircle>
        <InfoCircle>
          <CiApple size="70" color="red" />
          <p>Pomodoros</p>
          <span>{pomodoros.length}</span>
        </InfoCircle>
      </Infos>
    </HistoricInfosTag>
  );
};

export default HistoricInfos;
