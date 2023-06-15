import { FunctionComponent, useEffect, useState } from "react";
import { ActionButton, PomodoroTimerTag } from "./styled";
import { IPomodoroTime, ModePomodoro } from "./protocol";
import { workingTheme, shortRestingTheme, longRestingTheme } from "../../theme";
import Timer from "../Timer";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Pomodoro } from "../../store/modules/pomodoro/protocol";
import { useInterval } from "usehooks-ts";
import LofiVideo from "../LofiVideo";

const PomodoroTimer: FunctionComponent<IPomodoroTime> = ({
  setTheme,
  totalPomodoroCompleted,
  totalPomodoroTime,
  setTotalPomodoroCompleted,
  setTotalPomodoroTime,
}) => {
  const [pomodoro, setPomodoro] = useState<Pomodoro | null>(null);
  const [mainTime, setMainTime] = useState(1500);
  const [modePomodoro, setModePomodoro] = useState<ModePomodoro>("Working");
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(0);

  const params = useParams();

  useEffect(() => {
    async function getPomodoro() {
      const { id } = params;

      try {
        const response = await api.get(`/pomodoros/${id}`);

        if (response.status === 200) {
          setPomodoro(response.data);
          setMainTime(response.data.timeWorking);
          setTotalPomodoroCompleted(response.data.totalPomodoroCompleted);
          setTotalPomodoroTime(response.data.totalTimePomodoro);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getPomodoro();
  }, []);

  useEffect(() => {
    const modePomodoroTime = getTimeModePomodoro();

    if (!modePomodoroTime) return;

    if (mainTime === 0)
      setTotalPomodoroTime(totalPomodoroTime + modePomodoroTime);

    if (mainTime === 0 && modePomodoro === "Working")
      setTotalPomodoroCompleted(totalPomodoroCompleted + 1);
  }, [mainTime, modePomodoro]);

  useInterval(
    () => {
      if (mainTime) {
        setMainTime(mainTime - 1);
      }
    },
    isPlaying ? 1000 : null
  );

  function pomodoroWorking() {
    if (!pomodoro) return;

    setModePomodoro("Working");
    setIsPlaying(false);
    setTheme(workingTheme);
    setMainTime(pomodoro.timeWorking);
  }

  function shortResting() {
    if (!pomodoro) return;

    setModePomodoro("Short Resting");
    setIsPlaying(false);
    setTheme(shortRestingTheme);
    setMainTime(pomodoro.timeShortResting);
  }

  function longResting() {
    if (!pomodoro) return;

    setModePomodoro("Long Resting");
    setIsPlaying(false);
    setTheme(longRestingTheme);
    setMainTime(pomodoro.timeLongResting);
  }

  function getTimeModePomodoro() {
    if (!pomodoro) return;

    let refMainTime;

    switch (modePomodoro) {
      case "Working":
        refMainTime = pomodoro.timeWorking;
        break;
      case "Short Resting":
        refMainTime = pomodoro.timeShortResting;
        break;
      case "Long Resting":
        refMainTime = pomodoro.timeLongResting;
        break;
      default:
        refMainTime = pomodoro.timeWorking;
    }

    return refMainTime;
  }

  return (
    <PomodoroTimerTag>
      <div>
        <button onClick={pomodoroWorking}>Pomodoro</button>
        <button onClick={shortResting}>Short resting</button>
        <button onClick={longResting}>Long Resting</button>
      </div>
      <Timer mainTime={mainTime} />
      <ActionButton
        onClick={() => {
          setIsPlaying(!isPlaying);
          setPlayer(1);
        }}
      >
        {isPlaying ? "PAUSE" : "START"}
      </ActionButton>

      <LofiVideo player={player} />
    </PomodoroTimerTag>
  );
};

export default PomodoroTimer;
