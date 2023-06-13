import { FunctionComponent } from "react";
import { LogoTag } from "./styled";
import { ILogoTag } from "./protocol";

const Logo: FunctionComponent<ILogoTag> = ({ justify_content }) => {
  return (
    <LogoTag justify_content={justify_content}>
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
