import Button from "../common/Button.jsx";

export default function TaskItemDelete({
  task,
  tasksDispatch,
  onClickCancelButton,
}) {
  return (
    <div className="flex w-full flex-wrap items-center gap-2 p-4 lg:flex-nowrap">
      <p className="text-lg">Are you sure want to delete this task?</p>
      <div className="ml-auto flex items-center gap-1">
        <Button
          onClick={() =>
            tasksDispatch({
              type: "DELETE_TASK",
              payload: { id: task.id },
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
