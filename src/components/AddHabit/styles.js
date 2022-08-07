import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 18px;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  > img {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 18px;
  margin-top: 20px;

  .containerDays {
    display: flex;
    gap: 4px;
    margin-top: 8px;
    margin-bottom: 36px;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;

    p {
      cursor: pointer;
      font-weight: 400;
      font-size: 15.976px;
      line-height: 20px;
      text-align: center;
      color: #52b6ff;
    }

    button {
      width: 84px;
      height: 35px;
      font-weight: 400;
      font-size: 15.976px;
      line-height: 20px;
    }
  }
`;

export const ButtonDay = styled.button`
  all: unset;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 1px solid ${({ selected }) => (selected ? "transparent" : "#d5d5d5")};
  border-radius: 5px;
  background: ${({ selected }) => (selected ? " #CFCFCF" : "#FFFFFF")};
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: ${({ selected }) => (selected ? "#FFFFFF" : "#dbdbdb")};
  text-align: center;
`;
