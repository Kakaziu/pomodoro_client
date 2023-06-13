import { FunctionComponent, useEffect, useState } from "react";
import { PomodoroTimerTag } from "./styled";
import { IPomodoroTime } from "./protocol";
import { workingTheme, shortRestingTheme, longRestingTheme } from "../../theme";
import Timer from "../Timer";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Pomodoro } from "../../store/modules/pomodoro/protocol";
import { useInterval } from "usehooks-ts";

const PomodoroTimer: FunctionComponent<IPomodoroTime> = ({ setTheme }) => {
  const [pomodoro, setPomodoro] = useState<Pomodoro | null>(null);
  const [loading, setLoading] = useState(true);
  const [mainTime, setMainTime] = useState(1500);
  const [isPlaying, setIsPlaying] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function getPomodoro() {
      const { id } = params;

      try {
        const response = await api.get(`/pomodoros/${id}`);

        if (response.status === 200) {
          setPomodoro(response.data);
          setMainTime(response.data.timeWorking);
          setLoading(false);
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

  return (
    <PomodoroTimerTag>
      <div>
        <button>Pomodoro</button>
        <button onClick={() => setTheme(shortRestingTheme)}>
          Short resting
        </button>
        <button onClick={() => setTheme(longRestingTheme)}>Long Resting</button>
      </div>
      <Timer mainTime={mainTime} />
    </PomodoroTimerTag>
  );
};

export default PomodoroTimer;
