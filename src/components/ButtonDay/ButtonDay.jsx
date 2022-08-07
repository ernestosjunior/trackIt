import { ButtonDay as Button } from "../AddHabit/styles";

const ButtonDay = ({ text, selected, click, disabled }) => {
  return (
    <Button onClick={click} selected={selected} disabled={disabled}>
      {text}
    </Button>
  );
};

export default ButtonDay;
