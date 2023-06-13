import { Dispatch, SetStateAction } from "react";
import { User } from "../../store/modules/user/protocol";

export interface IHomeInfos {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export interface IHomeInfosTag {
  user: User | null;
}
