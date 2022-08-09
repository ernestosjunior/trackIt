import { StyledInput } from "./styles";

const Input = ({
  type = "text",
  placeholder,
  onChange,
  disabled,
  id,
  value,
}) => {
  return (
    <StyledInput
      id={id}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(id, e.target.value)}
      disabled={disabled}
    />
  );
};

export default Input;
