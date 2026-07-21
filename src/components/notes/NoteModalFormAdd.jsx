import { useState } from "react";
import TextInput from "../common/TextInput.jsx";
import Button from "../common/Button.jsx";

export default function NoteModalFormAdd({ setModal, notesDispatch }) {
  const [validation, setValidation] = useState({
    title: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("noteTitle");
    const message = formData.get("noteMessage");
    const newValidation = {
      title: !title ? "Title cannot be empty." : "",
      message: !message ? "Message cannot be empty." : "",
    };
    const isInvalid = !Object.values(newValidation).every((value) => !value);
    if (isInvalid) return setValidation(newValidation);
    notesDispatch({ type: "ADD_NOTE", payload: { title, message } });
    setModal({ show: false, type: null, note: null });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-end gap-4 p-4">
      <TextInput
        name="noteTitle"
        placeholder="Note Title ..."
        validationMessage={validation.title}
      />
      <TextInput
        type="textarea"
        name="noteMessage"
        placeholder="Note Message ..."
        rows="6"
        validationMessage={validation.message}
      />
      <Button type="submit">SAVE NEW NOTE</Button>
    </form>
  );
}
