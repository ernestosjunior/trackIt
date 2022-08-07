import styled from "styled-components";

export const Container = styled.div`
  padding: 18px;
`;

export const Card = styled.article`
  padding: 18px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  position: relative;

  img {
    cursor: pointer;
    width: 15px;
    height: 15px;
    position: absolute;
    right: 10px;
    top: 10px;
  }

  h1 {
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    word-break: normal;
  }

  section {
    display: flex;
    gap: 4px;
    margin-top: 8px;
  }
`;
