import { useState } from "react";
import addIcon from "../../assets/add.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { days } from "./days";
import ButtonDay from "../ButtonDay/ButtonDay";
import { Container, Label, Content } from "./styles";
import { createHabit } from "../../services/api";

const Day = ({ label, onClick, isSelected }) => {
  const [selected, setSelected] = useState(isSelected);
  return (
    <ButtonDay
      text={label}
      click={() => {
        setSelected(!selected);
        onClick();
      }}
      selected={selected}
    />
  );
};

const initialState = { name: "", days: [], loading: false };

const AddHabit = ({ setHabits, token }) => {
  const [show, setShow] = useState(false);
  const [fields, setFields] = useState(initialState);

  const handleSelected = (option) => {
    const isSelected = fields.days.includes(option);
    let options = fields.days;

    if (isSelected) {
      options = options.filter((item) => item !== option);
      return setFields((prev) => ({ ...prev, days: options }));
    }

    return setFields((prev) => ({ ...prev, days: [...prev.days, option] }));
  };

  const setField = (field, value) => {
    setFields((prev) => ({ ...prev, [field]: value }));
  };

  const setLoading = (value) =>
    setFields((prev) => ({ ...prev, loading: value }));

  return (
    <Container>
      <Label>
        <p>Meus hábitos</p>
        <img src={addIcon} alt="" onClick={() => setShow(!show)} />
      </Label>
      {show && (
        <Content>
          <Input
            placeholder="nome do hábito"
            id="name"
            onChange={setField}
            value={fields.name}
          />
          <section className="containerDays">
            {days.map((day) => (
              <Day
                label={day.label}
                onClick={() => handleSelected(day.value)}
                isSelected={fields.days.includes(day.value)}
              />
            ))}
          </section>
          <footer>
            <p
              onClick={() => {
                setShow(false);
              }}
            >
              Cancelar
            </p>
            <Button
              loading={fields.loading}
              disabled={fields.loading || !fields.name || !fields.days.length}
              label="Salvar"
              onClick={() =>
                createHabit({
                  name: fields.name,
                  days: fields.days,
                  setLoading,
                  setShow,
                  setState: setHabits,
                  token,
                })
              }
            />
          </footer>
        </Content>
      )}
    </Container>
  );
};

export default AddHabit;
