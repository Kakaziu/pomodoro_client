import { FunctionComponent } from "react";
import { ContentNoUser, HomeInfosTag, TitlePag } from "./styled";
import Pomodoros from "../Pomodoros";
import { useSelector } from "react-redux";
import { State } from "../../store/protocol";
import { IHomeInfos } from "./protocol";
import { useNavigate } from "react-router-dom";

const HomeInfos: FunctionComponent<IHomeInfos> = ({ setShowModal }) => {
  const { user } = useSelector((state: State) => state.UserReducer);
  const navigate = useNavigate();

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
            style={{ width: "350px", height: "350px" }}
          ></lord-icon>
          <button onClick={() => navigate("/pomodoro")}>
            CREATE DEFAULT POMODORO
          </button>
        </ContentNoUser>
      )}
    </HomeInfosTag>
  );
};

export default HomeInfos;
