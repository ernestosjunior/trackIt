import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.section`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 32px;
  }

  input {
    margin-bottom: 8px;
  }

  button {
    margin-bottom: 25px;
  }

  @media (max-width: 1024px) {
    width: 90vw;
  }
`;
