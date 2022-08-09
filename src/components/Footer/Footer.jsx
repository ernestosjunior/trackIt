import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { StyledFooter, Option } from "./styles";

const Footer = ({ percentage }) => {
  const navigate = useNavigate();
  return (
    <StyledFooter>
      <Option>Hábitos</Option>
      <div className="redirect-container" onClick={() => navigate("../hoje")}>
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
      </div>
      <Option>Histórico</Option>
    </StyledFooter>
  );
};

export default Footer;
