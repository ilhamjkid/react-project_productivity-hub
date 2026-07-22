import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { AppDataContext } from "../../context/Contexts.js";
import Button from "../common/Button.jsx";

export default function HabitItemView({ habit, onClickDeleteStatusButton }) {
  const { habitsDispatch } = useContext(AppDataContext);

  const streak = calculateStreak(habit);
  const isTodayDone = checkIsTodayDone(habit);

  return (
    <div className="flex w-full flex-wrap items-center gap-2 p-4 lg:flex-nowrap">
      <div className="flex items-center gap-1">
        <p className="text-lg">{habit.text}</p>
        <p className="rounded-sm bg-blue-500 px-1 py-0.5 text-sm font-semibold">
          STREAK: {streak} {streak === 1 ? "DAY" : "DAYS"}
        </p>
      </div>
      <div className="ml-auto flex items-center gap-1">
        <Button
          onClick={() =>
            habitsDispatch({
              type: "TOGGLE_HABIT",
              payload: { id: habit.id },
            })
          }
          bgColor={isTodayDone ? "bg-slate-500" : "bg-blue-500"}
          size="sm"
        >
          <FontAwesomeIcon icon={isTodayDone ? faCircleXmark : faCircleCheck} />
        </Button>
        <Button
          onClick={onClickDeleteStatusButton}
          bgColor="bg-red-500"
          size="sm"
        >
          <FontAwesomeIcon icon={faDeleteLeft} />
        </Button>
      </div>
    </div>
  );
}

function calculateStreak(habit) {
  const currentDate = new Date();
  if (!checkIsTodayDone(habit)) currentDate.setDate(currentDate.getDate() - 1);
  let checkDate = currentDate.toISOString().split("T")[0];
  let streak = 0;
  while (habit.history.includes(checkDate)) {
    streak++;
    currentDate.setDate(currentDate.getDate() - 1);
    checkDate = currentDate.toISOString().split("T")[0];
  }
  return streak;
}

function checkIsTodayDone(habit) {
  const today = new Date().toISOString().split("T")[0];
  return habit.lastCompletedDate === today;
}
