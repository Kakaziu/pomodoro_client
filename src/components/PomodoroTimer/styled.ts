import styled from "styled-components";

export const PomodoroTimerTag = styled.div`
  width: 640px;
  margin: auto;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 50px;
  border-radius: 10px;
  padding: 30px;

  div {
    display: flex;
    justify-content: space-around;

    button {
      padding: 8px 20px;
      background-color: white;
      border: none;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.2);
      color: white;
      font-size: 17px;
      cursor: pointer;
    }
  }
`;
