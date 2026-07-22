import { useContext, useState } from "react";
import { AppDataContext, AuthContext } from "../context/Contexts.js";
import TextInput from "../components/common/TextInput.jsx";
import Button from "../components/common/Button.jsx";
import HabitItem from "../components/habits/HabitItem.jsx";

export default function HabitsPage() {
  const { currentUser } = useContext(AuthContext);
  const { habits, habitsDispatch } = useContext(AppDataContext);
  const [validation, setValidation] = useState("");

  const habitsByCurrentUser = habits
    .filter((habit) => habit.userId === currentUser.id)
    .toReversed();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const habitText = formData.get("habitText");
    if (!habitText) return setValidation("Your habit cannot be empty.");
    habitsDispatch({
      type: "ADD_HABIT",
      payload: {
        userId: currentUser.id,
        text: habitText,
      },
    });
    if (validation) setValidation("");
    e.target.reset();
  }

  return (
    <section className="min-h-screen w-full pt-18 lg:pt-0">
      <div className="mx-auto flex w-full max-w-200 flex-col items-center gap-6 p-5 text-slate-200">
        <h2 className="text-center text-2xl font-semibold">Habit Tracker</h2>
        <form onSubmit={handleSubmit} className="flex w-full items-start gap-2">
          <TextInput
            name="habitText"
            placeholder="Your habit ..."
            validationMessage={validation}
          />
          <Button type="submit">SUBMIT</Button>
        </form>
        {habitsByCurrentUser.length === 0 ? (
          <h3 className="text-center text-xl">Habit Empty</h3>
        ) : (
          <ul className="w-full divide-y divide-slate-900 overflow-hidden rounded-lg bg-slate-800">
            {habitsByCurrentUser.map((habit) => (
              <HabitItem key={habit.id} habit={habit} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
