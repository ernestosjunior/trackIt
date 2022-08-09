import { BaseLayout, AddHabit, HabitCard } from "../../components";
import { useRoot } from "../../store";
import { Alert, HabitsContainer } from "./styles";
import { getHabits, deleteHabit } from "../../services/api";
import { useLayoutEffect } from "react";

const Habits = () => {
  const {
    rootState: { habits },
    rootDispatch,
    user,
  } = useRoot();

  const setHabits = (value) =>
    rootDispatch({ type: "setHabits", payload: value });

  useLayoutEffect(() => {
    getHabits({
      setState: setHabits,
      token: user?.token,
    });
  }, []);

  return (
    <BaseLayout>
      <AddHabit setHabits={setHabits} />
      {!habits?.length && (
        <Alert>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </Alert>
      )}
      <HabitsContainer>
        {!!habits?.length &&
          habits.map((habit, index) => (
            <HabitCard
              key={`habit-${index}`}
              name={habit.name}
              days={habit.days}
              onClick={() => {
                deleteHabit({
                  id: habit.id,
                  setState: setHabits,
                  token: user?.token,
                });
              }}
            />
          ))}
      </HabitsContainer>
    </BaseLayout>
  );
};

export default Habits;
