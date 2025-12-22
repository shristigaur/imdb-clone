import TodoItem from "./TodoItem";

const TodoList = ({ notes, deleteNote }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <TodoItem
          key={index}
          note={note}
          index={index}
          deleteNote={deleteNote}
        />
      ))}
    </ul>
  );
};

export default TodoList;
