import FormLogin from "../../components/Forms/FormLogin";
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
        <FormLogin />
      </AccountTag>
    </section>
  );
};

export default Login;
