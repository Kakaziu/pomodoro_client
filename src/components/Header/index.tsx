import { FunctionComponent } from "react";
import { Container, HeaderTag } from "./styled";
import { FaUserCircle } from "react-icons/fa";

const Header: FunctionComponent = () => {
  return (
    <HeaderTag>
      <Container>
        <h2>
          <lord-icon
            src="https://cdn.lordicon.com/qmuwmmnl.json"
            trigger="loop"
            delay="2000"
            colors="primary:#121331"
            style={{ width: "35px", height: "35px" }}
          ></lord-icon>
          <span>UPomodoro</span>
        </h2>

        <div>
          <span>Olá, Kauã Borba</span>
          <FaUserCircle size="30" />
        </div>
      </Container>
    </HeaderTag>
  );
};

export default Header;
