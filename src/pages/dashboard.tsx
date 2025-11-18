import Habits from "../components/habits.tsx";
import { type ChangeEvent, useMemo, useState } from "react";
import { getHabitStats } from "../utils/getHabitStats.ts";
import { habits } from "../data/habits.ts";
import StatCard from "../components/stat-card.tsx";
import HabitHeader from "../components/habit-header.tsx";

export default function Dashboard() {
  const [completedHabits, setCompletedHabits] = useState<number[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredHabits = useMemo(() => {
    return selectedCategory === "All"
      ? habits
      : habits.filter((habit) => habit.category === selectedCategory);
  }, [selectedCategory]);

  const habitStats = getHabitStats(habits.length, completedHabits.length);

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedCategory(e.target.value);

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCompletedHabits((prevState) =>
      checked
        ? [...prevState, Number(value)]
        : prevState.filter((id) => id !== Number(value)),
    );
  };

  return (
    <div className="h-screen w-full bg-background p-6 pb-20 text-foreground flex flex-col items-center gap-6">
      <HabitHeader />
      <div className="container flex flex-col h-full gap-6 max-lg:overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {habitStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
        <div className="flex-1 lg:overflow-y-auto">
          <Habits
            completedHabits={completedHabits}
            handleToggle={handleToggle}
            handleCategoryChange={handleCategoryChange}
            filteredHabits={filteredHabits}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </div>
  );
}
