export function currentUserReducer(currentUser, action) {
  switch (action.type) {
    case "LOGIN_USER": {
      return {
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        username: action.payload.username,
      };
    }
    case "LOGOUT_USER": {
      return null;
    }
  }
  throw new Error(`Unknown action: ${action.type}`);
}
