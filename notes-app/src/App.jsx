import { useState } from "react";
import noteIcon from "./assets/note.png";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);

  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delelte this note?",
    );
    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 shadow-lg">
      <div className="flex items-center justify-center gap-3 mb-4">
        <img src={noteIcon} alt="Note icon" className="h-8 w-8" />
        <h2 className="text-2xl font-bold">Notes App</h2>
      </div>
      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
