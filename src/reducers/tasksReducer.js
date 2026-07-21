export function tasksReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TASK": {
      return [
        ...tasks,
        {
          id: crypto.randomUUID(),
          userId: action.payload.userId,
          text: action.payload.text,
          isCompleted: false,
          createdAt: new Date().toISOString(),
        },
      ];
    }
    case "EDIT_TASK": {
      return tasks.map((task) => {
        if (task.id !== action.payload.id) return task;
        return { ...task, text: action.payload.text };
      });
    }
    case "TOGGLE_TASK": {
      return tasks.map((task) => {
        if (task.id !== action.payload.id) return task;
        return { ...task, isCompleted: !task.isCompleted };
      });
    }
    case "DELETE_TASK": {
      return tasks.filter((task) => task.id !== action.payload.id);
    }
    case "DELETE_TASKS_BY_USER": {
      return tasks.filter((task) => task.userId !== action.payload.userId);
    }
  }
  throw new Error(`Unknown action: ${action.type}`);
}

export function tasksInit() {
  const tasksJSON = localStorage.getItem("prodhub_tasks");
  return tasksJSON ? JSON.parse(tasksJSON) : [];
}
