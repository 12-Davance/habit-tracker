import type { ChangeEvent } from "react";

export interface Habit {
  id: number;
  title: string;
  description: string;
  category: string;
}

export interface HabitsProps {
  completedHabits: number[];
  handleCategoryChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleToggle: (event: ChangeEvent<HTMLInputElement>) => void;
  filteredHabits: Habit[];
  selectedCategory: string;
}
