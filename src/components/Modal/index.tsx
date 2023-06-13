import { FunctionComponent } from "react";
import { ModalTag } from "./styled";
import { IModal } from "./protocol";
import { useDispatch } from "react-redux";

const Modal: FunctionComponent<IModal> = ({
  children,
  showModal,
  setShowModal,
}) => {
  const dispatch = useDispatch();

  function onHideModal(e: any) {
    const target = e.target;
    dispatch({ type: "RESET_POMODORO" });

    if (target.id === "modal") setShowModal(false);
  }

  return (
    <ModalTag showModal={showModal} id="modal" onClick={onHideModal}>
      {children}
    </ModalTag>
  );
};

export default Modal;
