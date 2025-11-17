import { cn } from "../lib/utils.ts";
import type { HabitsProps } from "../types/habit.ts";

const habitCategories = [
  "All",
  "Health",
  "Personal Growth",
  "Mental Wellness",
  "Lifestyle",
  "Productivity",
  "Finance",
];

export default function Habits({
  completedHabits,
  handleCategoryChange,
  handleToggle,
  filteredHabits,
  selectedCategory,
}: Readonly<HabitsProps>) {
  const isCompleted = (id: number) => {
    return completedHabits.includes(id);
  };

  return (
    <div className="w-full p-6 bg-surface border-2 rounded-base shadow-xs overflow-y-auto rounded-xl space-y-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-2">
        <h5 className="text-xl font-semibold mb-6">
          Toggle habits you completed today.
        </h5>
        <select
          className="px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
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
      <div className="flow-root">
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
                  checked={completedHabits.includes(habit.id)}
                  value={habit.id}
                  className="size-5 rounded border border-muted checked:accent-primary checked:border-primary checked:hover:bg-primary focus:ring-2 focus:ring-primary cursor-pointer focus:outline-none"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
