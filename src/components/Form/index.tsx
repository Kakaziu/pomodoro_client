import React, { FunctionComponent, useState } from "react";
import { Button } from "../Button/styled";
import { FormTag, Camp } from "./styled";
import { IForm } from "./protocol";
import IconType from "../IconType";

const Form: FunctionComponent<IForm> = ({ type, camps }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChangeInput(type: string, e: React.ChangeEvent<HTMLInputElement>) {
    if (type === "Firstname") setFirstName(e.target.value);
    if (type === "Lastname") setLastName(e.target.value);
    if (type === "E-mail") setEmail(e.target.value);
    if (type === "Password") setPassword(e.target.value);
  }

  return (
    <FormTag>
      <h1>{type === "REGISTER" ? "SIGN UP" : "SIGN IN"}</h1>
      {camps.map((camp) => {
        return (
          <Camp key={camp.type}>
            <span>
              <IconType type={camp.type} />
            </span>
            <input
              type={camp.inputType}
              placeholder={camp.type}
              onChange={(e) => onChangeInput(camp.type, e)}
            />
          </Camp>
        );
      })}

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
