import styled from "styled-components";

export const ContentHomeTag = styled.div``;

export const ContentNoUser = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    padding: 10px;
    width: 30%;
    font-size: 20px;
    border: none;
    border-radius: 4px;
    color: white;
    background-color: #121331;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: rgba(18, 19, 49, 0.9);
    }

    @media(max-width: 850px) {
      width: 60%;
      font-size: 16px;
    }
  }
`;
