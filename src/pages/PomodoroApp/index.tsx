import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { Header, PomodoroPage } from "./styled";
import PomodoroTimer from "../../components/PomodoroTimer";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { workingTheme } from "../../theme";
import { Theme } from "./protocol";

const PomodoroApp = () => {
  const [theme, setTheme] = useState<Theme>(workingTheme);

  return (
    <ThemeProvider theme={theme}>
      <PomodoroPage>
        <Header>
          <Logo justify_content="left" />

          <Link to="/">Back to panel</Link>
        </Header>
        <PomodoroTimer setTheme={setTheme} />
      </PomodoroPage>
    </ThemeProvider>
  );
};

export default PomodoroApp;
