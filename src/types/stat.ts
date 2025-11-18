import type { IconType } from "react-icons";

export interface StatStyle {
  className: string;
  icon: IconType;
}

export interface StatCardProps {
  label: string;
  value: number | string;
}
