import Form from "../../components/Form";
import InfoAccount from "../../components/InfoAccount";
import { AccountTag } from "./styled";

const Register = () => {
  return (
    <section
      id="register"
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
        <InfoAccount type="REGISTER" />
        <Form
          type="REGISTER"
          camps={[
            {
              type: "Firstname",
              inputType: "text",
            },

            {
              type: "Lastname",
              inputType: "text",
            },

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

export default Register;
