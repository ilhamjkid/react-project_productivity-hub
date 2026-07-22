import { useContext, useState } from "react";
import { AppDataContext, AuthContext } from "../context/Contexts.js";
import Button from "../components/common/Button.jsx";
import NoteList from "../components/notes/NoteList.jsx";
import NoteModal from "../components/notes/NoteModal.jsx";

export default function NotesPage() {
  const { currentUser } = useContext(AuthContext);
  const { notes } = useContext(AppDataContext);
  const [modal, setModal] = useState({ show: false, type: "", note: null });

  const notesByCurrentUser = notes
    .filter((note) => note.userId === currentUser.id)
    .toReversed();

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
          {notesByCurrentUser.length === 0 ? (
            <h3 className="text-center text-xl">Note Empty</h3>
          ) : (
            <NoteList notes={notesByCurrentUser} setModal={setModal} />
          )}
        </div>
      </section>
      {modal.show && <NoteModal modal={modal} setModal={setModal} />}
    </>
  );
}
