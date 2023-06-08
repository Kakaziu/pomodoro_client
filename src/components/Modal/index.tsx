import { FunctionComponent } from "react";
import { ModalTag } from "./styled";
import { IModal } from "./protocol";

const Modal: FunctionComponent<IModal> = ({
  children,
  showModal,
  setShowModal,
}) => {
  function onHideModal(e: any) {
    const target = e.target;

    if (target.id === "modal") setShowModal(false);
  }

  return (
    <ModalTag showModal={showModal} id="modal" onClick={onHideModal}>
      {children}
    </ModalTag>
  );
};

export default Modal;
