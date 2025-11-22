import { cn } from "../lib/utils.ts";
import type { Habit, HabitsProps } from "../types/habit.ts";
import { habitCategories } from "../data/habitCategories.ts";
import { useState } from "react";
import HabitForm from "./habit-form.tsx";
import { MdClose } from "react-icons/md";

export default function Habits({
  completedHabits,
  handleCategoryChange,
  handleToggle,
  filteredHabits,
  selectedCategory,
  updateHabits,
}: Readonly<HabitsProps>) {
  const [showForm, setShowForm] = useState(false);
  const isCompleted = (id: string) => {
    return completedHabits.includes(id);
  };

  const onSave = (data: Habit) => {
    setShowForm(false);
    const updatedHabits = [data, ...filteredHabits];
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
    updateHabits(updatedHabits);
  };

  const handleDelete = (id: string) => {
    const updatedHabits = [...filteredHabits].filter(
      (habit) => habit.id !== id,
    );
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
    updateHabits(updatedHabits);
    handleToggle({
      target: {
        checked: false,
        value: id,
      },
    } as any);
  };

  return (
    <div className="w-full p-6 bg-surface border-2 shadow-xs overflow-y-auto rounded-xl space-y-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-2">
        <h5 className="text-xl font-semibold mb-6">
          Toggle habits you completed today.
        </h5>
        <div className="flex justify-between gap-4">
          <button
            onClick={() => setShowForm((prevState) => !prevState)}
            className="p-2 rounded-md border cursor-pointer bg-primary text-black"
          >
            Add Habit
          </button>
          <select
            className="px-3 py-2.5 border border-default-medium rounded-md text-sm focus:ring-primary focus:border-primary shadow-xs"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option disabled value="">
              Select category
            </option>
            {habitCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      {showForm && <HabitForm onSave={onSave} />}
      {!filteredHabits.length && (
        <div className="border px-4 py-6 text-center font-bold bg-muted rounded-md">
          No habits found.
        </div>
      )}
      <ul className="divide-y divide-default">
        {filteredHabits.map((habit) => (
          <li
            key={habit.id}
            className={cn(
              "p-2",
              isCompleted(habit.id) && "!text-primary border-b-2",
            )}
          >
            <div className="flex items-center gap-2">
              <MdClose
                className="cursor-pointer hover:text-red-500"
                size="25"
                onClick={() => handleDelete(habit.id)}
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{habit.title}</p>
                <p
                  className={cn(
                    "text-sm truncate text-muted",
                    isCompleted(habit.id) && "text-primary-dark",
                  )}
                >
                  {habit.description}
                </p>
              </div>
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={isCompleted(habit.id)}
                value={habit.id}
                className="size-5 rounded border border-muted checked:accent-primary checked:border-primary checked:hover:bg-primary focus:ring-2 focus:ring-primary cursor-pointer focus:outline-none"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
