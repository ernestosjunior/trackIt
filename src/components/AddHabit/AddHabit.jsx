import { useState } from "react";
import addIcon from "../../assets/add.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { days } from "./days";
import { Container, Label, Content, ButtonDay } from "./styles";

const Day = ({ label, onClick }) => {
  const [selected, setSelected] = useState(false);
  return (
    <ButtonDay
      onClick={() => {
        setSelected(!selected);
        onClick();
      }}
      selected={selected}
    >
      {label}
    </ButtonDay>
  );
};

const AddHabit = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleSelected = (option) => {
    const isSelected = selected.includes(option);
    let options = selected;

    if (isSelected) {
      options = options.filter((item) => item !== option);
      return setSelected(options);
    }

    return setSelected((prev) => [...prev, option]);
  };

  return (
    <Container>
      <Label>
        <p>Meus hábitos</p>
        <img src={addIcon} alt="" onClick={() => setShow(!show)} />
      </Label>
      {show && (
        <Content>
          <Input placeholder="nome do hábito" />
          <section className="containerDays">
            {days.map((day) => (
              <Day
                label={day.label}
                onClick={() => handleSelected(day.value)}
              />
            ))}
          </section>
          <footer>
            <p>Cancelar</p>
            <Button label="Salvar" />
          </footer>
        </Content>
      )}
    </Container>
  );
};

export default AddHabit;
