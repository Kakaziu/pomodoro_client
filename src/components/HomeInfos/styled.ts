import styled from "styled-components";
import { IHomeInfosTag } from "./protocol";

export const HomeInfosTag = styled.div<IHomeInfosTag>`
  float: right;
  width: ${(props) => (props.user ? "75%" : "100%")};
`;

export const TitlePag = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #ccc;
  position: relative;
  z-index: 9998;

  h1 {
    color: #121331;
  }

  p {
    margin-top: 10px;
    font-size: 17px;
  }
`;

export const ContentNoUser = styled.div`
  width: 100%;
  text-align: center;
`;
