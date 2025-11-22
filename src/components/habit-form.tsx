import { useState } from "react";
import { nanoid } from "nanoid";
import type { Habit } from "../types/habit.ts";
import { habitCategories } from "../data/habitCategories.ts";

export default function HabitForm({ onSave }: any) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleChange = (e: any) => {
    const { value, id } = e.target;
    setForm((prevState) => ({ ...prevState, [id]: value }));
  };

  const saveHabit = (habit: Habit) => onSave(habit);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    saveHabit({ ...form, id: nanoid() });
  };

  return (
    <form className="border flex flex-col gap-2 p-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input
          id="title"
          onChange={handleChange}
          value={form.title}
          className="border p-2 rounded-xl"
          placeholder="Enter habit name"
          required
        />
        <select
          className="px-3 py-2.5 border border-default-medium rounded-lg text-sm focus:ring-primary focus:border-primary shadow-xs"
          onChange={handleChange}
          value={form.category}
          id="category"
          required
        >
          <option disabled value="">
            Select habit category
          </option>
          {habitCategories
            .filter((category) => category !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </div>
      <textarea
        id="description"
        onChange={handleChange}
        value={form.description}
        className="border p-2 rounded-xl"
        placeholder="Enter habit description"
        required
      />
      <button
        type="submit"
        className="p-2 rounded-md border bg-primary text-black cursor-pointer"
      >
        Save
      </button>
    </form>
  );
}
