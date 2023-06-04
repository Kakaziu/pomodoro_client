import styled from "styled-components";
import { IBorder, IButton } from "./protocol";

export const AccountTag = styled.div`
  display: flex;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: white;
  width: 900px;
  border-radius: 10px;
  height: 450px;
`;

export const Button = styled.button<IButton<IBorder>>`
  margin-top: 20px;
  border-radius: 20px;
  padding: 10px 0px;
  transition: 0.3s;
  cursor: pointer;
  width: ${(props) => props.width};
  border: ${(props) =>
    props.border.haveBorder
      ? `${props.border.size} ${props.border.type} ${props.border.color}`
      : "none"};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
  }
`;

export const InfoAccount = styled.div`
  width: 40%;
  background-color: #121331;
  color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  h2 {
    margin-bottom: 10px;
  }

  p {
    font-weight: lighter;
  }
`;

export const Form = styled.form`
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

  input {
    padding: 10px 15px;
    width: 60%;
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
