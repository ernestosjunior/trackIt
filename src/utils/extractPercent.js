export const extractPercent = (habitsArr = []) => {
  let count = 0;
  let qtd = habitsArr.length;

  habitsArr.forEach((habit) => {
    if (habit.done) {
      count++;
    }
  });

  return (count / qtd) * 100;
};
