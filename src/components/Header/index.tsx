import { FunctionComponent, useState } from "react";
import { Button, Container, HeaderTag, UserMenu } from "./styled";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header: FunctionComponent = () => {
  const [showMenuUser, setShowMenuUser] = useState(false);
  const { user } = useSelector((state: any) => state.UserReducer);

  return (
    <HeaderTag>
      <Container>
        <div>
          {user ? (
            <>
              <span>Hello, Kauã Borba</span>
              <FaUserCircle
                size="30"
                cursor="pointer"
                onClick={() => setShowMenuUser(!showMenuUser)}
              />
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
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
