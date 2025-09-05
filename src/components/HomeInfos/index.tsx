import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/protocol";
import HomeContent from "../HomeContent";
import { IHomeInfos } from "./protocol";
import { HomeInfosTag, TitlePag } from "./styled";

const HomeInfos: FunctionComponent<IHomeInfos> = ({ setShowModal }) => {
  const { user } = useSelector((state: State) => state.UserReducer);

  return (
    <HomeInfosTag user={user}>
      <TitlePag>
        <div>
          <h1>UPOMODORO</h1>
          <p>Create custom pomodoros for different tasks</p>
        </div>
      </TitlePag>
      <HomeContent setShowModal={setShowModal} />
    </HomeInfosTag>
  );
};

export default HomeInfos;
