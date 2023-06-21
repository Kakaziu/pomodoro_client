import styled from "styled-components";

export const HistoricInfosTag = styled.div`
  float: right;
  width: 75%;
`;

export const Title = styled.div`
  background-color: #121331;
  text-align: center;
  color: white;
  padding: 30px;

  h1 {
    font-size: 25px;
  }

  p {
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const Infos = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 480px;
  justify-content: space-around;
`;

export const InfoCircle = styled.div`
  border: 3px solid #e3e3e3;
  width: 270px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 140px;
  justify-content: center;

  p {
    font-size: 20px;
    font-weight: lighter;
    margin: 10px 0px;
  }

  span {
    font-weight: bold;
    font-size: 22px;
  }
`;
