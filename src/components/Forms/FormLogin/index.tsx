import { FormEvent, FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/styled";
import { FormTag, Camp } from "../styled";
import ReactLoading from "react-loading";
import { IForm, Inputs, LoginParams, StateCamps } from "../protocol";
import IconType from "../../IconType";
import { loginRequest } from "../../../store/modules/user/userActions";
import { useSelector } from "react-redux";

const Form: FunctionComponent<IForm> = ({ camps }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: any) => state.UserReducer);

  const [email, setEmail] = useState<StateCamps>({ value: "", error: "" });
  const [password, setPassword] = useState<StateCamps>({
    value: "",
    error: "",
  });

  function findState(type: Inputs) {
    if (type === "E-mail") return { type: email, setFuncType: setEmail };
    if (type === "Password")
      return { type: password, setFuncType: setPassword };
  }

  async function handleSubmitLogin(e: FormEvent): Promise<void> {
    e.preventDefault();

    validCamps(email.value, setEmail, "E-mail");
    validCamps(password.value, setPassword, "Password");

    const data: LoginParams = {
      email: email.value,
      password: password.value,
    };

    if (email.value && password.value) {
      dispatch(loginRequest(data));
    }
  }

  function validCamps(
    value: string,
    setFunc: React.Dispatch<React.SetStateAction<StateCamps>>,
    camp: Inputs
  ) {
    if (!value)
      return setFunc({ value: "", error: `* O campo '${camp}' está vazio` });
  }

  return (
    <FormTag onSubmit={handleSubmitLogin}>
      <h1>SIGN IN</h1>
      {camps.map((camp) => {
        return (
          <Camp key={camp.type}>
            <span>
              <IconType type={camp.type} />
            </span>
            <input
              type={camp.inputType}
              placeholder={camp.type}
              onChange={(e) =>
                findState(camp.type)?.setFuncType({
                  value: e.target.value,
                  error: "",
                })
              }
              value={findState(camp.type)?.type.value}
            />
            <p>{findState(camp.type)?.type.error}</p>
          </Camp>
        );
      })}

      <Button
        width="35%"
        border={{ haveBorder: false }}
        backgroundColor="#121331"
        color="white"
        hoverBackgroundColor="rgba(18, 19, 49, 0.9)"
        hoverColor="white"
      >
        SIGN IN
        {loading ? (
          <span>
            <ReactLoading
              type="spin"
              color="white"
              height="20px"
              width="20px"
            />
          </span>
        ) : (
          <></>
        )}
      </Button>
    </FormTag>
  );
};

export default Form;
