import { useState } from "react";
import TaskItemEdit from "./TaskItemEdit.jsx";
import TaskItemDelete from "./TaskItemDelete.jsx";
import TaskItemView from "./TaskItemView.jsx";

export default function TaskItem({ task, tasksDispatch }) {
  const [status, setStatus] = useState("view");

  if (status === "edit") {
    return (
      <TaskItemEdit
        task={task}
        tasksDispatch={tasksDispatch}
        onClickCancelButton={() => setStatus("view")}
      />
    );
  }
  if (status === "delete") {
    return (
      <TaskItemDelete
        task={task}
        tasksDispatch={tasksDispatch}
        onClickCancelButton={() => setStatus("view")}
      />
    );
  }
  return (
    <TaskItemView
      task={task}
      tasksDispatch={tasksDispatch}
      onClickEditStatusButton={() => setStatus("edit")}
      onClickDeleteStatusButton={() => setStatus("delete")}
    />
  );
}
