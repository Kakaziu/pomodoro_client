import styled from "styled-components";

export const HeaderTag = styled.header`
  color: #121331;
  padding: 20px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  h2 {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-bottom: 3px;
      margin-left: 10px;
    }
  }
`;

export const Container = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-bottom: 3px;
      margin-left: 10px;
    }
  }

  div {
    display: flex;
    align-items: flex-end;

    span {
      margin-right: 15px;
      font-size: 17px;
    }
  }
`;
