import styled from "styled-components";

export const Container = styled.section`
  padding: 18px;
`;

export const Card = styled.article`
  background: #ffffff;
  border-radius: 5px;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    h1 {
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      color: #666666;
      margin-bottom: 7px;
    }
  }
  span {
    display: flex;
    gap: 4px;
  }
  p {
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }
`;

export const Check = styled.div`
  cursor: pointer;
  width: 69px;
  height: 69px;
  border-radius: 5px;
  background: ${({ selected }) => (selected ? "#8FC549" : " #EBEBEB")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
