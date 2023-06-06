import styled from "styled-components";
import { IHomeInfos } from "./protocol";

export const HomeInfosTag = styled.div<IHomeInfos>`
  float: right;
  width: ${(props) => (props.user ? "75%" : "100%")};
`;

export const TitlePag = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #ccc;

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
