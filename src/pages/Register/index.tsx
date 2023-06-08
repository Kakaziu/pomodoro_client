import FormRegister from "../../components/AccountForms/FormRegister";
import InfoAccount from "../../components/InfoAccount";
import { AccountTag } from "../styled";

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
        <FormRegister />
      </AccountTag>
    </section>
  );
};

export default Register;
