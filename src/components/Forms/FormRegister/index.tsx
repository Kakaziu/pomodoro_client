import { FormEvent, FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/styled";
import { FormTag, Camp } from "../styled";
import ReactLoading from "react-loading";
import { IForm, Inputs, RegisterParams, StateCamps } from "../protocol";
import IconType from "../../IconType";
import api from "../../../services/api";
import { toast } from "react-toastify";

const FormRegister: FunctionComponent<IForm> = ({ camps }) => {
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

  function findState(type: Inputs) {
    if (type === "Firstname")
      return { type: firstName, setFuncType: setFirstName };
    if (type === "Lastname")
      return { type: lastName, setFuncType: setLastName };
    if (type === "E-mail") return { type: email, setFuncType: setEmail };
    if (type === "Password")
      return { type: password, setFuncType: setPassword };
  }

  async function handleSubmitRegister(e: FormEvent): Promise<void> {
    e.preventDefault();

    validCamps(firstName.value, setFirstName, "Firstname");
    validCamps(lastName.value, setLastName, "Lastname");
    validCamps(email.value, setEmail, "E-mail");
    validCamps(password.value, setPassword, "Password");

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
          navigate("/");
        }
      } catch (e: any) {
        toast.error(e.response.data.message);
      }
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
    <FormTag onSubmit={handleSubmitRegister}>
      <h1>SIGN UP</h1>
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
