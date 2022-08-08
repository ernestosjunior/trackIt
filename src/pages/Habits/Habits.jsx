import { BaseLayout, AddHabit, HabitCard } from "../../components";
import { useRoot } from "../../store";
import { Alert, HabitsContainer } from "./styles";
import { getHabits, deleteHabit } from "../../services/api";
import { useEffect } from "react";

const Habits = () => {
  const {
    rootState: { habits },
    rootDispatch,
  } = useRoot();

  const setHabits = (value) =>
    rootDispatch({ type: "setHabits", payload: value });

  useEffect(() => {
    getHabits({
      setState: setHabits,
    });
  }, []);

  return (
    <BaseLayout>
      <AddHabit setHabits={setHabits} />
      {!habits.length && (
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
                deleteHabit({
                  id: habit.id,
                  setState: setHabits,
                });
              }}
            />
          ))}
      </HabitsContainer>
    </BaseLayout>
  );
};

export default Habits;
