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
  width: 455px;
  height: 220px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;

  a {
    text-decoration: none;
    color: black;
    position: relative;
    z-index: 9997;
  }

  h3 {
    font-size: 28px;
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: auto;
  }

  span {
    font-size: 40px;
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

export const ActionBtns = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 9998;
  top: 20px;
  right: 20px;
`;

export const LoadingTag = styled.h2`
  margin: auto;
  font-size: 30px;
  color: #121331;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 150px;
  height: 40px;
`;

export const SkeletonPomodoro = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0.5);
  width: 455px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(59, 59, 59, 0.5);

  button {
    background-color: transparent;
    border: none;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
