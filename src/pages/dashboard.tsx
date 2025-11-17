import Habits from "./habits.tsx";
import { type ChangeEvent, useState } from "react";
import { cn } from "../lib/utils.ts";
import { calculateCompletionRate } from "../lib/calculateCompletionRate.ts";
import type { Habit } from "../types/habit.ts";
import {
  MdCheckCircle,
  MdPendingActions,
  MdTrackChanges,
  MdTrendingUp,
  MdViewList,
} from "react-icons/md";
import type { IconType } from "react-icons";

const habits: Habit[] = [
  {
    id: 1,
    title: "Daily Exercise",
    description:
      "Engaging in physical activity to stay healthy and improve mood.",
    category: "Health",
  },
  {
    id: 2,
    title: "Reading",
    description:
      "Spending time reading books, articles, or other materials for knowledge or leisure.",
    category: "Personal Growth",
  },
  {
    id: 3,
    title: "Meditation",
    description:
      "Practicing mindfulness or breathing exercises to reduce stress and improve focus.",
    category: "Mental Wellness",
  },
  {
    id: 4,
    title: "Healthy Eating",
    description: "Choosing nutritious foods and maintaining balanced meals.",
    category: "Health",
  },
  {
    id: 5,
    title: "Waking Up Early",
    description:
      "Starting the day earlier to increase productivity or enjoy quiet time.",
    category: "Lifestyle",
  },
  {
    id: 6,
    title: "Planning the Day",
    description:
      "Organizing tasks and setting priorities for better productivity.",
    category: "Productivity",
  },
  {
    id: 7,
    title: "Drinking Enough Water",
    description: "Staying hydrated throughout the day for overall well-being.",
    category: "Health",
  },
  {
    id: 8,
    title: "Journaling",
    description:
      "Writing thoughts, reflections, or goals to improve clarity and emotional balance.",
    category: "Mental Wellness",
  },
  {
    id: 9,
    title: "Budget Tracking",
    description:
      "Monitoring expenses and income to stay financially responsible.",
    category: "Finance",
  },
  {
    id: 10,
    title: "Learning Something New",
    description: "Developing new skills or exploring new interests regularly.",
    category: "Personal Growth",
  },
  {
    id: 11,
    title: "Cleaning Regularly",
    description:
      "Tidying the home or workspace to maintain a clean and organized environment.",
    category: "Lifestyle",
  },
  {
    id: 12,
    title: "Walking Daily",
    description: "Taking a walk to improve physical health and clear the mind.",
    category: "Health",
  },
  {
    id: 13,
    title: "Limiting Screen Time",
    description:
      "Reducing phone or computer usage to support mental clarity and well-being.",
    category: "Lifestyle",
  },
  {
    id: 14,
    title: "Practicing Gratitude",
    description:
      "Writing or reflecting on things you are grateful for to foster positivity.",
    category: "Mental Wellness",
  },
  {
    id: 15,
    title: "Meal Prepping",
    description:
      "Preparing meals in advance to save time and make healthier eating choices.",
    category: "Health",
  },
  {
    id: 16,
    title: "Limiting Sugar Intake",
    description:
      "Reducing consumption of sugary snacks and drinks for better health.",
    category: "Health",
  },
  {
    id: 17,
    title: "Stretching",
    description:
      "Doing stretch routines to improve blood flow and reduce stiffness.",
    category: "Health",
  },
  {
    id: 18,
    title: "Practicing a Hobby",
    description: "Spending time on creative or enjoyable activities.",
    category: "Personal Growth",
  },
  {
    id: 19,
    title: "Socializing",
    description:
      "Connecting with friends or family to maintain healthy relationships.",
    category: "Lifestyle",
  },
  {
    id: 20,
    title: "Sleeping on Time",
    description:
      "Maintaining a consistent sleep schedule for better energy and health.",
    category: "Health",
  },
];

const statStyles: Record<string, { className: string; icon: IconType }> = {
  "Total Habits": {
    className: "text-secondary border-secondary",
    icon: MdViewList,
  },
  "Completed Habits": {
    className: "text-primary border-primary",
    icon: MdCheckCircle,
  },
  "Pending Habits": {
    className: "text-yellow-500 border-yellow-500",
    icon: MdPendingActions,
  },
  "Completion Rate": {
    className: "",
    icon: MdTrendingUp,
  },
};

export default function Dashboard() {
  const [completedHabits, setCompletedHabits] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredHabits =
    selectedCategory === "All"
      ? habits
      : habits.filter((habit) => habit.category === selectedCategory);
  const habitStats = [
    { label: "Total Habits", value: habits.length },
    { label: "Completed Habits", value: completedHabits.length },
    {
      label: "Pending Habits",
      value: habits.filter((habit) => !completedHabits.includes(habit.id))
        .length,
    },
    {
      label: "Completion Rate",
      value:
        calculateCompletionRate(habits.length, completedHabits.length) + "%",
    },
  ];

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedCategory(e.target.value);

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setCompletedHabits((prevState) => [...prevState, Number(value)]);
    } else {
      setCompletedHabits((prevState) =>
        [...prevState].filter((habit) => habit !== Number(value)),
      );
    }
  };

  return (
    <div className="h-screen w-full bg-background p-6 pb-20 text-text flex flex-col items-center gap-6">
      <div className="container">
        <span className="flex gap-2 items-center">
          <MdTrackChanges size="45" />
          <h5 className="text-4xl font-bold">Habit Tracker</h5>
        </span>
      </div>
      <div className="container flex flex-col h-full gap-6 max-lg:overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {habitStats.map((stat) => {
            const Icon = statStyles[stat.label].icon;
            return (
              <div
                key={stat.label}
                className={cn(
                  "flex items-start justify-between p-6 rounded-xl border-text border-2 bg-surface gap-4",
                  statStyles[stat.label].className,
                )}
              >
                <div className="flex flex-col justify-between flex-1 gap-2">
                  <span className="text-xl">{stat.label}</span>
                  <span className="text-5xl font-bold">{stat.value}</span>
                </div>
                <Icon size="60" />
              </div>
            );
          })}
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
