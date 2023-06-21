import styled from "styled-components";

export const Aside = styled.aside`
  position: absolute;
  width: 25%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  top: 0;
  height: 100vh;
  z-index: 9999;
  background-color: white;

  a {
    text-decoration: none;
    color: black;
  }

  ul {
    margin-top: 30px;
    list-style: none;
    font-size: 19px;
    padding: 0;
    width: 80%;
  }
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;

  div {
    margin-top: 40px;

    h3 {
      color: #9e9e9e;
    }
  }

  li {
    margin-top: 10px;
    display: flex;
    transition: 0.3s;

    span {
      margin-top: 0.5px;
      margin-right: 10px;
    }

    &:hover {
      color: #545454;
      cursor: pointer;
    }
  }
`;
