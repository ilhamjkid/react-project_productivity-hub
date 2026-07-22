import { useContext, useState } from "react";
import { AppDataContext, AuthContext } from "../context/Contexts.js";
import TextInput from "../components/common/TextInput.jsx";
import Button from "../components/common/Button.jsx";
import TaskItem from "../components/tasks/TaskItem.jsx";

export default function TasksPage() {
  const { currentUser } = useContext(AuthContext);
  const { tasks, tasksDispatch } = useContext(AppDataContext);
  const [validation, setValidation] = useState("");

  const tasksByCurrentUser = tasks
    .filter((task) => task.userId === currentUser.id)
    .toReversed();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const taskText = formData.get("taskText");
    if (!taskText) return setValidation("Your task cannot be empty.");
    tasksDispatch({
      type: "ADD_TASK",
      payload: {
        userId: currentUser.id,
        text: taskText,
      },
    });
    if (validation) setValidation("");
    e.target.reset();
  }

  return (
    <section className="min-h-screen w-full pt-18 lg:pt-0">
      <div className="mx-auto flex w-full max-w-200 flex-col items-center gap-6 p-5 text-slate-200">
        <h2 className="text-center text-2xl font-semibold">Task Management</h2>
        <form onSubmit={handleSubmit} className="flex w-full items-start gap-2">
          <TextInput
            name="taskText"
            placeholder="Your task ..."
            validationMessage={validation}
          />
          <Button type="submit">SUBMIT</Button>
        </form>
        {tasksByCurrentUser.length === 0 ? (
          <h3 className="text-center text-xl">Task Empty</h3>
        ) : (
          <ul className="w-full divide-y divide-slate-900 overflow-hidden rounded-lg bg-slate-800">
            {tasksByCurrentUser.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
