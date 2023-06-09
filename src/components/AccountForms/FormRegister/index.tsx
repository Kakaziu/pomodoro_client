import { FormEvent, FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import { RiUserFill, RiUser2Fill } from "react-icons/ri";
import { AiFillMail, AiFillLock } from "react-icons/ai";
import { Button } from "../../Button/styled";
import api from "../../../services/api";
import { RegisterParams, StateCamps } from "../protocol";
import { FormTag, Camp } from "../styled";
import validEmptyCamps from "../../../utils/validEmptyCamps";
import validEmail from "../../../utils/validEmail";

const FormRegister: FunctionComponent = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<StateCamps>({
    value: "",
    error: "",
  });
  const [lastName, setLastName] = useState<StateCamps>({
    value: "",
    error: "",
  });
  const [email, setEmail] = useState<StateCamps>({ value: "", error: "" });
  const [password, setPassword] = useState<StateCamps>({
    value: "",
    error: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmitRegister(e: FormEvent): Promise<void> {
    e.preventDefault();

    validEmptyCamps(setFirstName, firstName);
    validEmptyCamps(setLastName, lastName);
    validEmptyCamps(setEmail, email);
    validEmptyCamps(setPassword, password);

    if (!validEmail(email.value))
      return setEmail({ value: "", error: "E-mail inválido." });

    const data: RegisterParams = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };

    if (firstName.value && lastName.value && email.value && password.value) {
      try {
        setLoading(true);
        const response = await api.post("/users", data);

        if (response.status === 201) {
          navigate("/login");
        }
      } catch (e: any) {
        toast.error(e.response.data.message);
      }
    }
  }

  return (
    <FormTag onSubmit={handleSubmitRegister}>
      <h1>SIGN UP</h1>
      <Camp>
        <span>
          <RiUserFill size="22" color="#121331" />
        </span>
        <input
          type="text"
          placeholder="Firstname"
          onChange={(e) =>
            setFirstName({
              value: e.target.value,
              error: "",
            })
          }
          value={firstName.value}
        />
        <p>{firstName.error}</p>
      </Camp>

      <Camp>
        <span>
          <RiUser2Fill size="22" color="#121331" />
        </span>
        <input
          type="text"
          placeholder="Lastname"
          onChange={(e) =>
            setLastName({
              value: e.target.value,
              error: "",
            })
          }
          value={lastName.value}
        />
        <p>{lastName.error}</p>
      </Camp>

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
        SIGN UP
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

export default FormRegister;
