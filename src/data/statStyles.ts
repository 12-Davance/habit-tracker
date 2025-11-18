import {
  MdCheckCircle,
  MdPendingActions,
  MdTrendingUp,
  MdViewList,
} from "react-icons/md";
import type { StatStyle } from "../types/stat.ts";

export const statStyles: Record<string, StatStyle> = {
  "Total Habits": {
    className: "text-secondary-dark border-secondary-dark",
    icon: MdViewList,
  },
  "Completed Habits": {
    className: "text-primary-dark border-primary-dark",
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
