export function usersReducer(users, action) {
  switch (action.type) {
    case "REGISTER_USER": {
      return [
        ...users,
        {
          ...action.payload,
          createdAt: new Date().toISOString(),
        },
      ];
    }
    case "DELETE_USER": {
      return users.filter((user) => user.id !== action.payload.id);
    }
  }
  throw new Error(`Unknown action: ${action.type}`);
}

export function usersInit() {
  const usersJSON = localStorage.getItem("prodhub_users");
  return usersJSON ? JSON.parse(usersJSON) : [];
}
