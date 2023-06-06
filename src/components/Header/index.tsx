import { FunctionComponent, useState } from "react";
import {
  Button,
  Container,
  ContainerNoUser,
  HeaderTag,
  UserMenu,
} from "./styled";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Header: FunctionComponent = () => {
  const [showMenuUser, setShowMenuUser] = useState(false);
  const { user } = useSelector((state: any) => state.UserReducer);

  return (
    <HeaderTag>
      {user ? (
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
      ) : (
        <ContainerNoUser>
          <div>
            <Logo />
          </div>

          <Link to="/login">Login</Link>
        </ContainerNoUser>
      )}
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
