import { useNavigate } from "react-router-dom";
import { StyledLink } from "./styles";

const Link = ({ label, path }) => {
  const navigate = useNavigate();
  return <StyledLink onClick={() => navigate(path)}>{label}</StyledLink>;
};

export default Link;
