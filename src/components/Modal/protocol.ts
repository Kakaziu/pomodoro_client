import { Dispatch, SetStateAction } from "react";

export interface IModal {
  children: JSX.Element;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export interface IModalTag {
  showModal: boolean;
}
