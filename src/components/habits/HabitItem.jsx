import { useState } from "react";
import HabitItemDelete from "./HabitItemDelete.jsx";
import HabitItemView from "./HabitItemView.jsx";

export default function HabitItem({ habit, habitsDispatch }) {
  const [status, setStatus] = useState("view");

  if (status === "delete") {
    return (
      <HabitItemDelete
        habit={habit}
        habitsDispatch={habitsDispatch}
        onClickCancelButton={() => setStatus("view")}
      />
    );
  }
  return (
    <HabitItemView
      habit={habit}
      habitsDispatch={habitsDispatch}
      onClickDeleteStatusButton={() => setStatus("delete")}
    />
  );
}
