import { FunctionComponent } from "react";
import { Button } from "../Button/styled";
import { AccountTag, InfoAccount } from "./styled";
import { IAccount } from "./protocol";
import Form from "../Form";

const Account: FunctionComponent<IAccount> = ({ type }) => {
  return (
    <AccountTag>
      <InfoAccount>
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
        >
          {type === "REGISTER" ? "SIGN IN" : "SIGN UP"}
        </Button>
      </InfoAccount>
      <Form
        type={type}
        camps={[
          {
            type: "Firstname",
            inputType: "text",
          },

          {
            type: "Lastname",
            inputType: "text",
          },

          {
            type: "E-mail",
            inputType: "email",
          },

          {
            type: "Password",
            inputType: "password",
          },
        ]}
      />
    </AccountTag>
  );
};

export default Account;
