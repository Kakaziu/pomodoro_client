import styled from "styled-components";
import { IModalTag } from "./protocol";

export const ModalTag = styled.div<IModalTag>`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  display: ${(props) => (props.showModal ? "flex" : "none")};
`;
