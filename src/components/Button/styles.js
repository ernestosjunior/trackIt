import styled from "styled-components";

export const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 45px;
  background: #52b6ff;
  border-radius: 4.63636px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20.976px;
  line-height: 26px;
  text-align: center;

  :disabled {
    opacity: 0.7;
  }
`;
