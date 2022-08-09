import * as dayjs from "dayjs";

export const days = {
  0: "Domingo",
  1: "Segunda",
  2: "Terça",
  3: "Quarta",
  4: "Quinta",
  5: "Sexta",
  6: "Sábado",
};

export const getFormateDate = () => {
  const day = days[dayjs().day()];
  const date = `${dayjs().date()}`.padStart(2, "0");
  const month = `${dayjs().month() + 1}`.padStart(2, "0");

  return `${day}, ${date}/${month}`;
};
