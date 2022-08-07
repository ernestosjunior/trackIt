import { useState } from "react";
import addIcon from "../../assets/add.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { days } from "./days";
import { Container, Label, Content, ButtonDay } from "./styles";
import { createHabit } from "../../services/api";

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

const initialState = { name: "", days: [], loading: false };

const AddHabit = () => {
  const [show, setShow] = useState(false);
  const [fields, setFields] = useState(initialState);

  const token = JSON.parse(window.localStorage.getItem("user")).token || "";

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
          <Input placeholder="nome do hábito" id="name" onChange={setField} />
          <section className="containerDays">
            {days.map((day) => (
              <Day
                label={day.label}
                onClick={() => handleSelected(day.value)}
              />
            ))}
          </section>
          <footer>
            <p
              onClick={() => {
                setShow(false);
                setFields(initialState);
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
