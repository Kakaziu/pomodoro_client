import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createPomodoroRequest } from "../../store/modules/pomodoro/pomodoroActions/createActions";
import { updatePomodoroRequest } from "../../store/modules/pomodoro/pomodoroActions/updateActions";
import { State } from "../../store/protocol";
import { IModalForm } from "./protocol";
import { Camp, Camps, Form, TimeCamp, TimeCamps } from "./styled";

const ModalForm: FunctionComponent<IModalForm> = ({
  showModal,
  setShowModal,
}) => {
  const { pomodoro } = useSelector((state: State) => state.PomodoroReducer);
  const [task, setTask] = useState<string>("");
  const [pomodoroTime, setPomodoroTime] = useState<number>(0);
  const [pomodoroShortResting, setPomodoroShortResting] = useState<number>(0);
  const [pomodoroLongResting, setPomodoroLongResting] = useState<number>(0);

  useEffect(() => {
    if (pomodoro) {
      setTask(pomodoro.title);
      setPomodoroTime(pomodoro.timeWorking / 60);
      setPomodoroShortResting(pomodoro.timeShortResting / 60);
      setPomodoroLongResting(pomodoro.timeLongResting / 60);
    }
  }, [pomodoro]);

  useEffect(() => {
    if (!showModal) setCamps();
  }, [showModal]);

  const dispatch = useDispatch();

  function createPomodoro(e: FormEvent) {
    e.preventDefault();

    if (!task) { toast.error("Task is required."); return; }
    if (pomodoroTime < 10) { toast.error("Pomodoro time must be at least 10 minutes."); return; }
    if (pomodoroShortResting < 1) { toast.error("Short resting must be at least 1 minute."); return; }
    if (pomodoroLongResting < 5) { toast.error("Long resting must be at least 5 minutes."); return; }

    const pomodoroData = {
      title: task,
      timeWorking: pomodoroTime * 60,
      timeShortResting: pomodoroShortResting * 60,
      timeLongResting: pomodoroLongResting * 60,
    };

    setCamps();

    if (!pomodoro) {
      dispatch(createPomodoroRequest(pomodoroData));
      toast.success("Pomodoro created.");
    } else {
      dispatch(updatePomodoroRequest(pomodoro.id, pomodoroData));
      if (pomodoro) toast.success("Edited pomodoro");
    }

    setShowModal(false);
  }

  function setCamps() {
    setTask("");
    setPomodoroTime(0);
    setPomodoroShortResting(0);
    setPomodoroLongResting(0);
  }

  return (
    <Form onSubmit={createPomodoro}>
      <h2>New Pomodoro</h2>

      <Camps>
        <Camp>
          <input
            type="text"
            placeholder="Task"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
        </Camp>
        <TimeCamps>
          <TimeCamp>
            <span>Pomodoro time</span>
            <input
              type="number"
              onChange={(e) => setPomodoroTime(Number(e.target.value))}
              value={pomodoroTime}
            />
          </TimeCamp>
          <TimeCamp>
            <span>Short resting</span>
            <input
              type="number"
              onChange={(e) => setPomodoroShortResting(Number(e.target.value))}
              value={pomodoroShortResting}
            />
          </TimeCamp>
          <TimeCamp>
            <span>Long resting</span>
            <input
              type="number"
              onChange={(e) => setPomodoroLongResting(Number(e.target.value))}
              value={pomodoroLongResting}
            />
          </TimeCamp>
        </TimeCamps>
      </Camps>

      <button>{pomodoro ? "EDIT POMODORO" : "CREATE POMODORO"}</button>
    </Form>
  );
};

export default ModalForm;
