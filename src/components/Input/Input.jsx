import { StyledInput } from "./styles";

const Input = ({ type = "text", placeholder, onChange, disabled, id }) => {
  return (
    <StyledInput
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(id, e.target.value)}
      disabled={disabled}
    />
  );
};

export default Input;
