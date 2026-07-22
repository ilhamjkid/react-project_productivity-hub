import { useState } from "react";
import HabitItemView from "./HabitItemView.jsx";
import HabitItemDelete from "./HabitItemDelete.jsx";

export default function HabitItem({ habit }) {
  const [status, setStatus] = useState("view");

  return (
    <li>
      {status === "view" ? (
        <HabitItemView
          habit={habit}
          onClickDeleteStatusButton={() => setStatus("delete")}
        />
      ) : status === "delete" ? (
        <HabitItemDelete
          habit={habit}
          onClickCancelButton={() => setStatus("view")}
        />
      ) : (
        ""
      )}
    </li>
  );
}
