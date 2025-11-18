import { calculateCompletionRate } from "./calculateCompletionRate";

export function getHabitStats(total: number, completed: number) {
  return [
    { label: "Total Habits", value: total },
    { label: "Completed Habits", value: completed },
    { label: "Pending Habits", value: total - completed },
    {
      label: "Completion Rate",
      value: calculateCompletionRate(total, completed) + "%",
    },
  ];
}
