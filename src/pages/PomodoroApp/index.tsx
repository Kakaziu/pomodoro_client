import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { Header, PomodoroPage } from "./styled";
import PomodoroTimer from "../../components/PomodoroTimer";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { workingTheme, shortRestingTheme, longRestingTheme } from "../../theme";

const PomodoroApp = () => {
  const [theme, setTheme] = useState("Working");

  return (
    <ThemeProvider theme={longRestingTheme}>
      <PomodoroPage>
        <Header>
          <Logo justify_content="left" />

          <Link to="/">Back to panel</Link>
        </Header>
        <PomodoroTimer />
      </PomodoroPage>
    </ThemeProvider>
  );
};

export default PomodoroApp;
