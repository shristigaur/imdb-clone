const TodoItem = ({ note, index, deleteNote }) => {
  return (
    <li>
      {note}
      <button onClick={() => deleteNote(index)}>❌</button>
    </li>
  );
};

export default TodoItem;
