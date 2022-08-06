import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > section {
    height: calc(100vh - 140px);
  }
`;
