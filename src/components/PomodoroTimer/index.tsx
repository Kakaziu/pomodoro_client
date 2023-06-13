import { FunctionComponent, useEffect, useState } from "react";
import { PomodoroTimerTag } from "./styled";
import { IPomodoroTime } from "./protocol";
import { workingTheme, shortRestingTheme, longRestingTheme } from "../../theme";
import Timer from "../Timer";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Pomodoro } from "../../store/modules/pomodoro/protocol";

const PomodoroTimer: FunctionComponent<IPomodoroTime> = ({ setTheme }) => {
  const [pomodoro, setPomodoro] = useState<Pomodoro | null>(null);
  const params = useParams();

  useEffect(() => {
    async function getPomodoro() {
      const { id } = params;

      try {
        const response = await api.get(`/pomodoros/${id}`);

        if (response.status === 200) {
          setPomodoro(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getPomodoro();
  }, []);

  return (
    <PomodoroTimerTag>
      <div>
        <button onClick={() => setTheme(workingTheme)}>Pomodoro</button>
        <button onClick={() => setTheme(shortRestingTheme)}>
          Short resting
        </button>
        <button onClick={() => setTheme(longRestingTheme)}>Long Resting</button>
      </div>
      <Timer mainTime={pomodoro ? pomodoro.timeWorking : 1500} />
    </PomodoroTimerTag>
  );
};

export default PomodoroTimer;
