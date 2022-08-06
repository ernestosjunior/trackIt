import { StyledInput } from "./styles";

const Input = ({ type = "text", placeholder, onChange, disabled }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  );
};

export default Input;
