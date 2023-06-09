import { useDispatch } from "react-redux";
import { Camp, Camps, Form, TimeCamp, TimeCamps } from "./styled";
import { createPomodoroRequest } from "../../store/modules/pomodoro/pomodoroActions/createActions";
import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { IModalForm } from "./protocol";
import { toast } from "react-toastify";

const ModalForm: FunctionComponent<IModalForm> = ({ showModal }) => {
  const [task, setTask] = useState<string>("");
  const [pomodoroTime, setPomodoroTime] = useState<number | undefined>(
    undefined
  );
  const [pomodoroShortResting, setPomodoroShortResting] = useState<
    number | undefined
  >(undefined);
  const [pomodoroLongResting, setPomodoroLongResting] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    if (!showModal) {
      setTask("");
      setPomodoroTime(undefined);
      setPomodoroShortResting(undefined);
      setPomodoroLongResting(undefined);
    }
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

    validCamps(pomodoroData.title);
    validCamps(pomodoroData.timeWorking);
    validCamps(pomodoroData.timeShortResting);
    validCamps(pomodoroData.timeLongResting);

    dispatch(createPomodoroRequest(pomodoroData));
  }

  function validCamps(camp: unknown) {
    if (!camp) return toast.warn(`${camp} está vazio.`);
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
