import { BaseLayout, AddHabit } from "../../components";
import { useRoot } from "../../store";
import { Alert } from "./styles";

const Habits = () => {
  const {
    rootState: { habits },
  } = useRoot();

  return (
    <BaseLayout>
      <AddHabit />
      {!habits.length && (
        <Alert>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </Alert>
      )}
    </BaseLayout>
  );
};

export default Habits;
