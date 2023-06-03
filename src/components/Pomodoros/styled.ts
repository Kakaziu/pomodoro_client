import styled from "styled-components";

export const PomodorosTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  overflow-y: scroll;
  height: 72.5vh;
  padding: 30px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black;
    width: 5px;
    border-radius: 10px;
  }
`;

export const Pomodoro = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0.5);
  width: 420px;
  text-align: center;

  h3 {
    font-size: 23px;
  }

  span {
    font-size: 35px;
    font-weight: bold;
    display: block;
    margin-top: 15px;
  }
`;

export const PomodoroInfos = styled.div`
  margin-top: 30px;
  display: flex;

  div {
    .tp {
      color: red;
    }

    .ts {
      color: #34a4eb;
    }

    .tl {
      color: #270091;
    }

    .pc {
      color: green;
    }
  }

  span {
    font-size: 15px;
    margin-top: 5px;
  }
`;
