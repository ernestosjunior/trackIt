import { BaseLayout, AddHabit, HabitCard } from "../../components";
import { useRoot } from "../../store";
import { Alert, HabitsContainer } from "./styles";
import { getHabits, deleteHabit } from "../../services/api";
import { useEffect, useState } from "react";

const Habits = () => {
  const [loading, setLoading] = useState(false);
  const {
    rootState: { habits },
    rootDispatch,
  } = useRoot();

  const { token } = JSON.parse(window.localStorage.getItem("user")) || {
    token: "",
  };

  const setHabits = (value) =>
    rootDispatch({ type: "setHabits", payload: value });

  useEffect(() => {
    getHabits({
      setLoading,
      token,
      setState: setHabits,
    });
  }, []);

  return (
    <BaseLayout>
      <AddHabit setHabits={setHabits} />
      {!loading && !habits.length && (
        <Alert>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </Alert>
      )}
      <HabitsContainer>
        {!!habits.length &&
          habits.map((habit) => (
            <HabitCard
              name={habit.name}
              days={habit.days}
              onClick={() => {
                console.log(token);
                deleteHabit({
                  id: habit.id,
                  setState: setHabits,
                  token,
                });
              }}
            />
          ))}
      </HabitsContainer>
    </BaseLayout>
  );
};

export default Habits;
