import { RiUserFill, RiUser2Fill } from "react-icons/ri";
import { AiFillMail, AiFillLock } from "react-icons/ai";

interface IIconType {
  type: string;
}

const IconType: FunctionComponent<IIconType> = ({ type }) => {
  return (
    <>
      {type === "Firstname" ? <RiUserFill size="22" color="#121331" /> : <></>}
      {type === "Lastname" ? <RiUser2Fill size="22" color="#121331" /> : <></>}
      {type === "E-mail" ? <AiFillMail size="22" color="#121331" /> : <></>}
      {type === "Password" ? <AiFillLock size="22" color="#121331" /> : <></>}
    </>
  );
};

export default IconType;
