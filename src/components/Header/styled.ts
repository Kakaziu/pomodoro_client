import styled from "styled-components";
import { IButton, IUserMenu } from "./protocol";

export const HeaderTag = styled.header`
  color: #121331;
  padding: 20px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;

  div {
    display: flex;
    align-items: flex-end;
    justify-content: right;

    span {
      margin-right: 15px;
      font-size: 17px;
    }
  }
`;

export const ContainerNoUser = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  align-items: center;
  justify-content: space-between;

  a {
    width: 10%;
    text-decoration: none;
    display: block;
    text-align: center;
    cursor: pointer;
    padding: 8px 0px;
    border-radius: 20px;
    background-color: #121331;
    border: none;
    font-size: 18px;
    color: white;
    transition: 0.3s;

    &:hover {
      background-color: rgba(18, 19, 49, 0.9);
    }

    @media (max-width: 850px) {
      width: 30%;
      font-size: 14px;
    }
  }
`;

export const UserMenu = styled.div<IUserMenu>`
  position: absolute;
  right: 80px;
  top: 65px;
  background-color: white;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  overflow: hidden;
  height: ${(props) => props.height};
  opacity: ${(props) => props.opacity};
`;

export const Button = styled.button<IButton>`
  padding: 8px 20px;
  font-size: 17px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.background};
  color: white;
  margin: 10px 0px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
