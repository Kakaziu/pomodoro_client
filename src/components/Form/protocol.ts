import { IconType } from "react-icons";

export interface Camp {
  type: string;
  inputType: string;
}

export interface IForm {
  type: string;
  camps: Camp[];
}
