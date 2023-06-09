import { FunctionComponent, useEffect } from "react";
import { Pomodoro as IPomodoro } from "../../store/modules/pomodoro/protocol";
import { Pomodoro, PomodoroInfos, PomodorosTag } from "./styled";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { readPomodoroRequest } from "../../store/modules/pomodoro/pomodoroActions/readActions";
import { useSelector } from "react-redux";
import { State } from "../../store/protocol";

const Pomodoros: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { pomodoros } = useSelector((state: State) => state.PomodoroReducer);

  useEffect(() => {
    dispatch(readPomodoroRequest());
  }, [dispatch]);

  return (
    <PomodorosTag>
      {pomodoros.map((pomodoro: IPomodoro) => {
        return (
          <Pomodoro>
            <h3>
              {pomodoro.title}
              <div>
                <AiFillDelete size="22" color="red" cursor="pointer" />
                <AiFillEdit size="22" color="blue" cursor="pointer" />
              </div>
            </h3>
            <span>00:00:00</span>

            <PomodoroInfos>
              <div>
                <span>Pomodoro Time</span>
                <span className="tp">{pomodoro.timeWorking}</span>
              </div>

              <div>
                <span>Short Resting</span>
                <span className="ts">{pomodoro.timeShortResting}</span>
              </div>

              <div>
                <span>Long Resting</span>
                <span className="tl">{pomodoro.timeLongResting}</span>
              </div>

              <div>
                <span>Pomodoros completed</span>
                <span className="pc">{pomodoro.totalPomodoroCompleted}</span>
              </div>
            </PomodoroInfos>
          </Pomodoro>
        );
      })}
      {/* <Pomodoro>
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
      </Pomodoro> */}
    </PomodorosTag>
  );
};

export default Pomodoros;
