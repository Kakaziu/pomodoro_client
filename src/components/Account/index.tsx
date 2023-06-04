import { AccountTag, Button, Camp, Form, InfoAccount } from "./styled";

const Account = () => {
  return (
    <AccountTag>
      <InfoAccount>
        <h2>Welcome to UPomodoro</h2>
        <p>To keep conected with us</p>
        <p>Please login in your personal account</p>
        <Button
          width="50%"
          border={{
            haveBorder: true,
            size: "2px",
            type: "solid",
            color: "white",
          }}
          backgroundColor="transparent"
          color="white"
          hoverBackgroundColor="white"
          hoverColor="#121331"
        >
          SIGN IN
        </Button>
      </InfoAccount>

      <Form>
        <h1>Sign Up</h1>
        <Camp>
          <input type="text" placeholder="Firstname" />
        </Camp>

        <Camp>
          <input type="text" placeholder="Lastname" />
        </Camp>

        <Camp>
          <input type="email" placeholder="E-mail" />
        </Camp>

        <Camp>
          <input type="password" placeholder="Password" />
        </Camp>

        <Button
          width="35%"
          border={{ haveBorder: false }}
          backgroundColor="#121331"
          color="white"
        >
          SIGN UP
        </Button>
      </Form>
    </AccountTag>
  );
};

export default Account;
