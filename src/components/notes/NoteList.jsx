import Button from "../common/Button.jsx";

export default function NoteList({ notes, setModal }) {
  return (
    <div className="grid w-full gap-6 md:grid-cols-2">
      {notes.toReversed().map((note) => {
        return (
          <div
            key={note.id}
            className="flex flex-col justify-between gap-2 overflow-hidden rounded-lg bg-slate-800 p-4"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">
                {note.title.length >= 30
                  ? note.title.slice(0, 30) + "..."
                  : note.title}
              </h3>
              <p className="text-lg">
                {note.message.length >= 50
                  ? note.message.slice(0, 50) + "..."
                  : note.message}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-slate-400 underline">
                {new Date(note.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <Button
                onClick={() => setModal({ show: true, type: "view", note })}
                bgColor="bg-slate-500"
                size="sm"
              >
                DETAIL
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
