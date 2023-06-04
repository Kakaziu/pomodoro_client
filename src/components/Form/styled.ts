import styled from "styled-components";

export const FormTag = styled.form`
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;

  h1 {
    color: #121331;
    margin-bottom: 35px;
  }
`;

export const Camp = styled.div`
  margin-bottom: 15px;
  width: 100%;
  text-align: center;
  position: relative;

  span {
    position: absolute;
    top: 9px;
    left: 90px;
  }

  input {
    padding: 10px 15px 10px 45px;
    width: 70%;
    border-radius: 20px;
    border: none;
    background-color: #ccc;
    font-size: 16px;

    &:focus {
      outline: 1px solid #121331;
    }

    &::placeholder {
      font-weight: bold;
    }
  }
`;
