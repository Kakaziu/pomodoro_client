import { FunctionComponent } from "react";
import { ModalTag } from "./styled";
import { IModal } from "./protocol";

const Modal: FunctionComponent<IModal> = ({ children }) => {
  return <ModalTag>{children}</ModalTag>;
};

export default Modal;
