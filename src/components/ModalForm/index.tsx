import { Camp, Camps, Form, TimeCamp, TimeCamps } from "./styled";

const ModalForm = () => {
  return (
    <Form>
      <h2>New Pomodoro</h2>

      <Camps>
        <Camp>
          <input type="text" placeholder="Task" />
        </Camp>
        <TimeCamps>
          <TimeCamp>
            <span>Pomodoro time</span>
            <input type="text" />
          </TimeCamp>
          <TimeCamp>
            <span>Short resting</span>
            <input type="text" />
          </TimeCamp>
          <TimeCamp>
            <span>Long resting</span>
            <input type="text" />
          </TimeCamp>
        </TimeCamps>
      </Camps>

      <button>CREATE POMODORO</button>
    </Form>
  );
};

export default ModalForm;
