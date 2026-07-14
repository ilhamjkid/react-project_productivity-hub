import { useEffect, useReducer, useState } from "react";
import { notesReducer, notesInit } from "../reducers/notesReducer.js";
import Button from "../components/common/Button.jsx";
import NoteList from "../components/notes/NoteList.jsx";
import NoteModal from "../components/notes/NoteModal.jsx";

export default function NotesPage() {
  const [notes, notesDispatch] = useReducer(notesReducer, null, notesInit);
  const [modal, setModal] = useState({ show: false, type: "", note: null });

  useEffect(() => {
    localStorage.setItem("prodhub_notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <section className="min-h-screen w-full pt-18 lg:pt-0">
        <div className="mx-auto flex w-full max-w-200 flex-col items-center gap-6 p-5 text-slate-200">
          <h2 className="text-center text-2xl font-semibold">
            Notes/Journaling
          </h2>
          <Button
            onClick={() => setModal({ show: true, type: "add", note: null })}
          >
            ADD NOTE
          </Button>
          {notes.length === 0 ? (
            <h3 className="text-center text-xl">Note Empty</h3>
          ) : (
            <NoteList notes={notes} setModal={setModal} />
          )}
        </div>
      </section>
      {modal.show && (
        <NoteModal
          modal={modal}
          setModal={setModal}
          notesDispatch={notesDispatch}
        />
      )}
    </>
  );
}
