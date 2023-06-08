import { Dispatch, SetStateAction } from "react";

export interface IHeader {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export interface IButton {
  background: string;
  hoverColor: string;
}

export interface IUserMenu {
  opacity: number;
  height: string;
}
