import { FunctionComponent } from "react";
import { Aside, Container } from "./styled";
import { BiTimeFive } from "react-icons/bi";
import { MdTimeline } from "react-icons/md";

const SideBarr: FunctionComponent = () => {
  return (
    <Aside>
      <Container>
        <h2>
          <span>UPomodoro</span>
          <lord-icon
            src="https://cdn.lordicon.com/qmuwmmnl.json"
            trigger="loop"
            delay="2000"
            colors="primary:#121331"
            style={{ width: "35px", height: "35px" }}
          ></lord-icon>
        </h2>

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
