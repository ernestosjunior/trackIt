import { BaseLayout, AddHabit, HabitCard } from "../../components";
import { useRoot } from "../../store";
import { Alert } from "./styles";
import { getHabits } from "../../services/api";
import { useEffect, useState } from "react";

const Habits = () => {
  const [loading, setLoading] = useState(false);
  const {
    rootState: { habits, token },
    rootDispatch,
  } = useRoot();

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
      <AddHabit />
      {!loading && !habits.length && (
        <Alert>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </Alert>
      )}
      {!!habits.length &&
        habits.map((habit) => (
          <HabitCard name={habit.name} days={habit.days} />
        ))}
    </BaseLayout>
  );
};

export default Habits;
