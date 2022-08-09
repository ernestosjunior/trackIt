import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #d5d5d5;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 19.976px;
  color: #666666;

  ::placeholder {
    color: #dbdbdb;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
  }

  :focus {
    outline: none;
  }

  :disabled {
    background: #f2f2f2;
  }
`;
