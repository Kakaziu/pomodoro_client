import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { AiFillDelete, AiFillEdit, AiFillPlusCircle } from "react-icons/ai";
import { Pomodoro as IPomodoro } from "../../store/modules/pomodoro/protocol";
import {
  ActionBtns,
  LoadingTag,
  Pomodoro,
  PomodoroInfos,
  PomodorosTag,
  SkeletonPomodoro,
} from "./styled";
import { readPomodoroRequest } from "../../store/modules/pomodoro/pomodoroActions/readActions";
import { deletePomodoroRequest } from "../../store/modules/pomodoro/pomodoroActions/deleteActions";
import { State } from "../../store/protocol";
import { IPomodorosTag } from "./protocol";
import { showPomodoroRequest } from "../../store/modules/pomodoro/pomodoroActions/showActions";
import { secondsToMinutes } from "../../utils/secondsToMinutes";
import { secondsToTime } from "../../utils/secondsToTime";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Pomodoros: FunctionComponent<IPomodorosTag> = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const { pomodoros, loading } = useSelector(
    (state: State) => state.PomodoroReducer
  );

  console.log(loading);

  useEffect(() => {
    dispatch(readPomodoroRequest());
  }, []);

  function openEdit(id: string) {
    dispatch(showPomodoroRequest(id));
    setShowModal(true);
  }

  function deletePomodoro(id: string) {
    dispatch(deletePomodoroRequest(id));

    if (!loading) {
      toast.success("Deleted pomodoro");
    }
  }

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
              <Link to={`/pomodoro/${pomodoro.id}`}>
                <h3>{pomodoro.title}</h3>
                <span>{secondsToTime(pomodoro.totalTimePomodoro)}</span>

                <PomodoroInfos>
                  <div>
                    <span>Pomodoro Time</span>
                    <span className="tp">
                      {pomodoro.timeWorking >= 3600
                        ? secondsToTime(pomodoro.timeWorking)
                        : secondsToMinutes(pomodoro.timeWorking)}
                    </span>
                  </div>

                  <div>
                    <span>Short Resting</span>
                    <span className="ts">
                      {pomodoro.timeShortResting >= 3600
                        ? secondsToTime(pomodoro.timeShortResting)
                        : secondsToMinutes(pomodoro.timeShortResting)}
                    </span>
                  </div>

                  <div>
                    <span>Long Resting</span>
                    <span className="tl">
                      {pomodoro.timeLongResting >= 3600
                        ? secondsToTime(pomodoro.timeLongResting)
                        : secondsToMinutes(pomodoro.timeLongResting)}
                    </span>
                  </div>

                  <div>
                    <span>Pomodoros completed</span>
                    <span className="pc">
                      {pomodoro.totalPomodoroCompleted}
                    </span>
                  </div>
                </PomodoroInfos>
              </Link>
              <ActionBtns>
                {!loading ? (
                  <AiFillDelete
                    size="22"
                    color="red"
                    cursor="pointer"
                    onClick={() => deletePomodoro(pomodoro.id)}
                  />
                ) : (
                  <ReactLoading
                    type="spin"
                    width="20px"
                    height="20px"
                    color="red"
                  />
                )}
                <AiFillEdit
                  size="22"
                  color="blue"
                  cursor="pointer"
                  onClick={() => openEdit(pomodoro.id)}
                />
              </ActionBtns>
            </Pomodoro>
          );
        })
      )}
      {loading ? (
        <></>
      ) : (
        <SkeletonPomodoro>
          <button onClick={() => setShowModal(true)}>
            <AiFillPlusCircle size="60" color="purple" />
          </button>
        </SkeletonPomodoro>
      )}
    </PomodorosTag>
  );
};

export default Pomodoros;
