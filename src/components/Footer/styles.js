import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  z-index: 4;

  .CircularProgressbar {
    width: 90px;
    height: 90px;
    position: absolute;
    bottom: 10px;
    z-index: 4;
  }

  .CircularProgressbar-text {
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
  }
`;

export const Option = styled.button`
  all: unset;
  cursor: pointer;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  text-align: center;
  color: #52b6ff;
`;
