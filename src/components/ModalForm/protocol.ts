import { Dispatch, SetStateAction } from "react";

export interface IModalForm {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}
