import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPenToSquare,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../common/Button.jsx";

export default function TaskItemView({
  task,
  tasksDispatch,
  onClickEditStatusButton,
  onClickDeleteStatusButton,
}) {
  return (
    <div className="flex w-full flex-wrap items-center gap-2 p-4 lg:flex-nowrap">
      <p
        className={`text-lg ${task.isCompleted ? "text-slate-400 italic line-through" : ""}`}
      >
        {task.text}
      </p>
      <div className="ml-auto flex items-center gap-1">
        <Button
          onClick={() =>
            tasksDispatch({
              type: "TOGGLE_TASK",
              payload: { id: task.id },
            })
          }
          bgColor="bg-slate-500"
          size="sm"
        >
          <FontAwesomeIcon icon={faCircleCheck} />
        </Button>
        <Button
          onClick={onClickEditStatusButton}
          bgColor="bg-green-500"
          size="sm"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
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
