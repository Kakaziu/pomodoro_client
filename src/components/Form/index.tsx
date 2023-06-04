import { FunctionComponent } from "react";
import { Button } from "../Button/styled";
import { FormTag, Camp } from "./styled";
import { IForm } from "./protocol";
import IconType from "../IconType";

const Form: FunctionComponent<IForm> = ({ type, camps }) => {
  return (
    <FormTag>
      <h1>{type === "REGISTER" ? "SIGN UP" : "SIGN IN"}</h1>
      {camps.map((camp) => {
        return (
          <Camp>
            <span>
              <IconType type={camp.type} />
            </span>
            <input type={camp.inputType} placeholder={camp.type} />
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
