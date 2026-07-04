export function habitsReducer(habits, action) {
  switch (action.type) {
    case "ADD_HABIT": {
      return [
        ...habits,
        {
          id: crypto.randomUUID(),
          text: action.payload.text,
          history: [],
          lastCompletedDate: null,
          createdAt: new Date().toISOString(),
        },
      ];
    }
    case "TOGGLE_HABIT": {
      const today = new Date().toISOString().split("T")[0];
      return habits.map((habit) => {
        if (habit.id !== action.payload.id) return habit;
        if (habit.lastCompletedDate !== today) {
          return {
            ...habit,
            history: [...habit.history, today],
            lastCompletedDate: today,
          };
        } else {
          return {
            ...habit,
            history: habit.history.slice(0, -1),
            lastCompletedDate: habit.history.at(-2) || null,
          };
        }
      });
    }
    case "DELETE_HABIT": {
      return habits.filter((habit) => habit.id !== action.payload.id);
    }
  }
  throw new Error(`Unknown action: ${action.type}`);
}

export function habitsInit() {
  const habitJSON = localStorage.getItem("prodhub_habits");
  return habitJSON ? JSON.parse(habitJSON) : [];
}
