import type { ChangeEvent } from "react";

export interface Habit {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface HabitsProps {
  completedHabits: string[];
  handleCategoryChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleToggle: (event: ChangeEvent<HTMLInputElement>) => void;
  filteredHabits: Habit[];
  selectedCategory: string;
  updateHabits: (habit: Habit[]) => void;
}
