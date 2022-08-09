import { useLayoutEffect } from "react";
import { getHabitsToday, handleHabitToday } from "../../services/api";
import { useRoot } from "../../store";
import { BaseLayout, TodayCard } from "../../components";
import { Title, Subtitle, HeaderPage } from "./styles";
import { getFormateDate } from "../../utils/days";
import { extractPercent } from "../../utils/extractPercent";

const StatusTitle = ({ percent }) => {
  if (percent)
    return (
      <Subtitle hasPercent={!!percent}>
        {percent}% dos hábitos concluídos
      </Subtitle>
    );

  return <Subtitle>Nenhum hábito concluído ainda</Subtitle>;
};

const Today = () => {
  const {
    rootState: { habitsToday },
    rootDispatch,
  } = useRoot();

  const setHabitsToday = (value) =>
    rootDispatch({ type: "setHabitsToday", payload: value });

  useLayoutEffect(() => {
    if (!habitsToday?.length)
      getHabitsToday({
        setState: setHabitsToday,
        token: JSON.parse(window.localStorage.getItem("user"))?.token,
      });
  }, []);

  const percent = extractPercent(habitsToday);

  return (
    <BaseLayout>
      <HeaderPage>
        <Title>{getFormateDate()}</Title>
        <StatusTitle percent={percent} />
      </HeaderPage>
      {!!habitsToday?.length &&
        habitsToday.map((habit, index) => {
          const action = habit.done ? "uncheck" : "check";
          return (
            <TodayCard
              key={`habit-today-${index}`}
              done={habit.done}
              name={habit.name}
              currentSequence={habit.currentSequence}
              highestSequence={habit.highestSequence}
              onClick={() =>
                handleHabitToday({
                  id: habit.id,
                  action,
                  setState: setHabitsToday,
                })
              }
            />
          );
        })}
    </BaseLayout>
  );
};

export default Today;
