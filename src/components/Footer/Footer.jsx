import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { StyledFooter, Option } from "./styles";

const Footer = () => {
  const percentage = 66;
  return (
    <StyledFooter>
      <Option>Hábitos</Option>
      <CircularProgressbar
        value={percentage}
        text="Hoje"
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#52B6FF",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
        })}
      />
      <Option>Histórico</Option>
    </StyledFooter>
  );
};

export default Footer;
