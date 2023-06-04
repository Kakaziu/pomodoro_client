import { FunctionComponent } from "react";
import { HomeInfosTag, TitlePag } from "./styled";
import Pomodoros from "../Pomodoros";

const HomeInfos: FunctionComponent = () => {
  return (
    <HomeInfosTag>
      <TitlePag>
        <div>
          <h1>UPOMODORO</h1>
          <p>Create custom pomodoros for different tasks</p>
        </div>
      </TitlePag>

      <Pomodoros />
    </HomeInfosTag>
  );
};

export default HomeInfos;
