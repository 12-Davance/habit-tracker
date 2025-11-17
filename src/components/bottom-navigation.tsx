import { Link, useLocation } from "react-router";
import { MdDashboard, MdPerson, MdTableView, MdTune } from "react-icons/md";
import { cn } from "../lib/utils.ts";

const navItems = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: MdDashboard,
  },
  {
    label: "Habits",
    to: "/habits",
    icon: MdTableView,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: MdTune,
  },
  {
    label: "Profile",
    to: "/profile",
    icon: MdPerson,
  },
];

export default function BottomNavigation() {
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-surface border-t border-default">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {navItems.map(({ label, to, icon: Icon }) => (
          <Link
            key={label}
            to={to}
            type="button"
            className={cn(
              "inline-flex flex-col items-center justify-center px-5 hover:bg-muted group group-hover:text-primary dark:text-primary-dark",
              pathname === to && "bg-muted",
            )}
          >
            <Icon size={25} />
            <span className="text-sm text-body">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
