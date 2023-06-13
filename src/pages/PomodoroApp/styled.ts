import styled from "styled-components";

export const Header = styled.header`
  padding: 30px;
  margin: auto;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellow;
  }

  button {
    width: 25%;
    padding: 8px 0px;
    font-size: 17px;
    border-radius: 20px;
    border: none;
    background-color: #121331;
    color: white;
    font-weight: lighter;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: rgba(18, 19, 49, 0.9);
    }
  }
`;
