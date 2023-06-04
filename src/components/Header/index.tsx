import { FunctionComponent, useState } from "react";
import { Button, Container, HeaderTag, UserMenu } from "./styled";
import { FaUserCircle } from "react-icons/fa";

const Header: FunctionComponent = () => {
  const [showMenuUser, setShowMenuUser] = useState(false);

  return (
    <HeaderTag>
      <Container>
        <div>
          <span>Hello, Kauã Borba</span>
          <FaUserCircle
            size="30"
            cursor="pointer"
            onClick={() => setShowMenuUser(!showMenuUser)}
          />
        </div>
      </Container>
      <UserMenu
        height={showMenuUser ? "140px" : "0px"}
        opacity={showMenuUser ? 1 : 0}
      >
        <Button background="#0062ff" hoverColor="#004bc4">
          Criar pomodoro
        </Button>
        <Button background="#ed0c1b" hoverColor="#b30914">
          Logout
        </Button>
      </UserMenu>
    </HeaderTag>
  );
};

export default Header;
