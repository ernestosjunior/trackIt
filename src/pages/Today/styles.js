import styled from "styled-components";

export const HeaderPage = styled.section`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126ba5;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: ${({ hasPercent }) => (hasPercent ? "#8FC549" : "#bababa")};
`;
