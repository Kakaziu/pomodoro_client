import Account from "../../components/Account";

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
      <Account type="REGISTER" />
    </section>
  );
};

export default Register;
