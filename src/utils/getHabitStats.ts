import { calculateCompletionRate } from "./calculateCompletionRate";

export function getHabitStats(total: number, completed: number) {
  const pending = total - completed;
  return [
    { label: "Total Habits", value: total },
    { label: "Completed Habits", value: completed },
    { label: "Pending Habits", value: pending >= 0 ? pending : 0 },
    {
      label: "Completion Rate",
      value: calculateCompletionRate(total, completed) + "%",
    },
  ];
}
