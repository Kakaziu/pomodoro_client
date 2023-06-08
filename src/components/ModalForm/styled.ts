import styled from "styled-components";

export const Form = styled.form`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: white;
  border-radius: 4px;
  padding: 30px;
  width: 450px;
  text-align: center;

  button {
    margin-top: 30px;
    width: 100%;
    padding: 10px 0px;
    border: none;
    border-radius: 4px;
    background-color: #0ee363;
    color: white;
  }
`;

export const Camps = styled.div`
  margin-top: 40px;
`;

export const Camp = styled.div`
  input {
    border: none;
    border-bottom: 2px solid #ccc;
    font-size: 17px;
    text-align: center;
    padding: 0px 10px;
    width: 100%;
    outline: 0;

    &:focus {
      border-bottom: 2px solid black;
    }
  }
`;

export const TimeCamps = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const TimeCamp = styled.div`
  span {
    font-size: 14px;
    margin-bottom: 5px;
    display: block;
  }

  input {
    width: 60px;
    height: 40px;
    padding: 20px;
    outline: 0;

    &:focus {
      border: 2px solid blue;
    }
  }
`;
