import styled from "styled-components";

export const PomodoroPage = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  transition: 0.3s;
`;

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
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 10px black;
    color: white;
    font-weight: lighter;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 0 10px;
    }
  }
`;
