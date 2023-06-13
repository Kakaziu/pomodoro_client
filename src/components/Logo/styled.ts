import styled from "styled-components";
import { ILogo } from "./protocol";

export const LogoTag = styled.h2<ILogo>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justify_content};
  width: 100%;

  span {
    margin-bottom: 3px;
    margin-right: 10px;
  }
`;
