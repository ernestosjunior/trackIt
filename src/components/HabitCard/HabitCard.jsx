import trashIcon from "../../assets/trash.svg";
import ButtonDay from "../ButtonDay/ButtonDay";
import { Card, Container } from "./styles";

const HabitCard = ({ name, days, onClick }) => {
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
    <Container>
      <Card>
        <img src={trashIcon} alt="" onClick={onClick} />
        <h1>{name}</h1>
        <section>
          {state.map((day, index) => (
            <ButtonDay
              key={`day=${index}`}
              text={day.label}
              selected={day.selected}
              click={() => null}
              disabled
            />
          ))}
        </section>
      </Card>
    </Container>
  );
};

export default HabitCard;
