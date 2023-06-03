import { FunctionComponent } from "react";
import { Pomodoro, PomodoroInfos, PomodorosTag } from "./styled";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

const Pomodoros: FunctionComponent = () => {
  return (
    <PomodorosTag>
      <Pomodoro>
        <h3>
          Estudar typescript
          <div>
            <AiFillDelete size="22" color="red" cursor="pointer" />
            <AiFillEdit size="22" color="blue" cursor="pointer" />
          </div>
        </h3>
        <span>01:15:00</span>

        <PomodoroInfos>
          <div>
            <span>Pomodoro Time</span>
            <span className="tp">25:00</span>
          </div>

          <div>
            <span>Short Resting</span>
            <span className="ts">5:00</span>
          </div>

          <div>
            <span>Long Resting</span>
            <span className="tl">15:00</span>
          </div>

          <div>
            <span>Pomodoros completed</span>
            <span className="pc">4</span>
          </div>
        </PomodoroInfos>
      </Pomodoro>
    </PomodorosTag>
  );
};

export default Pomodoros;
