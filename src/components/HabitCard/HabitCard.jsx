import trashIcon from "../../assets/transh.svg";
import ButtonDay from "../ButtonDay/ButtonDay";
import { Card } from "./styles";

const HabitCard = ({ name, days }) => {
  const state = [
    { label: "D", selected: days.includes(0) },
    { label: "S", selected: days.includes(1) },
    { label: "T", selected: days.includes(2) },
    { label: "Q", selected: days.includes(3) },
    { label: "Q", selected: days.includes(4) },
    { label: "S", selected: days.includes(5) },
    { label: "S", selected: days.includes(6) },
  ];

  return (
    <Card>
      <img src={trashIcon} alt="" />
      <h1>{name}</h1>
      {state.map((day) => (
        <ButtonDay
          text={day.label}
          selected={day.selected}
          click={() => null}
          disabled
        />
      ))}
    </Card>
  );
};

export default HabitCard;
