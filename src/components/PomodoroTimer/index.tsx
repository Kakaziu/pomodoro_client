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
import { Theme } from "../../pages/PomodoroApp/protocol";

const PomodoroTimer: FunctionComponent<IPomodoroTime> = ({
  setTheme,
  totalPomodoroCompleted,
  totalPomodoroTime,
  setTotalPomodoroCompleted,
  setTotalPomodoroTime,
}) => {
  const [pomodoro, setPomodoro] = useState<Pomodoro | null>(null);
  const [mainTime, setMainTime] = useState(1500);
  const [timeBlocks, setTimeBlocks] = useState(0);
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
    if (timeBlocks % 4 === 0 && timeBlocks > 0) longResting(true);
  }, [timeBlocks]);

  useEffect(() => {
    if (!pomodoro) return;

    if (mainTime === 0) {
      if (modePomodoro === "Working") {
        setTimeBlocks(timeBlocks + 1);
        setTotalPomodoroCompleted(totalPomodoroCompleted + 1);
        setTotalPomodoroTime(totalPomodoroTime + pomodoro.timeWorking);
        shortResting(true);
      } else {
        pomodoroWorking(true);
      }
    }
  }, [mainTime, modePomodoro, changeMode]);

  useInterval(
    () => {
      if (mainTime) {
        setMainTime(mainTime - 1);
      }
    },
    isPlaying ? 1000 : null
  );

  function pomodoroWorking(autoPlay: boolean) {
    if (!pomodoro) return;

    changeMode("Working", workingTheme, pomodoro.timeWorking, autoPlay);
  }

  function shortResting(autoPlay: boolean) {
    if (!pomodoro) return;

    changeMode(
      "Resting",
      shortRestingTheme,
      pomodoro.timeShortResting,
      autoPlay
    );
  }

  function longResting(autoplay: boolean) {
    if (!pomodoro) return;

    changeMode("Resting", longRestingTheme, pomodoro.timeLongResting, autoplay);
  }

  function changeMode(
    modePomodoro: ModePomodoro,
    theme: Theme,
    mainTime: number,
    autoPlay: boolean
  ) {
    setModePomodoro(modePomodoro);
    setTheme(theme);
    setMainTime(mainTime);

    if (autoPlay) {
      setIsPlaying(true);
    } else setIsPlaying(false);
  }

  return (
    <PomodoroTimerTag>
      <div>
        <button onClick={() => pomodoroWorking(false)}>Pomodoro</button>
        <button onClick={() => shortResting(false)}>Short resting</button>
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
      <p>{timeBlocks}</p>
    </PomodoroTimerTag>
  );
};

export default PomodoroTimer;
