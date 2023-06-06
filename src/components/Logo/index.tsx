import { FunctionComponent } from "react";
import { LogoTag } from "./styled";

const Logo: FunctionComponent = () => {
  return (
    <LogoTag>
      <span>UPomodoro</span>
      <lord-icon
        src="https://cdn.lordicon.com/qmuwmmnl.json"
        trigger="loop"
        delay="2000"
        colors="primary:#121331"
        style={{ width: "35px", height: "35px" }}
      ></lord-icon>
    </LogoTag>
  );
};

export default Logo;
