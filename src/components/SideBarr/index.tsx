import { FunctionComponent } from "react";
import { BiTimeFive } from "react-icons/bi";
import { MdTimeline } from "react-icons/md";
import { useSelector } from "react-redux";
import { Aside, Container } from "./styled";
import Logo from "../Logo";
import { State } from "../../store/protocol";

const SideBarr: FunctionComponent = () => {
  const { user } = useSelector((state: State) => state.UserReducer);

  if (!user) return <></>;

  return (
    <Aside>
      <Container>
        <Logo justify_content="center" />
        <div>
          <h3>Navigation</h3>
          <ul>
            <li>
              <span>
                <BiTimeFive size="22" />
              </span>
              Pomodoros
            </li>
            <li>
              <span>
                <MdTimeline size="22" />
              </span>
              Historic
            </li>
          </ul>
        </div>
      </Container>
    </Aside>
  );
};

export default SideBarr;
