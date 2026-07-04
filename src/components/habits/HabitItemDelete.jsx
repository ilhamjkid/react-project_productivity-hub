import Button from "../common/Button.jsx";

export default function HabitItemDelete({
  habit,
  habitsDispatch,
  onClickCancelButton,
}) {
  return (
    <div className="flex w-full flex-wrap items-center gap-2 p-4 lg:flex-nowrap">
      <p className="text-lg">Are you sure want to delete this habit?</p>
      <div className="ml-auto flex items-center gap-1">
        <Button
          onClick={() =>
            habitsDispatch({
              type: "DELETE_HABIT",
              payload: { id: habit.id },
            })
          }
          bgColor="bg-red-500"
          size="sm"
        >
          DELETE
        </Button>
        <Button onClick={onClickCancelButton} bgColor="bg-slate-500" size="sm">
          CLOSE
        </Button>
      </div>
    </div>
  );
}
