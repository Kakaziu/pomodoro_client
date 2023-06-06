import Form from "../../components/Forms/FormRegister";
import InfoAccount from "../../components/InfoAccount";
import { AccountTag } from "../styled";

const Login = () => {
  return (
    <section
      id="login"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#ccc",
      }}
    >
      <AccountTag>
        <InfoAccount type="LOGIN" />
        <Form
          type="LOGIN"
          camps={[
            {
              type: "E-mail",
              inputType: "email",
            },

            {
              type: "Password",
              inputType: "password",
            },
          ]}
        />
      </AccountTag>
    </section>
  );
};

export default Login;
