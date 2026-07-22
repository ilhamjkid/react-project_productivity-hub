import { useState } from "react";
import TaskItemView from "./TaskItemView.jsx";
import TaskItemEdit from "./TaskItemEdit.jsx";
import TaskItemDelete from "./TaskItemDelete.jsx";

export default function TaskItem({ task }) {
  const [status, setStatus] = useState("view");

  return (
    <li>
      {status === "view" ? (
        <TaskItemView
          task={task}
          onClickEditStatusButton={() => setStatus("edit")}
          onClickDeleteStatusButton={() => setStatus("delete")}
        />
      ) : status === "edit" ? (
        <TaskItemEdit
          task={task}
          onClickCancelButton={() => setStatus("view")}
        />
      ) : status === "delete" ? (
        <TaskItemDelete
          task={task}
          onClickCancelButton={() => setStatus("view")}
        />
      ) : (
        ""
      )}
    </li>
  );
}
