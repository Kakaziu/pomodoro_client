import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useInterval } from "usehooks-ts";
import { Theme } from "../../pages/PomodoroApp/protocol";
import api from "../../services/api";
import { Pomodoro } from "../../store/modules/pomodoro/protocol";
import { longRestingTheme, shortRestingTheme, workingTheme } from "../../theme";
import { secondsToTime } from "../../utils/secondsToTime";
import LofiVideo from "../LofiVideo";
import PomodoroDetails from "../PomodoroDetails";
import Timer from "../Timer";
import { IPomodoroTime, ModePomodoro } from "./protocol";
import { ActionButton, PomodoroTimerTag } from "./styled";

const PomodoroTimer: FunctionComponent<IPomodoroTime> = ({
  user,
  setTheme,
  totalPomodoroCompleted,
  totalPomodoroTime,
  setTotalPomodoroCompleted,
  setTotalPomodoroTime,
}) => {
  const [pomodoro, setPomodoro] = useState<Pomodoro | null>(null);
  const [mainTime, setMainTime] = useState(1500);
  const [cycles, setCycles] = useState(0);
  const [instanceTotalTime, setInstanceTotalTime] = useState(0);
  const [timeBlocks, setTimeBlocks] = useState(0);
  const [modePomodoro, setModePomodoro] = useState<ModePomodoro>("Working");
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(0);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    if (user) {
      getPomodoro();
    }
  }, []);

  async function getPomodoro() {
    setLoading(true);
    const { id } = params;

    if (!id) return changeMode("Working", workingTheme, 1500, false);

    console.log("oi");

    try {
      const response = await api.get(`/pomodoros/${id}`);

      if (response.status === 200) {
        setPomodoro(response.data);
        setMainTime(response.data.timeWorking);
        setTotalPomodoroCompleted(response.data.totalPomodoroCompleted);
        setTotalPomodoroTime(response.data.totalTimePomodoro);
        setLoading(false);
      }
    } catch (e) {
      return null;
    }
  }

  useEffect(() => {
    if (timeBlocks % 4 === 0 && timeBlocks > 0) {
      setCycles(cycles + 1);
      longResting(true);
    }
  }, [timeBlocks]);

  useEffect(() => {
    if (mainTime === 0) {
      if (modePomodoro === "Working") {
        if (!pomodoro) {
          setTimeBlocks(timeBlocks + 1);
          shortResting(true);
        } else {
          setTimeBlocks(timeBlocks + 1);
          setTotalPomodoroCompleted(totalPomodoroCompleted + 1);
          setTotalPomodoroTime(totalPomodoroTime + pomodoro.timeWorking);
          shortResting(true);
        }
      } else {
        pomodoroWorking(true);
      }
    }
  }, [mainTime, modePomodoro, changeMode]);

  useInterval(
    () => {
      if (mainTime) {
        document.title = `${secondsToTime(mainTime)} - Pomodoro App`;
        setMainTime(mainTime - 1)
      };
      if (modePomodoro === "Working")
        setInstanceTotalTime(instanceTotalTime + 1);
    },
    isPlaying ? 1000 : null
  );

  function pomodoroWorking(autoPlay: boolean) {
    if (!pomodoro) return changeMode("Working", workingTheme, 1500, autoPlay);

    changeMode("Working", workingTheme, pomodoro.timeWorking, autoPlay);
  }

  function shortResting(autoPlay: boolean) {
    if (!pomodoro) return changeMode("Resting", shortRestingTheme, 300, autoPlay);

    changeMode(
      "Resting",
      shortRestingTheme,
      pomodoro.timeShortResting,
      autoPlay
    );
  }

  function longResting(autoplay: boolean) {
    if (!pomodoro) return changeMode("Resting", longRestingTheme, 900, autoplay);

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
      <Timer mainTime={mainTime} loading={loading} />
      <ActionButton
        onClick={() => {
          setIsPlaying(!isPlaying);
          setPlayer(1);
        }}
      >
        {isPlaying ? "PAUSE" : "START"}
      </ActionButton>

      <LofiVideo player={player} />
      <PomodoroDetails
        pomodoroCompleted={timeBlocks}
        totalTimeWorking={secondsToTime(instanceTotalTime)}
        cycles={cycles}
      />
    </PomodoroTimerTag>
  );
};

export default PomodoroTimer;
