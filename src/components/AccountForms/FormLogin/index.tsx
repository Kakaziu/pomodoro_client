import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { AiFillLock, AiFillMail } from "react-icons/ai";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../../store/modules/user/userActions/loginAction";
import { State } from "../../../store/protocol";
import validEmail from "../../../utils/validEmail";
import isEmpty from "../../../utils/validEmptyCamps";
import { Button } from "../../Button/styled";
import { LoginParams, StateCamps } from "../protocol";
import { Camp, FormTag } from "../styled";

const FormLogin: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: State) => state.UserReducer);

  const [email, setEmail] = useState<StateCamps>({ value: "", error: "" });
  const [password, setPassword] = useState<StateCamps>({
    value: "",
    error: "",
  });

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  async function handleSubmitLogin(e: FormEvent): Promise<void> {
    e.preventDefault();

    if (isEmpty(email.value)) return setEmail({ value: "", error: "* Campo vazio." });
    if (isEmpty(password.value)) return setPassword({ value: "", error: "* Campo vazio." });
    if (!validEmail(email.value))
      return setEmail({ value: "", error: "E-mail inválido." });

    const data: LoginParams = {
      email: email.value,
      password: password.value,
    };

    if (email.value && password.value) {
      dispatch(loginRequest(data));
    }
  }

  return (
    <FormTag onSubmit={handleSubmitLogin}>
      <h1>SIGN IN</h1>
      <Camp>
        <span>
          <AiFillMail size="22" color="#121331" />
        </span>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) =>
            setEmail({
              value: e.target.value,
              error: "",
            })
          }
          value={email.value}
        />
        <p>{email.error}</p>
      </Camp>
      <Camp>
        <span>
          <AiFillLock size="22" color="#121331" />
        </span>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword({
              value: e.target.value,
              error: "",
            })
          }
          value={password.value}
        />
        <p>{password.error}</p>
      </Camp>

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

export default FormLogin;
