import { useState } from "react";
import Button from "../common/Button";
import TextInput from "../common/TextInput";

export default function TaskItemEdit({
  task,
  tasksDispatch,
  onClickCancelButton,
}) {
  const [validation, setValidation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const taskText = formData.get("taskText");
    if (!taskText) {
      return setValidation("Cannot be empty. Click Delete to remove task.");
    }
    if (taskText === task.text) {
      return setValidation("No changes made. Click cancel to go back.");
    }
    tasksDispatch({
      type: "EDIT_TASK",
      payload: { id: task.id, text: taskText },
    });
    if (validation) setValidation("");
    e.target.reset();
    onClickCancelButton();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-wrap items-center gap-2 p-4 lg:flex-nowrap"
    >
      <TextInput
        name="taskText"
        defaultValue={task.text}
        placeholder="Your task ..."
        validationMessage={validation}
        bgColor="bg-slate-900"
        size="sm"
      />
      <div className="ml-auto flex items-center gap-1">
        <Button type="submit" bgColor="bg-green-500" size="sm">
          SAVE
        </Button>
        <Button onClick={onClickCancelButton} bgColor="bg-slate-500" size="sm">
          CLOSE
        </Button>
      </div>
    </form>
  );
}
