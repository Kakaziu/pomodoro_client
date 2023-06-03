import { FunctionComponent } from "react";
import { Container, HeaderTag } from "./styled";
import { FaUserCircle } from "react-icons/fa";

const Header: FunctionComponent = () => {
  return (
    <HeaderTag>
      <Container>
        <div>
          <span>Olá, Kauã Borba</span>
          <FaUserCircle size="30" cursor="pointer" />
        </div>
      </Container>
    </HeaderTag>
  );
};

export default Header;
