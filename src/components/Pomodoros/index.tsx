import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Pomodoro as IPomodoro } from "../../store/modules/pomodoro/protocol";
import { LoadingTag, Pomodoro, PomodoroInfos, PomodorosTag } from "./styled";
import { readPomodoroRequest } from "../../store/modules/pomodoro/pomodoroActions/readActions";
import { State } from "../../store/protocol";
import { deletePomodoroRequest } from "../../store/modules/pomodoro/pomodoroActions/deleteActions";

const Pomodoros: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { pomodoros } = useSelector((state: State) => state.PomodoroReducer);

  useEffect(() => {
    dispatch(readPomodoroRequest());
    setLoading(false);
  }, [dispatch]);

  return (
    <PomodorosTag>
      {loading ? (
        <LoadingTag>
          Loading
          <ReactLoading
            type="spinningBubbles"
            width="30px"
            height="30px"
            color="#121331"
          />
        </LoadingTag>
      ) : (
        pomodoros.map((pomodoro: IPomodoro) => {
          return (
            <Pomodoro key={pomodoro.id}>
              <h3>
                {pomodoro.title}
                <div>
                  <AiFillDelete
                    size="22"
                    color="red"
                    cursor="pointer"
                    onClick={() => dispatch(deletePomodoroRequest(pomodoro.id))}
                  />
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
        })
      )}
    </PomodorosTag>
  );
};

export default Pomodoros;
