export function notesReducer(notes, action) {
  switch (action.type) {
    case "ADD_NOTE": {
      return [
        ...notes,
        {
          id: crypto.randomUUID(),
          userId: action.payload.userId,
          title: action.payload.title,
          message: action.payload.message,
          createdAt: new Date().toISOString(),
        },
      ];
    }
    case "EDIT_NOTE": {
      return notes.map((note) => {
        if (note.id !== action.payload.id) return note;
        return {
          ...note,
          title: action.payload.title,
          message: action.payload.message,
        };
      });
    }
    case "DELETE_NOTE": {
      return notes.filter((note) => note.id !== action.payload.id);
    }
    case "DELETE_NOTES_BY_USER": {
      return notes.filter((note) => note.userId !== action.payload.userId);
    }
  }
  throw new Error(`Unknown action: ${action.type}`);
}

export function notesInit() {
  const notesJSON = localStorage.getItem("prodhub_notes");
  return notesJSON ? JSON.parse(notesJSON) : [];
}
