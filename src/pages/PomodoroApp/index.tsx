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

const PomodoroApp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [theme, setTheme] = useState<Theme>(workingTheme);
  const [totalPomodoroCompleted, setTotalPomodoroCompleted] = useState(0);

  function goHome() {
    const { id } = params;

    if (!id) return;

    dispatch(
      updatePomodoroRequest(id, {
        totalPomodoroCompleted: totalPomodoroCompleted,
      })
    );
    navigate("/");
  }

  return (
    <ThemeProvider theme={theme}>
      <PomodoroPage>
        <Header>
          <Logo justify_content="left" />

          <button onClick={goHome}>Back to panel</button>
        </Header>
        <PomodoroTimer
          setTheme={setTheme}
          totalPomodoroCompleted={totalPomodoroCompleted}
          setTotalPomodoroCompleted={setTotalPomodoroCompleted}
        />
      </PomodoroPage>
    </ThemeProvider>
  );
};

export default PomodoroApp;
