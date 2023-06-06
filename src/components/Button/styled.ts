import styled from "styled-components";
import { IBorder, IButton } from "./protocol";

export const Button = styled.button<IButton<IBorder>>`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  position: relative;
  border-radius: 20px;
  padding: 10px 0px;
  transition: 0.3s;
  cursor: pointer;
  width: ${(props) => props.width};
  border: ${(props) =>
    props.border.haveBorder
      ? `${props.border.size} ${props.border.type} ${props.border.color}`
      : "none"};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
  }

  span {
    position: absolute;
    right: 30px;
  }
`;
