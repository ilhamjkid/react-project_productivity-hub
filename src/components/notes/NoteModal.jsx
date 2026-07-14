import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../common/Button.jsx";
import NoteModalView from "./NoteModalView.jsx";
import NoteModalFormEdit from "./NoteModalFormEdit.jsx";
import NoteModalFormAdd from "./NoteModalFormAdd.jsx";

export default function NoteModal({ modal, setModal, notesDispatch }) {
  return (
    <div className="fixed inset-0 z-30 h-screen w-full overflow-x-hidden overflow-y-auto bg-slate-950/50 p-5">
      <div className="mx-auto w-full max-w-160 rounded-lg bg-slate-950 text-slate-200">
        <div className="flex justify-end border-b border-b-slate-800 p-4">
          <Button
            onClick={() => setModal({ show: false, type: null, note: null })}
            bgColor="bg-slate-500"
            size="sm"
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </div>
        {modal.type === "view" ? (
          <NoteModalView
            setModal={setModal}
            note={modal.note}
            notesDispatch={notesDispatch}
          />
        ) : modal.type === "edit" ? (
          <NoteModalFormEdit
            setModal={setModal}
            note={modal.note}
            notesDispatch={notesDispatch}
          />
        ) : modal.type === "add" ? (
          <NoteModalFormAdd setModal={setModal} notesDispatch={notesDispatch} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
