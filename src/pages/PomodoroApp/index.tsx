import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../components/Logo";
import { Header, PomodoroPage } from "./styled";
import PomodoroTimer from "../../components/PomodoroTimer";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { workingTheme } from "../../theme";
import { Theme } from "./protocol";
import { useDispatch } from "react-redux";
import { updatePomodoroRequest } from "../../store/modules/pomodoro/pomodoroActions/updateActions";
import { useSelector } from "react-redux";
import { State } from "../../store/protocol";

const PomodoroApp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { user } = useSelector((state: State) => state.UserReducer);

  const [theme, setTheme] = useState<Theme>(workingTheme);
  const [totalPomodoroCompleted, setTotalPomodoroCompleted] = useState(0);
  const [totalPomodoroTime, setTotalPomodoroTime] = useState(0);

  function goHome() {
    const { id } = params;

    if (!id) return;

    dispatch(
      updatePomodoroRequest(id, {
        totalPomodoroCompleted: totalPomodoroCompleted,
        totalTimePomodoro: totalPomodoroTime,
      })
    );
    navigate("/");
  }

  function goHomeNotUser() {
    navigate("/");
  }

  return (
    <ThemeProvider theme={theme}>
      <PomodoroPage>
        <Header>
          <Logo justify_content="left" />

          <button onClick={user ? goHome : goHomeNotUser}>
            {user ? "Back to panel" : "Back to home"}
          </button>
        </Header>
        <PomodoroTimer
          user={user}
          setTheme={setTheme}
          totalPomodoroCompleted={totalPomodoroCompleted}
          totalPomodoroTime={totalPomodoroTime}
          setTotalPomodoroCompleted={setTotalPomodoroCompleted}
          setTotalPomodoroTime={setTotalPomodoroTime}
        />
      </PomodoroPage>
    </ThemeProvider>
  );
};

export default PomodoroApp;
