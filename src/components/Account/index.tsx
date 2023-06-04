import { FunctionComponent } from "react";
import { AccountTag } from "./styled";
import { IAccount } from "./protocol";
import Form from "../Form";
import InfoAccount from "../InfoAccount";

const Account: FunctionComponent<IAccount> = ({ type }) => {
  return (
    <AccountTag>
      <InfoAccount type={type} />
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
