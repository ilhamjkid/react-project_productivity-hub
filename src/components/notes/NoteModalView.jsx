import { useContext, useState } from "react";
import { AppDataContext } from "../../context/Contexts.js";
import Button from "../common/Button.jsx";

export default function NoteModalView({ setModal, note }) {
  const { notesDispatch } = useContext(AppDataContext);
  const [isDeleteRequested, setIsDeleteRequested] = useState(false);

  function handleClickBtnDeleteNote() {
    notesDispatch({ type: "DELETE_NOTE", payload: { id: note.id } });
    setModal({ show: false, type: null, note: null });
  }

  return (
    <>
      <div className="flex flex-col gap-2 border-b border-b-slate-800 p-4">
        <h3 className="text-2xl font-semibold">{note.title}</h3>
        <p className="text-lg">{note.message}</p>
      </div>
      {isDeleteRequested ? (
        <div className="flex flex-wrap items-center gap-2 p-4">
          <p className="text-lg">Are you sure you want to delete this note?</p>
          <div className="ml-auto flex flex-wrap gap-2">
            <Button
              onClick={() => setIsDeleteRequested(false)}
              bgColor="bg-slate-500"
              size="sm"
            >
              CANCEL
            </Button>
            <Button
              onClick={handleClickBtnDeleteNote}
              bgColor="bg-red-500"
              size="sm"
            >
              DELETE
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-end gap-2 p-4">
          <Button
            onClick={() => setModal((prev) => ({ ...prev, type: "edit" }))}
            bgColor="bg-green-500"
            size="sm"
          >
            EDIT NOTE
          </Button>
          <Button
            onClick={() => setIsDeleteRequested(true)}
            bgColor="bg-red-500"
            size="sm"
          >
            DELETE NOTE
          </Button>
        </div>
      )}
    </>
  );
}
