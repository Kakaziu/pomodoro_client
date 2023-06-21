import { FunctionComponent } from "react";
import { ContentHomeTag, ContentNoUser } from "./styled";
import Pomodoros from "../Pomodoros";
import { useSelector } from "react-redux";
import { State } from "../../store/protocol";
import { useNavigate } from "react-router-dom";
import { IHomeContent } from "./protocol";

const HomeContent: FunctionComponent<IHomeContent> = ({ setShowModal }) => {
  const { user } = useSelector((state: State) => state.UserReducer);
  const navigate = useNavigate();

  return (
    <ContentHomeTag>
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
    </ContentHomeTag>
  );
};

export default HomeContent;
