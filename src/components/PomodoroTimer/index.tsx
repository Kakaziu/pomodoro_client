import { FunctionComponent, useEffect, useState } from "react";
import { ActionButton, PomodoroTimerTag } from "./styled";
import { IPomodoroTime } from "./protocol";
import { workingTheme, shortRestingTheme, longRestingTheme } from "../../theme";
import Timer from "../Timer";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Pomodoro } from "../../store/modules/pomodoro/protocol";
import { useInterval } from "usehooks-ts";
import LofiVideo from "../LofiVideo";

const PomodoroTimer: FunctionComponent<IPomodoroTime> = ({ setTheme }) => {
  const [pomodoro, setPomodoro] = useState<Pomodoro | null>(null);
  const [mainTime, setMainTime] = useState(1500);
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
        }
      } catch (e) {
        console.log(e);
      }
    }

    getPomodoro();
  }, []);

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

    setIsPlaying(false);
    setTheme(workingTheme);
    setMainTime(pomodoro.timeWorking);
  }

  function shortResting() {
    if (!pomodoro) return;

    setIsPlaying(false);
    setTheme(shortRestingTheme);
    setMainTime(pomodoro.timeShortResting);
  }

  function longResting() {
    if (!pomodoro) return;

    setIsPlaying(false);
    setTheme(longRestingTheme);
    setMainTime(pomodoro.timeLongResting);
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
