import Logo from "../../components/Logo";
import { Header } from "./styled";

const PomodoroApp = () => {
  return (
    <Header>
      <Logo justify_content="left" />

      <button>Back to panel</button>
    </Header>
  );
};

export default PomodoroApp;
