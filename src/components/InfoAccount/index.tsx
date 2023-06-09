import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/styled";
import { IInfoAccount } from "./protocol";
import { InfoAccountTag } from "./styled";

const InfoAccount: FunctionComponent<IInfoAccount> = ({ type }) => {
  const navigate = useNavigate();

  return (
    <InfoAccountTag>
      <h2>Welcome to UPomodoro</h2>
      <p>
        {type === "REGISTER"
          ? "To keep conected with us Please login in your personal account"
          : "If you not have an account, create one"}
      </p>
      <Button
        width="50%"
        border={{
          haveBorder: true,
          size: "2px",
          type: "solid",
          color: "white",
        }}
        backgroundColor="transparent"
        color="white"
        hoverBackgroundColor="white"
        hoverColor="#121331"
        onClick={
          type === "REGISTER"
            ? () => navigate("/login")
            : () => navigate("/register")
        }
      >
        {type === "REGISTER" ? "SIGN IN" : "SIGN UP"}
      </Button>
    </InfoAccountTag>
  );
};

export default InfoAccount;
