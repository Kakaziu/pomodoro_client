import { useDispatch } from "react-redux";
import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { Camp, Camps, Form, TimeCamp, TimeCamps } from "./styled";
import { createPomodoroRequest } from "../../store/modules/pomodoro/pomodoroActions/createActions";
import { IModalForm } from "./protocol";
import { useSelector } from "react-redux";
import { State } from "../../store/protocol";

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
      setPomodoroTime(pomodoro.timeWorking);
      setPomodoroShortResting(pomodoro.timeShortResting);
      setPomodoroLongResting(pomodoro.timeLongResting);
    }
  }, [pomodoro]);

  useEffect(() => {
    if (!showModal) setCamps();
  }, [showModal]);

  const dispatch = useDispatch();

  function createPomodoro(e: FormEvent) {
    e.preventDefault();

    const pomodoroData = {
      title: task,
      timeWorking: pomodoroTime,
      timeShortResting: pomodoroShortResting,
      timeLongResting: pomodoroLongResting,
    };

    setCamps();
    dispatch(createPomodoroRequest(pomodoroData));
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

      <button>CREATE POMODORO</button>
    </Form>
  );
};

export default ModalForm;
