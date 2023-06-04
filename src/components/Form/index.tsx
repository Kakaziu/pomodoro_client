import { FunctionComponent } from "react";
import { FormTag, Camp } from "./styled";
import { RiUserFill, RiUser2Fill } from "react-icons/ri";
import { AiFillMail, AiFillLock } from "react-icons/ai";
import { IForm } from "./protocol";

const Form: FunctionComponent<IForm> = ({ type }) => {
  return (
    <FormTag>
      <h1>{type === "REGISTER" ? "SIGN UP" : "SIGN IN"}</h1>
      <Camp>
        <span>
          <RiUserFill size="22" color="#121331" />
        </span>
        <input type="text" placeholder="Firstname" />
      </Camp>

      <Camp>
        <span>
          <RiUser2Fill size="22" color="#121331" />
        </span>
        <input type="text" placeholder="Lastname" />
      </Camp>

      <Camp>
        <span>
          <AiFillMail size="22" color="#121331" />
        </span>
        <input type="email" placeholder="E-mail" />
      </Camp>

      <Camp>
        <span>
          <AiFillLock size="22" color="#121331" />
        </span>
        <input type="password" placeholder="Password" />
      </Camp>

      <Button
        width="35%"
        border={{ haveBorder: false }}
        backgroundColor="#121331"
        color="white"
        hoverBackgroundColor="rgba(18, 19, 49, 0.9)"
        hoverColor="white"
      >
        {type === "REGISTER" ? "SIGN UP" : "SIGN IN"}
      </Button>
    </FormTag>
  );
};

export default Form;
