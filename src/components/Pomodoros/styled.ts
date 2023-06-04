import styled from "styled-components";

export const PomodorosTag = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  width: 460px;
  height: 220px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 23px;
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: auto;

    div {
      width: 60px;
      display: flex;
      justify-content: space-between;
    }
  }

  span {
    font-size: 35px;
    font-weight: bold;
    display: block;
    margin-top: 15px;
  }

  &:hover {
    outline: 2px solid #121331;
  }
`;

export const PomodoroInfos = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  div {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;

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
    width: 70%;
    font-size: 15px;
    margin-top: 5px;
  }
`;
