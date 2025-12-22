import { useState, useEffect } from "react";
import TodoList from "../Components/TodoList";
import { getNotes, saveNotes } from "../Services/storage";

const Todo = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  // Load notes on page load
  useEffect(() => {
    setNotes(getNotes());
  }, []);

  // Save notes whenever notes change
  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = () => {
    if (note.trim() === "") return;
    setNotes([...notes, note]);
    setNote("");
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 Notes App</h2>

      <input
        type="text"
        placeholder="Write a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addNote}>Save</button>

      <TodoList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default Todo;
