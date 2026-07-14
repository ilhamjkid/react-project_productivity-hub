import { useState } from "react";
import TextInput from "../common/TextInput.jsx";
import Button from "../common/Button.jsx";

export default function NoteModalFormEdit({ setModal, note, notesDispatch }) {
  const [validation, setValidation] = useState({
    title: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("noteTitle");
    const message = formData.get("noteMessage");
    const isNoChange = title === note.title && message === note.message;
    if (isNoChange) return setModal((prev) => ({ ...prev, type: "view" }));
    const newValidation = {
      title: !title ? "Title cannot be empty!" : "",
      message: !message ? "Message cannot be empty!" : "",
    };
    const isInvalid = !Object.values(newValidation).every((value) => !value);
    if (isInvalid) return setValidation(newValidation);
    const updatedNote = { ...note, title, message };
    notesDispatch({ type: "EDIT_NOTE", payload: updatedNote });
    setModal({ show: true, type: "view", note: updatedNote });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-end gap-4 p-4">
      <TextInput
        name="noteTitle"
        defaultValue={note.title}
        placeholder="Note Title ..."
        validationMessage={validation.title}
      />
      <TextInput
        type="textarea"
        name="noteMessage"
        defaultValue={note.message}
        placeholder="Note Message ..."
        rows="6"
        validationMessage={validation.message}
      />
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => setModal((prev) => ({ ...prev, type: "view" }))}
          bgColor="bg-slate-500"
        >
          CANCEL
        </Button>
        <Button type="submit" bgColor="bg-green-500">
          SAVE CHANGES
        </Button>
      </div>
    </form>
  );
}
