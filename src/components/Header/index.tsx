import { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../Logo";
import { IHeader } from "./protocol";
import { logout } from "../../store/modules/user/userActions/logoutActions";
import { State } from "../../store/protocol";
import {
  Button,
  Container,
  ContainerNoUser,
  HeaderTag,
  UserMenu,
} from "./styled";

const Header: FunctionComponent<IHeader> = ({ setShowModal }) => {
  const { user } = useSelector((state: State) => state.UserReducer);
  const [showMenuUser, setShowMenuUser] = useState(false);
  const dispatch = useDispatch();

  function handlelogout() {
    dispatch(logout());
    localStorage.removeItem("token");
    setShowMenuUser(false);
  }

  return (
    <HeaderTag>
      {user ? (
        <Container>
          <div>
            <span>Hello {user.firstName + " " + user.lastName}!</span>
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
        <Button
          background="#0062ff"
          hoverColor="#004bc4"
          onClick={() => {
            setShowModal(true);
            setShowMenuUser(false);
          }}
        >
          Criar pomodoro
        </Button>
        <Button
          background="#ed0c1b"
          hoverColor="#b30914"
          onClick={handlelogout}
        >
          Logout
        </Button>
      </UserMenu>
    </HeaderTag>
  );
};

export default Header;
