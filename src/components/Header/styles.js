import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
`;

export const Logo = styled.img`
  width: 97px;
  height: 49px;
`;

export const Avatar = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  object-fit: cover;
`;
