import styled from "styled-components";

export const AccountTag = styled.div`
  display: flex;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: white;
  width: 900px;
  border-radius: 10px;
  height: 450px;
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
    text-align: center;
    font-weight: lighter;
  }
`;
