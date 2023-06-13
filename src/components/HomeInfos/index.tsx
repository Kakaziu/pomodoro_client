import { FunctionComponent } from "react";
import { ContentNoUser, HomeInfosTag, TitlePag } from "./styled";
import Pomodoros from "../Pomodoros";
import { useSelector } from "react-redux";
import { State } from "../../store/protocol";
import { IHomeInfos } from "./protocol";

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

      {user ? (
        <Pomodoros setShowModal={setShowModal} />
      ) : (
        <ContentNoUser>
          <lord-icon
            src="https://cdn.lordicon.com/mgmiqlge.json"
            trigger="loop"
            delay="2500"
            colors="primary:#3a3347,secondary:#f24c00,tertiary:#4bb3fd,quaternary:#ebe6ef"
            style={{ width: "420px", height: "420px" }}
          ></lord-icon>
        </ContentNoUser>
      )}
    </HomeInfosTag>
  );
};

export default HomeInfos;
