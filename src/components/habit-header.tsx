import { MdTrackChanges } from "react-icons/md";

const HabitHeader = () => {
  return (
    <div className="container">
      <span className="flex gap-2 items-center">
        <MdTrackChanges size="45" />
        <h5 className="text-4xl font-bold">Habit Tracker</h5>
      </span>
    </div>
  );
};

export default HabitHeader;
